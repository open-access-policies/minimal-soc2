---
title: Emergency Change Management Procedure (ENG-PROC-004)
parent: Engineering Procedures
nav_order: 4
---
### 1. Purpose

The purpose of this procedure is to outline the expedited process for authorizing, deploying, and retrospectively documenting an emergency change to resolve a critical issue, such as a service outage or a severe security vulnerability.

### 2. Scope

This procedure applies to all emergency changes required to restore service, fix a critical security flaw, or address an urgent operational issue in the production environment.

### 3. Overview

This procedure defines the workflow for emergency changes. It starts with the identification of a critical issue, followed by obtaining expedited approvals, performing a focused review, deploying the fix, and conducting a formal post-mortem review to ensure proper documentation is completed after the fact.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                           |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**    | Engineer                     | Identifies a critical issue requiring an emergency change and immediately notifies the Engineering Lead and Security Team.                                           |
| **2**    | Engineer                     | Obtains and documents verbal or written approval from an Engineering Lead and a member of the Security Team in an emergency change ticket.                             |
| **3**    | Engineer / Peer Reviewer     | An expedited peer and security review is performed on the proposed change to ensure it is a targeted and necessary fix.                                              |
| **4**    | Engineer                     | Deploys the approved change to the production environment to resolve the critical issue.                                                                           |
| **5**    | Engineering & Security Teams | Conduct a formal post-mortem review within 3 business days of the change. The standard change documentation and pull request are completed retroactively.            |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**     |
| --------------------- | -------------------------- | ------------------------- |
| **1-5**               | SOC 2 Trust Services Criteria | CC8.1 - Change Management |

### 6. Artifact(s)

An emergency change ticket with documented approvals and a link to a post-mortem report.

### 7. Definitions

**Post-Mortem Review:** A formal meeting and report that analyzes an incident or emergency change to understand the cause, impact, and actions taken, and to identify lessons learned to prevent recurrence.

**Critical Issue:** An issue that causes a service outage, data corruption, a severe security vulnerability, or significantly impacts customers' ability to use the service.

### 8. Responsibilities

| **Role**           | **Responsibility**                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Engineer**       | Identifies the need for an emergency change, implements the fix, and obtains necessary approvals.                |
| **Engineering Lead** | Provides approval for the emergency change and participates in the post-mortem review.                         |
| **Security Team**  | Provides approval for the emergency change, assesses security risk, and participates in the post-mortem review. |
