---
title: Standard Change Management Procedure (ENG-PROC-003)
parent: Engineering Procedures
nav_order: 3
---
### 1. Purpose

The purpose of this procedure is to detail the end-to-end process for a standard, non-emergency change to a production application or its configuration, ensuring that all changes are properly developed, tested, reviewed, and approved.

### 2. Scope

This procedure applies to all standard, non-emergency changes to production applications, infrastructure, and related system configurations.

### 3. Overview

This procedure outlines the standard workflow for managing changes. It begins with a developer creating a ticket and a feature branch, followed by code development, a peer and security review via a pull request, QA testing, and final approval from an Engineering Lead before being merged for deployment.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                            |
| -------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Developer                    | Creates an issue ticket in the tracking system to document the planned change and creates a new feature branch in the source code repository. |
| **2**    | Developer                    | Submits a pull request when development is complete, filling out the required pull request template, including a security checklist.      |
| **3**    | Peer Reviewer                | A qualified peer reviews the code for correctness, quality, and adherence to coding standards, and provides approval on the pull request. |
| **4**    | Security Team                | Reviews the pull request for any security implications. Approval is required for changes impacting security controls or sensitive data. |
| **5**    | QA Team                      | Tests the changes in a dedicated staging environment to verify functionality and ensure no regressions are introduced. Provides sign-off. |
| **6**    | Engineering Lead             | Provides the final review and approval to merge the pull request into the main branch, authorizing its deployment to production.      |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**        |
| --------------------- | -------------------------- | ---------------------------- |
| **1-6**               | SOC 2 Trust Services Criteria | CC8.1 - Change Management |

### 6. Artifact(s)

A merged GitHub pull request containing all required reviews, approvals, test results, and a link to the original issue ticket.

### 7. Definitions

**Pull Request:** A mechanism for a developer to notify team members that they have completed a feature. It allows others to review, discuss, and approve the code before it is merged into the main codebase.

**Feature Branch:** A source-control branch used to develop a new feature in isolation. When the feature is complete, the branch is merged back into the main branch.

### 8. Responsibilities

| **Role**           | **Responsibility**                                                              |
| ------------------ | ------------------------------------------------------------------------------- |
| **Developer**      | Implements the change, creates the pull request, and responds to feedback.      |
| **Peer Reviewer**  | Conducts a thorough review of the code changes.                                 |
| **Security Team**  | Assesses the security impact of the change and provides approval.               |
| **QA Team**        | Validates the functionality and quality of the change before release.           |
| **Engineering Lead** | Provides final authorization for the change to be deployed to production.       |
