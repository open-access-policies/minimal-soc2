---
title: Cryptographic Key Lifecycle Management Procedure (OP-PROC-001)
parent: Operational Procedures
nav_order: 1
---
### 1. Purpose

To provide the technical steps for the secure generation, distribution, storage, rotation, and destruction of cryptographic keys.

### 2. Scope

This procedure applies to all cryptographic keys used to protect company and customer data, including keys used for data at rest and data in transit encryption. It applies to all personnel involved in the management of cryptographic keys.

### 3. Overview

This procedure outlines the secure lifecycle management of cryptographic keys using approved cloud provider key management services (e.g., AWS KMS, Azure Key Vault). It ensures that all key management actions are performed securely through the cloud platform's native tools and that all activities are logged for audit purposes.

### 4. Procedure

#### 4.1 Key Generation

| **Step** | **Who**                   | **What**                                                                                                                                                                                 |
| -------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Cloud Operations Team     | Create new Customer-Managed Keys (CMKs) within the approved cloud provider's key management service (e.g., AWS KMS, Azure Key Vault).                                                    |
| **2**    | Cloud Operations Team     | Ensure key configuration meets the requirements defined in the Encryption and Key Management Policy (e.g., AES-256 or stronger).                                                         |
| **3**    | Automated (Cloud Service) | The key generation event is automatically logged by the cloud provider's audit service (e.g., AWS CloudTrail), including the key identifier, generation time, and responsible user/role. |

#### 4.2 Key Access and Use

| **Step** | **Who**                   | **What**                                                                                                                                                                         |
| -------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Cloud Operations Team     | Grant permissions to systems, services, or roles to _use_ the keys via cloud provider Identity and Access Management (IAM) policies, following the principle of least privilege. |
| **2**    | Cloud Operations Team     | Ensure that IAM policies do not grant permissions to export or directly view key material.                                                                                       |
| **3**    | Automated (Cloud Service) | The key usage event is automatically logged by the cloud provider's audit service.                                                                                               |

#### 4.3 Key Storage

| **Step** | **Who**                   | **What**                                                                                                                         |
| -------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Automated (Cloud Service) | All cryptographic keys are securely stored and managed entirely within the approved cloud provider's key management service.     |
| **2**    | Cloud Operations Team     | Implement strict IAM access controls to the key management service, limiting administrative access to authorized personnel only. |

#### 4.4 Key Rotation

| **Step** | **Who**                   | **What**                                                                                                                                                                   |
| -------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Cloud Operations Team     | Configure automated annual key rotation for all Customer-Managed Keys (CMKs) within the cloud provider's key management service.                                           |
| **2**    | Automated (Cloud Service) | The cloud service automatically generates a new backing key and associates it with the CMK. The old backing key is retained to decrypt data previously encrypted under it. |
| **3**    | Automated (Cloud Service) | The rotation event is automatically logged by the cloud provider's audit service.                                                                                          |

#### 4.5 Key Destruction

| **Step** | **Who**                   | **What**                                                                                                                                         |
| -------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**    | Cloud Operations Team     | When a key is no longer required, schedule the key for deletion using the functions within the cloud provider's key management service.          |
| **2**    | Automated (Cloud Service) | The key is disabled during a mandatory waiting period (e.g., 7-30 days) before it is permanently and irreversibly deleted by the cloud provider. |
| **3**    | Automated (Cloud Service) | The key destruction event is logged by the cloud provider's audit service.                                                                       |

### 5. Standards Compliance

This section maps the procedure steps to specific controls from relevant information security standards.

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**        |
| --------------------- | -------------------------- | ---------------------------- |
| **4.1-4.5**           | SOC 2 Trust Services Criteria | CC6.7 - Data Transmission |

### 6. Artifact(s)

An auditable log entry in the key management system for every lifecycle action (generation, distribution, storage, rotation, destruction).

### 7. Definitions

**Cloud Key Management Service (KMS):** A managed service offered by a cloud provider (e.g., AWS KMS, Azure Key Vault) that allows for the creation and control of encryption keys.

**Customer-Managed Key (CMK):** An encryption key within a cloud KMS that is created, owned, and managed by the customer.

**Identity and Access Management (IAM):** The cloud provider's framework of policies and tools for managing access to resources.

### 8. Responsibilities

| **Role**                     | **Responsibility**                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Cloud Operations Team**    | Responsible for executing all phases of the key lifecycle management procedure within the cloud provider's services. |
| **IT Manager/Security Officer** | Responsible for overseeing the key management program and ensuring compliance with the policy.                        |
