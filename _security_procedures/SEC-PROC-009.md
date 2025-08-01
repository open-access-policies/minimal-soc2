---
title: Vulnerability Management Exception Procedure (SEC-PROC-009)
parent: Security Procedures
nav_order: 9
---
### 1. Purpose

To outline the process for formally requesting, approving, and documenting an exception to a remediation Service Level Agreement (SLA) for an identified vulnerability.

### 2. Scope

This procedure applies when an asset owner cannot remediate a vulnerability within the timeframe defined in the Vulnerability Management Policy and requires a formal exception.

### 3. Overview

This procedure provides a structured pathway for managing situations where immediate vulnerability remediation is not feasible. It details the steps for an asset owner to request an exception, the multi-level approval workflow based on vulnerability severity, and the requirement to document approved exceptions in the risk register for regular review.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                           |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**    | Asset Owner                  | Submits a formal Exception Request Form, including a detailed justification, risk analysis, and any compensating controls in place.                                  |
| **2**    | Asset Owner's Manager        | Reviews the request for business validity and approves or denies it.                                                                                               |
| **3**    | Security Officer             | Reviews the request for security implications and approves or denies it.                                                                                           |
| **4**    | CTO                          | For Critical or High-risk vulnerabilities, provides the final layer of approval.                                                                                   |
| **5**    | Security Team                | Documents the approved exception, including its expiration date, in the risk register.                                                                             |
| **6**    | Security Team                | Reviews all active exceptions on a quarterly basis to ensure they are still valid and necessary.                                                                   |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**           |
| --------------------- | -------------------------- | ------------------------------- |
| **1-6**               | SOC 2 Trust Services Criteria | CC7.1 - Risk Mitigation |

### 6. Artifact(s)

A completed and approved Exception Request Form documented in the risk register.

### 7. Definitions

**SLA:** Service Level Agreement.
**CTO:** Chief Technology Officer.

### 8. Responsibilities

| **Role**                | **Responsibility**                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Asset Owner**         | Initiates the exception request and provides all necessary justification and documentation.                      |
| **Asset Owner's Manager** | Provides the initial business approval for the exception request.                                              |
| **Security Officer**    | Provides security approval and ensures proper documentation in the risk register.                              |
| **CTO**                 | Provides final approval for exceptions related to high-impact vulnerabilities.                                 |
