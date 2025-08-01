---
title: Lost or Stolen Mobile Device Response Procedure (OP-PROC-003)
parent: Operational Procedures
nav_order: 3
---
### 1. Purpose

To provide the immediate steps a user and the IT Security Team take when a mobile device used for company business is reported lost or stolen.

### 2. Scope

This procedure applies to all users of company-issued or personal mobile devices (BYOD) that are enrolled in the company's Mobile Device Management (MDM) system.

### 3. Overview

This procedure details the rapid response actions mandated to mitigate the security risk arising from a lost or stolen mobile device. The primary goals are to protect company data by remotely locking and wiping the device and to prevent unauthorized access by revoking associated credentials.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                              |
| -------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | User                         | Immediately (within 1 hour of discovery) reports the lost or stolen device to the IT Security Team through the designated emergency contact channel.                    |
| **2**    | IT Security Team             | Upon receiving the report, immediately initiates the remote lock command via the MDM system to prevent access to the device.                                          |
| **3**    | IT Security Team             | Initiates the remote wipe command via the MDM system to erase all corporate data from the device.                                                                     |
| **4**    | IT Security Team             | Immediately revokes all access credentials associated with the device, including disabling the user's primary account, VPN access, and any application-specific passwords. |
| **5**    | IT Security Team             | Creates a formal incident report to document the event, the actions taken, and the outcome.                                                                           |

### 5. Standards Compliance

This section maps the procedure steps to specific controls from relevant information security standards.

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**        |
| --------------------- | -------------------------- | ---------------------------- |
| **1-5**               | SOC 2 Trust Services Criteria | CC6.4 - Physical Access |

### 6. Artifact(s)

A completed incident report documenting the loss/theft, response actions, and resolution.

### 7. Definitions

**Remote Lock:** A feature of MDM software that allows an administrator to remotely make a device inaccessible.

**Remote Wipe:** A feature of MDM software that allows an administrator to remotely delete all data from a device.

### 8. Responsibilities

| **Role**           | **Responsibility**                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **User**           | Responsible for the timely reporting of a lost or stolen device.                                               |
| **IT Security Team** | Responsible for executing the remote lock and wipe procedures, revoking credentials, and documenting the incident. |
