# Copilot Instructions for Cloud-Native SOC 2 Policy Repository

## Project Overview
This is a **Jekyll-based documentation site** containing **SOC 2** compliant Information Security Management System (ISMS) policy and procedure templates specifically designed for **lean cloud-native technology companies**. The content is structured as **template documents with placeholder values** that organizations customize for their cloud infrastructure, DevOps workflows, and modern development practices. Documents use **auditor-grade language** while remaining accessible and practical for implementation in **cloud-first environments** with **minimal workforce overhead** and **streamlined operations**.

## Architecture & Structure

### Content Organization
- **Jekyll Collections**: Each domain has separate `_[domain]_policies/` and `_[domain]_procedures/` directories
- **Naming Convention**: Files use format `[DOMAIN]-[TYPE]-[###].md` (e.g., `AC-POL-001.md`, `SEC-PROC-005.md`)
- **Templates**: Located in `/Templates/` - serve as base structure for new documents optimized for cloud-native operations
- **Navigation**: Main categories defined via parent pages (`Security.md`, `Access Control.md`) with `has_children: true`

### Document Structure Pattern
Every policy/procedure follows a strict template adapted for cloud-native environments:
```yaml
---
title: [Document Title] ([Document ID])
parent: [Domain] [Policies|Procedures]
nav_order: [number]
---
```

**Policies** always include:
1. Objective, 2. Scope (including cloud services), 3. Policy (with numbered subsections addressing cloud controls), 4. Standards Compliance (SOC 2 + cloud frameworks), 5. Definitions (cloud-native terminology), 6. Responsibilities (DevOps/SRE roles)

**Procedures** always include:
1. Purpose, 2. Scope (cloud infrastructure context), 3. Overview (automation considerations), 4. Procedure (step table format with automation hooks), 5. Standards Compliance (multi-framework)

## Key Development Patterns

### Cloud-Native Placeholder System
- All customizable values use `**[Bracket Format]**` optimized for lean tech companies:
  - `**[Company Name]**`, `**[Cloud Provider, e.g., AWS/GCP/Azure]**`
  - `**[Container Registry, e.g., ECR/GCR/ACR]**`, `**[CI/CD Platform, e.g., GitHub Actions/GitLab CI]**`
  - `**[Monitoring Tool, e.g., DataDog/New Relic]**`, `**[IaC Tool, e.g., Terraform/Pulumi]**`
- Duration placeholders favor extended intervals to reduce operational burden: `**[Review Period, e.g., quarterly, annually]**`
- Role placeholders assume minimal staffing: `**[Role Title, e.g., Engineering Lead/CTO/Tech Lead]**`
- **Efficiency Focus**: Default to automated controls, self-service processes, and single-approver workflows

### Multi-Framework Compliance Tables
Every document maps requirements to **multiple compliance frameworks** relevant to tech companies:
```markdown
| **Policy Section** | **Standard/Framework** | **Control Reference** |
| ------------------ | ---------------------- | --------------------- |
| **3.2, 3.5**       | SOC 2 Trust Services Criteria | CC6.1 - Logical Access Security |
| **3.2, 3.5**       | ISO 27001             | A.9.2.1 - User Registration |
| **3.2, 3.5**       | PCI DSS               | 8.1 - User Identification |
| **3.2, 3.5**       | NIST CSF              | PR.AC-1 - Identity Management |
| **3.2, 3.5**       | CIS Controls          | 5.1 - Account Management |
```

### Lean Procedure Step Tables
All procedures use streamlined format optimized for minimal manual intervention:
```markdown
| **Step** | **Who** | **What** | **Automation** | **Frequency** |
| -------- | ------- | -------- | -------------- | ------------- |
| **1**    | [Role]  | [Action] | [Tool/Script/API] | [Automated/Quarterly/Annual] |
```

## Development Workflows

### Adding New Lean Cloud-Native Documents
1. Copy appropriate template from `/Templates/`
2. Follow naming convention: `[PREFIX]-[TYPE]-[###].md`
3. Update frontmatter with correct parent collection
4. Replace template placeholders with lean organization-specific content
5. Add multi-framework compliance mappings (SOC 2, PCI DSS, GDPR, ISO 27001)
6. **Prioritize automated controls** over manual processes
7. **Minimize review frequencies** - prefer quarterly/annual over monthly
8. **Eliminate multi-layer approvals** - single approver maximum

### Local Development
```bash
bundle install
bundle exec jekyll serve
# Site available at http://localhost:4000/minimal-soc2
```

### Collection Management
Each domain requires two collections in `_config.yml`:
- `[domain]_policies` and `[domain]_procedures`
- Both need `output: true` and `permalink: /:collection/:path/`
- Defaults section must specify `layout: "page"` for each collection

## Theme & Styling Architecture

### Jekyll Configuration (`_config.yml`)
- **Base Theme**: Hydejack v9.2.1 via `remote_theme: "hydecorp/hydejack@v9.2.1"`
- **Color Scheme**: Solid gray accent `#bababa` for professional appearance
- **Typography**: Latin Modern Roman font family for academic/legal document aesthetic
- **Navigation**: Custom `sidebar_links` configuration for main domain categories

### Custom Font Implementation
Located in `_includes/my-head.html` and `/assets/fonts/`:
```html
@font-face {
    font-family: 'Latin Modern Roman';
    src: url('/minimal-soc2/assets/fonts/latinmodernroman_10regular_macroman/lmroman10-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
```
- **Font Variants**: Regular, Bold, Italic, Bold-Italic
- **Global Override**: `* { font-family: 'Latin Modern Roman', serif !important; }`
- **Icon Font Exception**: Preserves `icomoon` for social media icons

### Visual Design System (`_sass/my-style.scss`)
- **Sidebar**: Dark gray with 40% transparency (`rgba(64, 64, 64, 0.4)`)
- **Backdrop Effects**: `backdrop-filter: blur(10px)` with rounded corners (`border-radius: 8px`)
- **Color Scheme**: 
  - Main content: Black text (`#000`) on white background
  - Sidebar: White text on translucent dark background
  - Accent: `#bababa` for links and highlights
- **Typography**: Line height 1.6 for readability, letter-spacing 0.5px for headings

### Layout Overrides
- **Title Suppression**: `hide_title: true` and `no_page_title: true` in defaults
- **Content Structure**: Forces all collections to use `layout: "page"`
- **Print Styles**: Removes sidebar/navigation, adds URL references for links

## Content Guidelines

### Lean Cloud-Native SOC 2 Compliance Focus
- **Primary Framework**: SOC 2 Trust Services Criteria with detailed control mappings for cloud environments
- **Additional Frameworks**: PCI DSS (payment processing), GDPR (data protection), ISO 27001, NIST Cybersecurity Framework
- **Trust Services Categories**: Security (all common criteria) plus Availability and Processing Integrity for SaaS
- **Control References**: Use specific format `CC6.1 - Logical Access Security` with cloud implementation guidance
- **Cloud-Native Controls**: Focus on container security, API gateways, serverless functions, microservices architecture
- **Automated Compliance**: Emphasize Infrastructure as Code, policy as code, and continuous compliance monitoring
- **Minimal Overhead**: Design controls that operate with minimal human intervention

### Cloud-Native Technology Assumptions
- **Infrastructure**: Kubernetes clusters, serverless functions, managed cloud services
- **Development**: CI/CD pipelines, containerized applications, microservices architecture
- **Monitoring**: Centralized logging, APM tools, security monitoring (SIEM/SOAR)
- **Identity**: SSO/SAML integration, API key management, service mesh security
- **Data**: Encrypted at rest/transit, managed databases, object storage with versioning
- **Backup**: Cross-region replication, point-in-time recovery, disaster recovery automation

### Lean Tech Company Role Consolidation
- **Engineering Leadership**: CTO/VP Engineering handles strategic security decisions and final approvals
- **Tech Leads/Senior Engineers**: Day-to-day security implementation and operational decisions
- **Platform Engineers**: Infrastructure automation, developer experience, reliability, security tooling
- **DevOps/SRE**: CI/CD security, vulnerability management, compliance automation, monitoring
- **Maximum Role Overlap**: Single individuals wear multiple hats, eliminate specialized security roles
- **Single Approver Model**: One person per approval workflow, no committee-based decisions

### Minimal Effort Process Implementation
- **Infrastructure as Code**: All infrastructure changes via version-controlled templates (Terraform/CloudFormation)
- **GitOps Workflows**: Policy changes deployed via Git commits with automated validation
- **API-Driven Controls**: Programmatic enforcement via cloud provider APIs and Kubernetes operators
- **Exception-Based Monitoring**: Alert only on policy violations, not routine compliance checks
- **Quarterly Reviews**: Most manual reviews happen quarterly unless regulatory requirements mandate more frequent
- **Annual Assessments**: Major policy reviews and risk assessments happen annually
- **Self-Service Access**: Developers can provision resources within guardrails without approval workflows

### Streamlined Language & Implementation Standards
- **Automation First**: Describe manual processes only when automation is not feasible
- **Minimal Frequency**: Default to longest acceptable intervals (annual > quarterly > monthly)
- **Single Approval**: Never require more than one approval for any process
- **Self-Service Preferred**: Enable teams to operate independently within policy guardrails
- **Examples**: 
  - Efficient: "Access reviews shall be conducted annually via automated reporting"
  - Lean: "Container vulnerability scanning is automatically enforced via admission controllers; manual override requires Tech Lead approval for business-critical deployments"

### Cloud Provider Integration Patterns
- **AWS**: IAM roles, CloudTrail, Config Rules, Security Hub, GuardDuty
- **Google Cloud**: Cloud IAM, Cloud Audit Logs, Security Command Center, Binary Authorization
- **Azure**: Azure AD, Activity Logs, Security Center, Azure Policy
- **Multi-Cloud**: Assume hybrid/multi-cloud architectures with consistent policy enforcement
- **Vendor Lock-in Avoidance**: Prefer open standards and portable solutions where possible
- **Managed Services First**: Leverage cloud provider managed services to reduce operational overhead

### Lean DevOps Security Integration
- **Shift-Left Security**: Security scanning in development phase, IDE plugins, pre-commit hooks
- **CI/CD Security**: Automated pipeline security scanning, artifact signing, secure deployment practices
- **Secrets Management**: Cloud secret managers with automatic rotation, short-lived credentials
- **Infrastructure Security**: Network segmentation via cloud-native tools, zero-trust architecture, service mesh security
- **Observability**: Security metrics in existing monitoring dashboards, minimal additional tooling

### Minimal Effort Compliance Automation
- **Policy as Code**: Open Policy Agent (OPA), cloud provider policy engines with automatic enforcement
- **Continuous Compliance**: Automated evidence collection, real-time dashboard updates, exception reporting only
- **Audit Automation**: Programmatic artifact collection, automated report generation
- **Change Management**: GitOps for infrastructure, approval workflows via pull requests (single reviewer)
- **Documentation**: Auto-generated compliance documentation from Infrastructure as Code

### Efficiency-Focused Review Cycles
- **Daily**: Automated security scanning, vulnerability detection, policy enforcement
- **Weekly**: Automated access reports, security metrics review (no manual action required)
- **Monthly**: Exception review only (investigate policy violations)
- **Quarterly**: Manual access reviews, vendor assessments, security metrics analysis
- **Annually**: Policy updates, risk assessments, compliance framework updates, comprehensive security review

### Template Customization for Lean Tech Companies
- Never remove placeholder brackets from template files
- Maintain section numbering consistency across related documents
- Keep multi-framework compliance mapping tables accurate and complete
- Preserve formal audit tone while emphasizing operational efficiency
- Default to automated controls that require minimal human intervention
- **Eliminate bureaucracy**: Remove approval chains, committees, and excessive documentation requirements
- **Extend intervals**: Use longest compliant timeframes for manual activities

### Streamlined Cross-References for Cloud Environments
- Policies reference other policies by ID: "as defined in the Container Security Policy (SEC-POL-008)"
- Procedures reference Infrastructure as Code templates and runbooks
- Maintain document hierarchy: cloud architecture → policies → automated procedures
- Link to external technical documentation (cloud provider docs, open source projects)
- **Avoid circular dependencies**: Ensure clear decision-making hierarchy without approval loops

## Integration Points
- **GitHub Pages**: Auto-deploys via Jekyll when pushed to main branch
- **Jekyll Collections**: Content organization via `_config.yml` collections
- **Navigation**: Automatic via frontmatter `parent` and `nav_order` properties
- **Styling**: Custom SCSS in `_sass/` overrides default theme
- **CI/CD Integration**: Document validation can be integrated into deployment pipelines

When editing documents, preserve the formal compliance language while ensuring controls are practical for lean cloud-native technology organizations operating with minimal administrative overhead. Focus on the essential set of policies and procedures needed for SOC 2 compliance while maximizing automation, minimizing manual effort, and eliminating unnecessary approval processes. Emphasize Infrastructure as Code, DevSecOps integration, and continuous compliance monitoring that operates efficiently at scale with minimal human intervention.
