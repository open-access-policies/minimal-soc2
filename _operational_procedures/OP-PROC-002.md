---
title: Mobile Device Onboarding and Security Configuration Procedure (OP-PROC-002)
parent: Operational Procedures
nav_order: 2
---
### 1. Purpose

To detail the steps for enrolling a new or personal device in the Mobile Device Management (MDM) system and ensuring it meets all security configuration mandates before being granted access to company resources.

### 2. Scope

This procedure applies to all employees, contractors, and other authorized users who wish to use a personal or company-issued mobile device to access company data or systems.

### 3. Overview

This procedure describes the process for onboarding a mobile device, from obtaining management approval to final verification of security compliance. It ensures that all devices connecting to the corporate network are properly managed and secured, minimizing the risk of data loss or unauthorized access.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                              |
| -------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | User                         | Submits a request to their manager for approval to use a mobile device for business purposes.                                                                         |
| **2**    | Manager                      | Reviews the request. If approved, forwards the approval to the IT Security Team.                                                                                      |
| **3**    | IT Security Team             | Provides the user with instructions for enrolling their device into the company's Mobile Device Management (MDM) solution.                                            |
| **4**    | User                         | Enrolls their device in the MDM system and accepts the company's terms and conditions for mobile device usage.                                                        |
| **5**    | MDM System (Automated)       | Automatically scans the device to verify compliance with all mandated security policies, including passcode complexity, device encryption, and OS version.             |
| **6**    | IT Security Team             | Reviews the compliance report from the MDM system. If the device is compliant, grants the device access to the approved company resources.                               |
| **7**    | IT Security Team             | If the device is not compliant, notifies the user of the specific remediation steps mandated. Access is denied until the device meets all security mandates.      |

### 5. Standards Compliance

This section maps the procedure steps to specific controls from relevant information security standards.

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**        |
| --------------------- | -------------------------- | ---------------------------- |
| **1-7**               | SOC 2 Trust Services Criteria | CC6.7 - Data Transmission |

### 6. Artifact(s)

A record of MDM enrollment and a compliance verification report stored within the MDM system.

### 7. Definitions

**MDM (Mobile Device Management):** Software that allows an organization to secure, monitor, and manage mobile devices, such as smartphones and tablets.

**BYOD (Bring Your Own Device):** A policy that allows employees to use their personal devices for work-related purposes.

### 8. Responsibilities

| **Role**           | **Responsibility**                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **User**           | Responsible for requesting approval, enrolling their device, and ensuring it remains compliant with policies.  |
| **Manager**        | Responsible for approving or denying requests for mobile device usage for their direct reports.                |
| **IT Security Team** | Responsible for managing the MDM system, providing enrollment instructions, and verifying device compliance. |
