---
title: Third-Party Component Security Review Procedure (ENG-PROC-002)
parent: Engineering Procedures
nav_order: 2
---
### 1. Purpose

The purpose of this procedure is to define the steps for scanning, reviewing, and approving the use of new open-source or commercial software components to minimize security and licensing risks.

### 2. Scope

This procedure applies to all new open-source and commercial third-party software components, libraries, and dependencies being considered for inclusion in company software.

### 3. Overview

This procedure describes the process for managing the security of third-party components. It begins with a developer proposing a new component, followed by automated scanning, a formal review of the results by engineering and security teams, and concludes with a documented approval or denial.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                           |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**    | Developer                    | Proposes the use of a new third-party component by creating an issue ticket and documenting the component's purpose and source.                                      |
| **2**    | Developer / CI/CD Pipeline   | Uses automated Software Composition Analysis (SCA) tools to scan the component for known vulnerabilities (CVEs) and potential software license compliance issues.      |
| **3**    | Development Team Lead & Security Team | Review the SCA scan results. They assess the severity of any identified vulnerabilities and the implications of the component's license.                     |
| **4**    | Development Team             | If significant vulnerabilities are found, the team creates a remediation plan (e.g., wait for a patched version) or formally document a risk acceptance rationale. |
| **5**    | Development Team Lead        | Based on the review and any remediation plan, formally approves or denies the use of the component in the project documentation or ticket.                           |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference** |
| --------------------- | -------------------------- | --------------------- |
| **1-5**               | SOC 2                      | CC8.1                 |
| **1-5**               | NIST SP 800-161            |                       |

### 6. Artifact(s)

A record of the SCA scan results and a formal approval or denial for the component in the project documentation or tracking system.

### 7. Definitions

**SCA (Software Composition Analysis):** An automated process that identifies the open-source software in a codebase to evaluate security, license compliance, and code quality.

**CVE (Common Vulnerabilities and Exposures):** A list of publicly disclosed computer security flaws.

### 8. Responsibilities

| **Role**                | **Responsibility**                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Developer**           | Proposes new components and initiates the SCA scan.                                                            |
| **Development Team Lead** | Reviews scan results, makes the final decision on component use, and ensures proper documentation.             |
| **Security Team**       | Assists in reviewing SCA scan results, provides guidance on vulnerability risk, and reviews risk acceptance cases. |
