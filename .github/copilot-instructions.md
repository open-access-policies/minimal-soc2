# Copilot Instructions for Minimal SOC 2 Policy Repository

## Project Overview
This is a **Jekyll-based documentation site** containing **SOC 2** compliant Information Security Management System (ISMS) policy and procedure templates for organizations seeking Trust Services Criteria certification. The content is structured as **template documents with placeholder values** that organizations customize for their specific needs. Documents use **auditor-grade language** while remaining accessible and practical for implementation with **professional confidence**.

## Architecture & Structure

### Content Organization
- **Jekyll Collections**: Each domain has separate `_[domain]_policies/` and `_[domain]_procedures/` directories
- **Naming Convention**: Files use format `[DOMAIN]-[TYPE]-[###].md` (e.g., `AC-POL-001.md`, `SEC-PROC-005.md`)
- **Templates**: Located in `/Templates/` - serve as base structure for new documents
- **Navigation**: Main categories defined via parent pages (`Security.md`, `Access Control.md`) with `has_children: true`

### Document Structure Pattern
Every policy/procedure follows a strict template:
```yaml
---
title: [Document Title] ([Document ID])
parent: [Domain] [Policies|Procedures]
nav_order: [number]
---
```

**Policies** always include:
1. Objective, 2. Scope, 3. Policy (with numbered subsections), 4. Standards Compliance, 5. Definitions, 6. Responsibilities

**Procedures** always include:
1. Purpose, 2. Scope, 3. Overview, 4. Procedure (step table format), 5. Standards Compliance

## Key Development Patterns

### Placeholder System
- All customizable values use `**[Bracket Format]**` (e.g., `**[Company Name]**`, `**[Number, e.g., 90]**`)
- Duration placeholders include examples: `**[Duration, e.g., 15 minutes]**`
- Role placeholders specify context: `**[Role Title, e.g., Security Officer]**`
- Professional focus: Default to streamlined roles and effective processes

### Standards Compliance Tables
Every document maps requirements to **SOC 2 Trust Services Criteria** with practical implementation guidance:
```markdown
| **Policy Section** | **Standard/Framework** | **Control Reference** |
| ------------------ | ---------------------- | --------------------- |
| **3.2, 3.5**       | SOC 2 Trust Services Criteria | CC6.1 - Logical Access Security |
| **3.2, 3.5**       | ISO 27001             | A.9.2.1 - User Registration |
```

### Procedure Step Tables
All procedures use consistent tabular format optimized for efficient implementation:
```markdown
| **Step** | **Who** | **What** |
| -------- | ------- | -------- |
| **1**    | [Role]  | [Action] |
```

## Development Workflows

### Adding New Documents
1. Copy appropriate template from `/Templates/`
2. Follow naming convention: `[PREFIX]-[TYPE]-[###].md`
3. Update frontmatter with correct parent collection
4. Replace template placeholders with organization-specific content
5. Add SOC 2 compliance mappings in standards table
6. Focus on minimal viable controls that meet audit requirements

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

### SOC 2 Compliance Focus
- **Primary Framework**: SOC 2 Trust Services Criteria with detailed control mappings
- **Trust Services Categories**: Security (all common criteria)
- **Control References**: Use specific format `CC6.1 - Logical Access Security` with descriptive titles
- **Minimal Viable Controls**: Focus on essential controls that small companies can realistically implement
- **Auditor Language**: Documents written for SOC 2 audit readiness with practical implementation approach

### Professional Implementation Approach
- **Role Consolidation**: Assume roles may be combined (e.g., IT Manager = Security Officer)
- **Process Simplification**: Streamlined procedures suitable for teams < 50 people
- **Tool Integration**: Leverage common small business tools (Google Workspace, Microsoft 365, etc.)
- **Cost Awareness**: Prefer low-cost or free solutions where possible
- **Implementation Reality**: Controls must be achievable without dedicated compliance team

### Language & Tone Standards
- **Accessibility**: Complex compliance concepts explained clearly for all organizational levels
- **Precision**: Use specific SOC 2 control citations (e.g., "CC6.1 - Logical Access Security")
- **Authority**: Declarative statements using "shall" for mandatory requirements
- **Practicality**: Include implementation guidance suitable for efficient operations
- **Examples**: 
  - Compliant: "Administrative access shall be granted on a limited, as-needed basis"
  - Practical: "For accounts with elevated privileges (e.g., admin, root), document business justification and review quarterly"

### Template Customization
- Never remove placeholder brackets from template files
- Maintain section numbering consistency across related documents
- Keep SOC 2 compliance mapping tables accurate and complete
- Preserve formal tone while adding practical implementation notes
- Default to minimal viable controls that satisfy audit requirements

### Cross-References
- Policies reference other policies by ID: "as defined in the Password Policy (SEC-POL-002)"
- Procedures reference parent policies in scope/overview sections
- Maintain document hierarchy: supplements → policies → procedures

## Integration Points
- **GitHub Pages**: Auto-deploys via Jekyll when pushed to main branch
- **Jekyll Collections**: Content organization via `_config.yml` collections
- **Navigation**: Automatic via frontmatter `parent` and `nav_order` properties
- **Styling**: Custom SCSS in `_sass/` overrides default theme

When editing documents, preserve the formal compliance language while ensuring controls are practical for organizational implementation. Focus on the comprehensive set of policies and procedures needed for SOC 2 compliance.
