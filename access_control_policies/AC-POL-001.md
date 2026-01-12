---
title: Access Control Policy (AC-POL-001)
parent: Access Control Policies
nav_order: 1
---
### 1. Objective

The objective of this policy is to define requirements for managing access to **[Company Name]**'s information systems and data based on SOC 2 requirements. This policy ensures access is granted using least privilege principles, protecting company and customer information while maintaining practical implementation.

### 2. Scope

This policy applies to all **[Company Name]** workforce members, contractors, and vendors who require access to company information systems or data. This includes applications, servers, databases, network devices, cloud services, and physical facilities where company information is accessed or stored.

### 3. Policy

Access to all **[Company Name]** information systems and data shall be managed through a documented process that is consistently applied.

**3.1 Least Privilege Principle**

All access rights shall be granted based on least privilege. Workforce members shall receive only the minimum access necessary to perform their job responsibilities.

**3.2 User Access Lifecycle Management**

Access rights shall be managed throughout the user's employment lifecycle.

- **Provisioning:** Access for new workforce members shall be requested by their manager through the IT service request process. Access shall be based on job role and documented responsibilities.
    
- **Modification:** When workforce members change roles, their manager shall request access modifications. Previous access no longer needed shall be revoked.
    
- **Deprovisioning:** Upon termination, all system and facility access shall be revoked within **[Number, e.g., 24]** hours. For involuntary terminations, access shall be revoked immediately when possible.

**3.3 Access Reviews**

Regular access reviews shall be conducted to ensure access rights remain appropriate.

- Accounts with privileged or administrative access shall be reviewed quarterly by system owners or managers.
    
- All other standard user accounts shall be reviewed semi-annually (every six months).
    
- Reviews shall require documented approval from designated managers. Failure to complete reviews within **[Number, e.g., 14]** days shall result in escalation to the **[Role Title, e.g., IT Manager/Security Officer]**.
    
- Review results and any access modifications shall be documented.

**3.4 Privileged Access Management**

Administrative accounts require additional controls due to their elevated risk.

- Administrative access shall be granted on a limited, as-needed basis with documented business justification.
    
- Workforce members with administrative privileges shall use separate accounts for administrative tasks and standard accounts for daily activities.
    
- Multi-Factor Authentication (MFA) is mandatory for all administrative accounts.
    
- Administrative activities shall be logged and monitored.

**3.5 Password and Authentication Requirements**

All systems and applications must be configured to enforce comprehensive password requirements and authentication standards.

- **Unique Identification:** Every user shall have a unique user ID. Shared accounts are prohibited.

- **Password Requirements:** All user passwords must meet these standards:
  - **Length:** Minimum twelve (12) characters for standard user accounts. Minimum sixteen (16) characters for accounts with administrative privileges.
  - **Complexity:** Passwords must contain characters from at least three (3) of the following categories: uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), special characters (e.g., `!@#$%^&*()`)
  - **Prohibited Content:** Passwords must not contain company names, usernames, personal information, dictionary words, or common patterns

- **Password Management:**
  - **Password Age:** User passwords must be changed at least every **[Number, e.g., 90]** days
  - **Password History:** Systems must prevent reuse of the previous **[Number, e.g., 5]** passwords
  - **Account Lockout:** User accounts must be automatically locked for **[Duration, e.g., 30 minutes]** after **[Number, e.g., 5]** consecutive failed login attempts

- **Multi-Factor Authentication (MFA):** MFA is required for all workforce members and must be implemented on:
  - All systems containing sensitive or confidential data
  - Remote access to company networks (e.g., VPN)
  - Administrative accounts and privileged access
  - Cloud-based business applications and services

- **Password Protection:** Passwords must never be shared, written down, or stored in plain text. Use of a company-approved password manager is strongly encouraged.

- **Session Timeouts:** Systems shall automatically terminate inactive sessions after **[Duration, e.g., 15 minutes]** for sensitive systems and **[Duration, e.g., 30 minutes]** for other systems.

- **Network Security:** Corporate networks shall be segmented with appropriate access controls between network zones.

**3.6 Remote Access Security**

All remote work must be conducted securely to protect company information and systems from unauthorized access or disclosure.

- **Secure Network Connectivity:** All access to internal company systems and sensitive data must use the company-approved Virtual Private Network (VPN). Public or untrusted Wi-Fi networks may not be used for accessing sensitive company data.

- **Device Security Requirements:** Any device used to access company resources remotely must meet comprehensive security standards:
  - **Encryption:** Full-disk encryption must be enabled on all devices
  - **Access Control:** Devices must be protected with strong passwords or biometric controls and configured to automatically lock after **[Number, e.g., 15]** minutes of inactivity
  - **Malware Protection:** Company-approved anti-malware software must be installed and kept current
  - **Updates:** Operating systems and applications must be kept up-to-date with security patches

- **Data Handling:** Sensitive company data may not be stored locally on personal devices. All sensitive data must be accessed through company-managed systems or cloud platforms.

- **Physical Security:** Take measures to prevent unauthorized viewing of screens in public spaces. Company equipment must be physically secured and never left unattended in vehicles or public locations.

- **Personal Device Use:** Personal devices must be registered with the IT Department before accessing company resources. Required security software must be installed and maintained on personal devices.

**3.7 Third-Party Access**

Third parties require security review before receiving access to company systems or data.

- All third parties shall undergo security assessment before access is granted.
    
- Third-party access shall be limited to specific systems and data required for their function.
    
- Access shall be time-bound and automatically expire upon contract termination.
    
- Third-party activities shall be monitored and logged.
    

### 4. Standards Compliance

This policy is designed to comply with and support the following industry standards and regulations.

| **Policy Section** | **Standard/Framework**        | **Control Reference**                                         |
| ------------------ | ----------------------------- | ------------------------------------------------------------- |
| **All**            | SOC 2 Trust Services Criteria | CC6.1 - Logical Access Security                               |
| **3.2, 3.3**       | SOC 2 Trust Services Criteria | CC6.2 - Prior to issuing system credentials...                |
| **3.2, 3.7**       | SOC 2 Trust Services Criteria | CC6.3 - Authorization, modification, and removal of access... |
| **3.5**            | SOC 2 Trust Services Criteria | CC6.2 - User Access Authentication                            |
| **3.6**            | SOC 2 Trust Services Criteria | CC6.6 - The entity implements logical access security measures for assets... |

### 5. Definitions

- **Least Privilege:** The security principle of restricting access rights for users to the minimum permissions needed to perform their work.
    
- **Privileged Account:** A user account with elevated permissions, such as administrator or system accounts.
    
- **Multi-Factor Authentication (MFA):** An authentication method requiring two or more verification factors to gain access.

- **System Owner:** The individual responsible for a specific system or application, typically a manager or technical lead.

- **Virtual Private Network (VPN):** A secure, encrypted connection over a public network to access company systems.

- **Remote Work:** Work performed for **[Company Name]** from locations outside designated corporate offices.

### 6. Responsibilities

| **Role**                     | **Responsibility**                                                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **IT Manager/Security Officer**  | Own, review, and update this policy annually. Monitor access controls and ensure compliance with policy requirements.        |
| **IT Department**            | Implement and manage technical access controls. Process access requests and conduct access provisioning, modification, and deprovisioning. |
| **Managers / System Owners** | Request and approve access for their teams. Conduct periodic access reviews and ensure team members follow access policies.                 |
| **All Workforce Members**    | Follow access control requirements, use only assigned accounts, and report unauthorized access or suspicious activity.               |