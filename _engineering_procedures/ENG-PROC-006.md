---
title: Privileged Infrastructure Access Review Procedure (ENG-PROC-006)
parent: Engineering Procedures
nav_order: 6
---
### 1. Purpose

The purpose of this procedure is to outline the steps for conducting and documenting the required quarterly reviews of all user accounts with privileged access to production infrastructure, ensuring the principle of least privilege is maintained.

### 2. Scope

This procedure applies to all user accounts, service accounts, and roles with administrative or privileged access to any production system, database, or network component.

### 3. Overview

This procedure describes the quarterly access review process. It begins with the Security Team generating a list of privileged accounts, which is then distributed to system owners for review. Managers attest to the continued need for each access right. Any unnecessary access is then revoked, and the completed attestations are stored for audit purposes.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                           |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**    | Security Team                | On a quarterly basis, generates a report from the identity and access management system listing all users and service accounts with privileged access to production infrastructure. |
| **2**    | Security Team                | Sends the access report to the relevant system owners or managers responsible for the systems listed.                                                              |
| **3**    | System Owner / Manager       | Reviews each user's access rights on the report and attests in writing (e.g., via a signed form or an approval in a tracking ticket) that the access is still required for their job function. |
| **4**    | IT Team / System Administrator | Upon notification from the manager or Security Team, revokes any access that is no longer necessary or has been denied during the review.                          |
| **5**    | Security Team                | Collects and stores the completed, signed attestations as an audit record of the quarterly review.                                                                 |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**     |
| --------------------- | -------------------------- | ------------------------- |
| **1-5**               | SOC 2 Trust Services Criteria | CC6.1 - Logical Access Security |

### 6. Artifact(s)

A signed access review attestation form or a completed access review ticket with documented approvals from the system owner or manager.

### 7. Definitions

**Privileged Access:** Access rights beyond those of a standard user. This includes administrative rights to servers, databases, applications, or network devices.

**Least Privilege:** The principle of restricting access rights for users to the minimum permissions they need to perform their work.

**Attestation:** The act of formally confirming that something is true, correct, or has been completed.

### 8. Responsibilities

| **Role**                 | **Responsibility**                                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Security Team**        | Manages the overall access review process, generates reports, distributes them, and stores the final attestations. |
| **System Owner / Manager** | Reviews the access for their systems and personnel, and attests to the ongoing need for privileged access.     |
| **IT Team / System Administrator** | Revokes access rights as directed by the outcome of the review.                                        |
