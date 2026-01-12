---
title: Access Control Management Procedure (AC-PROC-004)
parent: Access Control Procedures
nav_order: 4
---
### 1. Purpose

To define the process for requesting, approving, implementing, modifying, and revoking user access to company information systems, ensuring the principle of least privilege is enforced.

### 2. Scope

This procedure applies to all workforce members, managers, system owners, and IT personnel involved in the lifecycle of user access to all company information systems.

### 3. Overview

This procedure covers the end-to-end management of user access, from initial provisioning and modification to final revocation upon termination. It ensures that all access changes are properly authorized, implemented, and documented to maintain a secure environment.

### 4. Procedure

#### 4.1 Access Provisioning/Modification

| **Step** | **Who**                             | **What**                                                                                             |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **1**    | Requestor (User or Manager)         | Submits an access request ticket specifying the system and required permissions.                     |
| **2**    | Manager                             | Approves the request in the ticket, verifying the business need.                                     |
| **3**    | System or Information Owner         | Provides final approval, ensuring the request aligns with data classification and security policies. |
| **4**    | IT Department / System Administrator| Provisions the approved access.                                                                      |

#### 4.2 Access Revocation (Termination)

| **Step** | **Who**                             | **What**                                                                                             |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **1**    | Human Resources                     | Notifies the IT Department of a workforce member's termination.                                      |
| **2**    | IT Department                       | Immediately revokes all logical and physical access for the terminated workforce member.             |
| **3**    | IT Department                       | Confirms completion of all revocation tasks and updates relevant records.                            |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework** | **Control Reference**        |
| --------------------- | ---------------------- | ---------------------------- |
| **4.1, 4.2**          | SOC 2 Trust Services Criteria | CC6.1 - Logical Access Security |

### 6. Artifact(s)

A completed access request ticket showing the full request, approval chain, and implementation details. For terminations, a record of the HR notification and IT's confirmation of access revocation.

### 7. Definitions

*   **System Owner:** The individual or group responsible for the overall procurement, development, integration, modification, operation, and maintenance of an information system.
*   **Information Owner:** The individual with statutory or operational authority for specified information and responsibility for establishing the controls for its generation, collection, processing, dissemination, and disposal.

### 8. Responsibilities

| **Role**                              | **Responsibility**                                                                                             |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Requestor**                         | Initiates access requests with a clear justification for the required permissions.                             |
| **Manager**                           | Provides initial approval for access requests, confirming the business need for their direct reports.          |
| **System/Information Owner**          | Provides final approval for access, ensuring it aligns with security and data handling policies.               |
| **IT Department/System Administrator**| Implements the approved access changes and is responsible for the timely revocation of access upon notification. |
| **Human Resources**                   | Manages the employee lifecycle and provides timely notification of terminations to the IT Department.          |
