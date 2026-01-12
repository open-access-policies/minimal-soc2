/**
 * Persona-Driven UX Tests for Open Access Policies Sites
 *
 * These tests evaluate the site from three key user perspectives:
 * 1. Compliance Officer (Sarah) - Needs to find specific controls quickly
 * 2. Security Engineer (Marcus) - Implements procedures and needs technical detail
 * 3. SOC 2 Auditor (Jennifer) - Verifies control coverage and evidence
 */

import { test, expect, Page } from '@playwright/test';

// Test configuration
const BASE_URL = process.env.TEST_URL || 'http://localhost:8088';

interface PersonaResult {
  persona: string;
  task: string;
  success: boolean;
  timeMs: number;
  issues: string[];
}

const results: PersonaResult[] = [];

// Helper to measure task completion time
async function measureTask(
  page: Page,
  persona: string,
  task: string,
  taskFn: () => Promise<boolean>
): Promise<PersonaResult> {
  const start = Date.now();
  const issues: string[] = [];
  let success = false;

  try {
    success = await taskFn();
  } catch (error) {
    issues.push(String(error));
  }

  const result: PersonaResult = {
    persona,
    task,
    success,
    timeMs: Date.now() - start,
    issues,
  };
  results.push(result);
  return result;
}

test.describe('Compliance Officer (Sarah) - Finding Controls', () => {
  test('can navigate to Access Control Policy within 10 seconds', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Compliance Officer', 'Find Access Control Policy', async () => {
      // Should find and click Access Control section
      const accessControlSection = page.locator('.nav-section-toggle:has-text("Access Control")');
      await expect(accessControlSection).toBeVisible({ timeout: 5000 });

      // Click to expand if needed
      const isExpanded = await accessControlSection.getAttribute('aria-expanded');
      if (isExpanded !== 'true') {
        await accessControlSection.click();
      }

      // Find and click the Access Control Policy link
      const policyLink = page.locator('a:has-text("Access Control Policy")');
      await expect(policyLink).toBeVisible({ timeout: 3000 });
      await policyLink.click();

      // Verify content loaded
      await expect(page.locator('.policy-content h1')).toContainText(/access control/i, { timeout: 5000 });
      return true;
    });

    expect(result.success).toBe(true);
    expect(result.timeMs).toBeLessThan(10000);
  });

  test('can find a specific procedure using navigation', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Compliance Officer', 'Find Incident Response Plan', async () => {
      // Find and expand Resilience section
      const resilienceSection = page.locator('.nav-section-toggle:has-text("Resilience")');
      await resilienceSection.click();

      // Wait for items to be visible
      await page.waitForTimeout(300);

      // Find Incident Response Plan
      const procedureLink = page.locator('a:has-text("Incident Response Plan")');
      await expect(procedureLink).toBeVisible({ timeout: 3000 });
      await procedureLink.click();

      // Verify content
      await expect(page.locator('.policy-content')).toContainText(/incident/i, { timeout: 5000 });
      return true;
    });

    expect(result.success).toBe(true);
  });

  test('home page clearly explains available policy domains', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Compliance Officer', 'Understand available domains from home', async () => {
      // Check that home content is visible
      const content = page.locator('.policy-content');
      await expect(content).toBeVisible({ timeout: 5000 });

      // Verify key sections are mentioned
      const text = await content.textContent();
      const requiredDomains = ['Access Control', 'Engineering', 'Operational', 'Security', 'Resilience'];

      for (const domain of requiredDomains) {
        if (!text?.includes(domain)) {
          throw new Error(`Missing domain: ${domain}`);
        }
      }
      return true;
    });

    expect(result.success).toBe(true);
  });
});

test.describe('Security Engineer (Marcus) - Technical Implementation', () => {
  test('can navigate between related policies and procedures', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Security Engineer', 'Navigate policy to procedure flow', async () => {
      // Start with Engineering section
      const engineeringSection = page.locator('.nav-section-toggle:has-text("Engineering")');
      await engineeringSection.click();
      await page.waitForTimeout(300);

      // Find Secure Software Development policy
      const policyLink = page.locator('a:has-text("Secure Software Development")');
      await policyLink.click();
      await page.waitForTimeout(500);

      // Now find related procedure (App Security Testing)
      const procedureLink = page.locator('a:has-text("App Security Testing")');
      await procedureLink.click();

      // Verify procedure loaded
      await expect(page.locator('.policy-content')).toContainText(/security testing/i, { timeout: 5000 });
      return true;
    });

    expect(result.success).toBe(true);
  });

  test('navigation sections collapse/expand properly', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Security Engineer', 'Test section collapse/expand', async () => {
      // Click Access Control to collapse it (it starts expanded)
      const accessSection = page.locator('.nav-section-toggle:has-text("Access Control")');
      await accessSection.click();
      await page.waitForTimeout(300);

      // Verify it collapsed
      const items = page.locator('.nav-section:has-text("Access Control") .nav-section-items');
      await expect(items).toHaveClass(/collapsed/);

      // Click again to expand
      await accessSection.click();
      await page.waitForTimeout(300);

      // Verify expanded
      await expect(items).not.toHaveClass(/collapsed/);
      return true;
    });

    expect(result.success).toBe(true);
  });

  test('policy content renders markdown properly', async ({ page }) => {
    await page.goto(BASE_URL + '#security_policies/SEC-POL-001');

    const result = await measureTask(page, 'Security Engineer', 'Verify markdown rendering', async () => {
      // Wait for content to load
      await page.waitForTimeout(1000);

      // Check for properly rendered headings
      const h1 = page.locator('.policy-content h1');
      await expect(h1).toBeVisible({ timeout: 5000 });

      // Check for lists or paragraphs
      const paragraphs = await page.locator('.policy-content p').count();
      if (paragraphs < 2) {
        throw new Error('Expected multiple paragraphs in policy content');
      }

      return true;
    });

    expect(result.success).toBe(true);
  });
});

test.describe('SOC 2 Auditor (Jennifer) - Control Verification', () => {
  test('can quickly access all policy domains', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'SOC 2 Auditor', 'Verify all domains accessible', async () => {
      const sections = ['Access Control', 'Engineering', 'Operational', 'Resilience', 'Security'];

      for (const section of sections) {
        const sectionToggle = page.locator(`.nav-section-toggle:has-text("${section}")`);
        await expect(sectionToggle).toBeVisible({ timeout: 3000 });
      }
      return true;
    });

    expect(result.success).toBe(true);
  });

  test('policies have clear structure with version info', async ({ page }) => {
    await page.goto(BASE_URL + '#access_control_policies/AC-POL-001');

    const result = await measureTask(page, 'SOC 2 Auditor', 'Verify policy structure', async () => {
      await page.waitForTimeout(1000);

      const content = page.locator('.policy-content');
      await expect(content).toBeVisible({ timeout: 5000 });

      // Check for heading
      const h1 = page.locator('.policy-content h1');
      await expect(h1).toBeVisible();

      // Policies should have sections (h2 or h3)
      const subheadings = await page.locator('.policy-content h2, .policy-content h3').count();
      if (subheadings < 1) {
        throw new Error('Expected policy to have subsections');
      }

      return true;
    });

    expect(result.success).toBe(true);
  });

  test('navigation highlights current document', async ({ page }) => {
    await page.goto(BASE_URL + '#security_policies/SEC-POL-001');

    const result = await measureTask(page, 'SOC 2 Auditor', 'Verify active nav highlighting', async () => {
      await page.waitForTimeout(1000);

      // Check that the link is marked as active
      const activeLink = page.locator('.sidebar-nav a.active');
      await expect(activeLink).toBeVisible({ timeout: 3000 });

      // Verify it's the correct link
      const href = await activeLink.getAttribute('href');
      expect(href).toContain('SEC-POL-001');

      return true;
    });

    expect(result.success).toBe(true);
  });

  test('site provides good print layout', async ({ page }) => {
    await page.goto(BASE_URL + '#access_control_policies/AC-POL-001');

    const result = await measureTask(page, 'SOC 2 Auditor', 'Verify print readiness', async () => {
      await page.waitForTimeout(1000);

      // Emulate print media
      await page.emulateMedia({ media: 'print' });

      // In print mode, sidebar should be hidden
      const sidebar = page.locator('.sidebar');
      await expect(sidebar).toBeHidden();

      // Content should still be visible
      const content = page.locator('.policy-content');
      await expect(content).toBeVisible();

      return true;
    });

    expect(result.success).toBe(true);
  });
});

test.describe('Accessibility', () => {
  test('skip nav link works', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Accessibility', 'Skip nav functionality', async () => {
      // Tab to skip nav
      await page.keyboard.press('Tab');

      // Skip nav should be focused
      const skipNav = page.locator('.skip-nav');
      await expect(skipNav).toBeFocused();

      return true;
    });

    expect(result.success).toBe(true);
  });

  test('navigation is keyboard accessible', async ({ page }) => {
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Accessibility', 'Keyboard navigation', async () => {
      // Tab multiple times to reach sidebar navigation
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Tab');
      }

      // Should be able to interact with nav toggles
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();

      return true;
    });

    expect(result.success).toBe(true);
  });
});

test.describe('Mobile Responsiveness', () => {
  test('sidebar toggle works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);

    const result = await measureTask(page, 'Mobile User', 'Mobile sidebar toggle', async () => {
      // Sidebar should be hidden initially
      const sidebar = page.locator('.sidebar');

      // Mobile menu toggle should be visible
      const menuToggle = page.locator('.mobile-menu-toggle');
      await expect(menuToggle).toBeVisible({ timeout: 3000 });

      // Click to open
      await menuToggle.click();
      await page.waitForTimeout(300);

      // Sidebar should now be visible
      await expect(sidebar).toHaveClass(/open/);

      return true;
    });

    expect(result.success).toBe(true);
  });
});

// Generate report after all tests
test.afterAll(async () => {
  const report = generateReport(results);
  console.log('\n' + report);
});

function generateReport(results: PersonaResult[]): string {
  let report = '# Persona-Driven UX Test Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;

  // Group by persona
  const byPersona = results.reduce((acc, r) => {
    if (!acc[r.persona]) acc[r.persona] = [];
    acc[r.persona].push(r);
    return acc;
  }, {} as Record<string, PersonaResult[]>);

  for (const [persona, tasks] of Object.entries(byPersona)) {
    const passed = tasks.filter(t => t.success).length;
    const total = tasks.length;
    const avgTime = Math.round(tasks.reduce((sum, t) => sum + t.timeMs, 0) / total);

    report += `## ${persona}\n\n`;
    report += `**Pass Rate:** ${passed}/${total} (${Math.round(passed/total*100)}%)\n`;
    report += `**Average Task Time:** ${avgTime}ms\n\n`;

    report += '| Task | Status | Time | Issues |\n';
    report += '|------|--------|------|--------|\n';

    for (const task of tasks) {
      const status = task.success ? 'PASS' : 'FAIL';
      const issues = task.issues.length > 0 ? task.issues.join(', ') : '-';
      report += `| ${task.task} | ${status} | ${task.timeMs}ms | ${issues} |\n`;
    }
    report += '\n';
  }

  // Summary
  const totalPassed = results.filter(r => r.success).length;
  const totalTests = results.length;

  report += '## Summary\n\n';
  report += `- **Total Tests:** ${totalTests}\n`;
  report += `- **Passed:** ${totalPassed}\n`;
  report += `- **Failed:** ${totalTests - totalPassed}\n`;
  report += `- **Pass Rate:** ${Math.round(totalPassed/totalTests*100)}%\n`;

  return report;
}
