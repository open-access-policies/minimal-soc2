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

- Access to systems containing sensitive or confidential data shall be reviewed quarterly by system owners or managers.
    
- All other user access shall be reviewed annually.
    
- Reviews shall require documented approval from designated managers. Failure to complete reviews within **[Number, e.g., 14]** days shall result in escalation to the **[Role Title, e.g., IT Manager/Security Officer]**.
    
- Review results and any access modifications shall be documented.

**3.4 Privileged Access Management**

Administrative accounts require additional controls due to their elevated risk.

- Administrative access shall be granted on a limited, as-needed basis with documented business justification.
    
- Workforce members with administrative privileges shall use separate accounts for administrative tasks and standard accounts for daily activities.
    
- Multi-Factor Authentication (MFA) is mandatory for all administrative accounts.
    
- Administrative activities shall be logged and monitored.

**3.5 System Access Controls**

Logical access to systems shall be secured through proper authentication and session management.

- **Unique Identification:** Every user shall have a unique user ID. Shared accounts are prohibited.
    
- **Authentication:** Access requires unique user ID and strong password as defined in the Password Policy (SEC-POL-002). MFA is required for sensitive systems.
    
- **Session Timeouts:** Systems shall automatically terminate inactive sessions after **[Duration, e.g., 15 minutes]** for sensitive systems and **[Duration, e.g., 30 minutes]** for other systems.
    
- **Network Security:** Corporate networks shall be segmented with appropriate access controls between network zones.

**3.6 Third-Party Access**

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
| **3.2, 3.6**       | SOC 2 Trust Services Criteria | CC6.3 - Authorization, modification, and removal of access... |

### 5. Definitions

- **Least Privilege:** The security principle of restricting access rights for users to the minimum permissions needed to perform their work.
    
- **Privileged Account:** A user account with elevated permissions, such as administrator or system accounts.
    
- **Multi-Factor Authentication (MFA):** An authentication method requiring two or more verification factors to gain access.

- **System Owner:** The individual responsible for a specific system or application, typically a manager or technical lead.

### 6. Responsibilities

| **Role**                     | **Responsibility**                                                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **IT Manager/Security Officer**  | Own, review, and update this policy annually. Monitor access controls and ensure compliance with policy requirements.        |
| **IT Department**            | Implement and manage technical access controls. Process access requests and conduct access provisioning, modification, and deprovisioning. |
| **Managers / System Owners** | Request and approve access for their teams. Conduct periodic access reviews and ensure team members follow access policies.                 |
| **All Workforce Members**    | Follow access control requirements, use only assigned accounts, and report unauthorized access or suspicious activity.               |