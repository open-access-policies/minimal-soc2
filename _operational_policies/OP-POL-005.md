---
title: Accepta**3.1 Softwa- **Allowlist (for High-Risk Software):** Software and browser extensions that require elevated privileges or access to sensitive data (e.g., Confidential data) must be explicitly approved and listed on the company's official **Software Allowlist**. Any software not on this list is implicitly denied.e Govern- **Security Review:** The **[Role- **Review and Removal:** The **[Role Title, e.g., IT Manager/Security Officer]** will periodically review installed browser extensions for compliance with this policy. Extensions that no longer meet security standards or are deemed unnecessary will be removed.Title, e.g., IT Manager/Security Officer]** will conduct a risk assessment of the requested software. The assessment will consider the software's function, the data it will access, its vendor's reputation, and any known vulnerabilities.
    
- **Approval or Denial:** Based on the risk assessment, the **[Role Title, e.g., IT Manager/Security Officer]** will either approve or deny the request. Approved software will be added to the Software Allowlist. The decision will be documented in the IT ticket.e Model**

**[Company Name]** employs a hybrid governance model to manage software risk effectively:

- **Allowlist (for High-Risk Software):** Software and browser extensions that require elevated privileges or access to sensitive data (e.g., Confidential data) must be explicitly approved and listed on the company's official **Software Allowlist**. Any software not on this list is implicitly denied.
    
- **Blocklist (for Prohibited Software):** Certain categories of software are explicitly prohibited and are maintained on a **Software Blocklist**.tware and Browser Extension Policy (OP-POL-005)
parent: Operational Policies
nav_order: 5
---

#### **1. Objective**

The objective of this policy is to establish clear guidelines for the installation and use of all third-party software, applications, and browser extensions on company-managed endpoints. This policy is designed to protect **[Company Name]** from security risks, including malware, data leakage, and privacy breaches, while enabling workforce members to use legitimate tools that enhance productivity.

#### **2. Scope**

This policy applies to all **[Company Name]** workforce members (including employees, contractors, and temporary staff) and any third party using a company-managed endpoint. It covers all software, including desktop applications, command-line tools, and browser extensions, installed on any company-owned or managed device, such as laptops and workstations.

#### **3. Policy**

All software installed on company endpoints shall be properly licensed, have a valid business justification, and be approved in accordance with the procedures outlined in this policy. The principle of least functionality shall be applied, meaning only necessary software shall be installed.

**3.1 Software Governance Model**

[Company Name] employs a hybrid governance model to manage software risk effectively:

- **Allowlist (for High-Risk Software):** Software and browser extensions that require elevated privileges or access to sensitive data (e.g., ePHI, Confidential data) must be explicitly approved and listed on the company's official **Software Allowlist**. Any software not on this list is implicitly denied.
    
- **Blocklist (for Prohibited Software):** Certain categories of software are explicitly prohibited and are maintained on a **Software Blocklist**.
    

**3.2 Software Approval Process**

Workforce members who wish to install software that is not already on the Software Allowlist must submit a formal request.

- **Request Submission:** A request must be submitted via an IT support ticket, detailing the software's name, purpose, and a justification for its business use.
    
- **Security Review:** The Security Team will conduct a risk assessment of the requested software. The assessment will consider the software's function, the data it will access, its vendor's reputation, and any known vulnerabilities.
    
- **Approval or Denial:** Based on the risk assessment, the Security Team will either approve or deny the request. Approved software will be added to the Software Allowlist. The decision will be documented in the IT ticket.
    

**3.3 Prohibited Software Categories**

The installation and use of software in the following categories are strictly prohibited on any company endpoint:

- Unlicensed or pirated software ("warez").
    
- Peer-to-peer (P2P) file-sharing clients.
    
- Cryptocurrency mining software.
    
- Tools designed to disable or circumvent security controls (e.g., password crackers, security tool disablers).
    
- Any software from untrusted or unverified sources.

- Software that collects or transmits sensitive data without explicit user consent or knowledge.

- Software that is known to have significant security vulnerabilities or is no longer supported by the vendor.
    

**3.4 Browser Extension Security**

Browser extensions pose a unique risk and are subject to heightened scrutiny.

- **High-Risk Permissions:** Extensions that request broad permissions (e.g., "Read and change all your data on the websites you visit") require a formal risk assessment and must be on the Software Allowlist before installation.
    
- **Source:** All extensions must be installed from official, reputable browser web stores (e.g., Chrome Web Store, Firefox Add-ons).

- **Review and Removal:** The Security Team will periodically review installed browser extensions for compliance with this policy. Extensions that no longer meet security standards or are deemed unnecessary will be removed.

- **End-of-Life Extensions:** Extensions that are no longer maintained or updated by the vendor will be removed from all company endpoints to mitigate security risks.
    

**3.5 Auditing and Enforcement**

The IT Department will use endpoint management tools to enforce this policy and maintain system integrity.

- **Automated Audits:** Regular, automated scans of all company endpoints will be conducted to inventory installed software and check for compliance with this policy.
    
- **Remote Removal:** [Company Name] reserves the right to remotely remove any unauthorized, prohibited, or non-compliant software from a company-managed endpoint without prior notice to the user.
    
- **Policy Violations:** The discovery of prohibited or unauthorized software may result in disciplinary action, in accordance with the `Security Policy Sanction Procedure (OP-PROC-008)`.
    

#### **4. Standards Compliance**

This policy is designed to comply with and support the following industry standards and regulations.

| **Policy Section** | **Standard/Framework**        | **Control Reference**                                                                                                            |
| ------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **All**            | SOC 2 Trust Services Criteria | CC6.8 - The entity implements controls to prevent or detect and act upon the introduction of unauthorized or malicious software. |
| **3.5**            | SOC 2 Trust Services Criteria | CC7.1 - The entity uses detection and monitoring procedures to identify changes that are indicative of a control failure.       |

#### **5. Definitions**

- **Endpoint:** Any company-owned or managed computing device, such as a laptop or workstation.
    
- **Software Allowlist:** An official, centrally managed list of all software and browser extensions that have been vetted and are approved for installation on company endpoints.
    
- **Software Blocklist:** An official list of specific software applications or categories that are explicitly forbidden from being installed on company endpoints.
    
- **Shadow IT:** Technology, software, or services used inside an organization without explicit organizational approval.
    

#### **6. Responsibilities**

| **Role**                       | **Responsibility**                                                                                                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **IT Manager/Security Officer** | Own, review, and update this policy annually. Conduct risk assessments for new software requests and maintain the Allowlist and Blocklist.                                             |
| **IT Department**              | Implement and manage the technical controls to enforce this policy, including endpoint management tools. Process software requests and perform remote removal of non-compliant software. |
| **All Workforce Members**      | Comply with this policy at all times. Request approval for new software as required and refrain from installing prohibited software.                                                     |