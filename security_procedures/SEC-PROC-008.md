---
title: Vulnerability Management Procedure (SEC-PROC-008)
parent: Security Procedures
nav_order: 8
---
### 1. Purpose

To describe the workflow for identifying, prioritizing, remediating, and verifying vulnerabilities across the organization's systems and applications.

### 2. Scope

This procedure applies to all company-owned or managed systems, networks, and applications. It covers the entire lifecycle of a vulnerability from discovery to closure.

### 3. Overview

This procedure outlines the systematic process for managing vulnerabilities. It begins with the discovery of vulnerabilities through various means, followed by prioritization based on risk. It then details the assignment of remediation tasks to asset owners, the remediation process itself, and the final verification by the Security Team to confirm the fix.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                            |
| -------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Security Team                | Discovers vulnerabilities through automated scans, penetration tests, and other sources.                                            |
| **2**    | Security Team                | Prioritizes identified vulnerabilities using CVSS scores and contextual business risk factors.                                      |
| **3**    | Security Team                | Assigns prioritized findings to the appropriate asset owners for remediation, including defined Service Level Agreements (SLAs).      |
| **4**    | Asset Owner                  | Performs remediation actions to fix the vulnerability within the specified SLA.                                                     |
| **5**    | Security Team                | Performs verification scans or other tests to confirm that the vulnerability has been successfully remediated.                      |
| **6**    | Security Team                | Closes the finding in the vulnerability tracking system upon successful verification.                                               |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework** | **Control Reference**        |
| --------------------- | ---------------------- | ---------------------------- |
| **1-6**               | SOC 2 Trust Services Criteria | CC1.2 - Management Oversight |

### 6. Artifact(s)

An entry in the vulnerability tracking system showing the lifecycle of a vulnerability from discovery to verified remediation.

### 7. Definitions

**CVSS:** Common Vulnerability Scoring System. A standard for assessing the severity of computer system security vulnerabilities.
**SLA:** Service Level Agreement. A commitment between a service provider and a client.

### 8. Responsibilities

| **Role**          | **Responsibility**                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| **Security Team** | Responsible for discovering, prioritizing, assigning, and verifying vulnerabilities.                             |
| **Asset Owner**   | Responsible for remediating identified vulnerabilities on their assigned assets within the defined SLAs.         |
