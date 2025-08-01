---
title: Vulnerability Manage- **2. Prioritization:** All d- **3. Rem- **4To ensure comprehensive- - - - **Documentation:** All approved exceptions, including the justification and compensating controls, shall be documented in a centralized risk register.*Duration:** Approved exceptions are temporary and shall be reviewed at least quarterly. An exception is not a permanent solution.*Approval:** All exception requests shall require documented approval from the asset owner's manager and the **[Role Title, e.g., Security Officer]**. For Critical or High severity vulnerabilities, approval from the **[Role Title, e.g., Chief Technology Officer]** is also required.*Request:** The asset owner shall submit a formal exception request to the Security Team. The request shall include a business justification, a risk analysis, and details of any proposed compensating controls. An acceptable compensating control shall be a documented and testable measure that measurably reduces the likelihood or impact of the specific vulnerability being exploited.discovery, the following scanning schedule shall be maintained:

- **External Scans:** Unauthenticated scans of all internet-facing systems shall be performed at least weekly.
    
- **Internal Scans:** Authenticated scans of all internal production systems and workstations shall be performed at least monthly.
    
- **Application Scans:** Dynamic and/or static analysis of in-house developed applications shall be performed prior to any major release.
    
- **Scan Result Processing:** All vulnerability scan results shall be automatically ingested into a centralized tracking system. The Security Team is responsible for reviewing scan reports within **[Number, e.g., 1]** business day(s) and initiating the Prioritization and Remediation lifecycle for all new, valid findings.ation:** After remediation has been applied, the Security Team shall perform a verification scan to confirm that the vulnerability has been successfully resolved. All verification results shall be documented in the vulnerability tracking system.diation:** Vulnerabilities shall be remediated by the responsible asset owner within a defined timeframe, based on their severity rating. The Remediation SLA begins at the time a vulnerability is formally validated and assigned to the relevant asset owner by the Security Team in the vulnerability tracking system. Remediation may include applying vendor patches, implementing configuration changes, or deploying compensating controls. All remediation activities shall follow the Change Control Policy (ENG-POL-002).scovered vulnerabilities shall be assigned a severity rating to prioritize remediation efforts.
    
    - The primary method for rating vulnerabilities shall be the Common Vulnerability Scoring System (CVSS) version 3.x.
        
    - The Security Team shall enrich the CVSS base score with the following contextual factors to determine a final, internal Risk Rating:Policy (SEC-POL-008)
parent: Security Policies
nav_order: 8
---
### 1. Objective

The objective of this policy is to establish a systematic and continuous process for identifying, prioritizing, remediating, and verifying security vulnerabilities across all of **[Company Name]**'s information assets. This policy ensures that risks to the confidentiality, integrity, and availability of data, including electronic Protected Health Information (ePHI), are managed in a timely and effective manner.

### 2. Scope

This policy applies to all information systems and assets owned or managed by **[Company Name]**, including but not limited to, servers, workstations, network devices, applications (both internally developed and third-party), and cloud infrastructure.

### 3. Policy

**[Company Name]** shall implement and maintain a comprehensive vulnerability management program that covers the full lifecycle of a vulnerability.

**3.1 Vulnerability Management Lifecycle**

The program is structured around a continuous four-phase lifecycle:

- **1. Discovery:** The Security Team is responsible for identifying vulnerabilities through multiple methods, including:
    
    - **Automated Scanning:** Regular, automated vulnerability scans of the environment.
        
    - **Threat Intelligence:** Monitoring security feeds, vendor notifications, and public disclosures.
        
    - **Penetration Testing:** Annual internal and external penetration tests.
        
    - **Manual Reporting:** Reports from workforce members or external security researchers.
        
- **2. Prioritization:** All discovered vulnerabilities must be assigned a severity rating to prioritize remediation efforts.
    
    - The primary method for rating vulnerabilities will be the Common Vulnerability Scoring System (CVSS) version 3.x.
        
    - The Security Team will enrich the CVSS base score with the following contextual factors to determine a final, internal Risk Rating:
        
        - **Asset Criticality:** As defined in the **[Company Name]** System & Data Inventory (e.g., is the asset mission-critical, does it store ePHI?).
            
        - **Data Sensitivity:** The classification of data stored or processed by the asset.
            
        - **Network Exposure:** Whether the vulnerability is exploitable from the internet or requires internal access.
            
        - **Threat Intelligence:** Any evidence of active exploitation of the vulnerability in the wild.
            
        - **Compensating Controls:** The presence of other security layers (e.g., WAF, MFA) that might reduce the likelihood of exploitation.
            
    - Severity levels are defined as:
        
        - **Critical:** CVSS Score 9.0 - 10.0
            
        - **High:** CVSS Score 7.0 - 8.9
            
        - **Medium:** CVSS Score 4.0 - 6.9
            
        - **Low:** CVSS Score 0.1 - 3.9
            
- **3. Remediation:** Vulnerabilities must be remediated by the responsible asset owner within a defined timeframe, based on their severity rating. The Remediation SLA begins at the time a vulnerability is formally validated and assigned to the relevant asset owner by the Security Team in the vulnerability tracking system. Remediation may include applying vendor patches, implementing configuration changes, or deploying compensating controls. All remediation activities must follow the Change Control Policy (ENG-POL-002).
    
    |   |   |
    |---|---|
    |**Severity**|**Remediation Service Level Agreement (SLA)**|
    |**Critical**|**[Number, e.g., 15]** calendar days|
    |**High**|**[Number, e.g., 30]** calendar days|
    |**Medium**|**[Number, e.g., 90]** calendar days|
    |**Low**|**[Number, e.g., 180]** calendar days or at the next scheduled maintenance|
    
- **4. Verification:** After remediation has been applied, the Security Team must perform a verification scan to confirm that the vulnerability has been successfully resolved. All verification results must be documented in the vulnerability tracking system.
    

**3.2 Vulnerability Scanning**

To ensure comprehensive discovery, the following scanning schedule will be maintained:

- **External Scans:** Unauthenticated scans of all internet-facing systems must be performed at least weekly.
    
- **Internal Scans:** Authenticated scans of all internal production systems and workstations must be performed at least monthly.
    
- **Application Scans:** Dynamic and/or static analysis of in-house developed applications must be performed prior to any major release.
    
- **Scan Result Processing:** All vulnerability scan results must be automatically ingested into a centralized tracking system. The Security Team is responsible for reviewing scan reports within **[Number, e.g., 1]** business day(s) and initiating the Prioritization and Remediation lifecycle for all new, valid findings.
    

**3.3 Exception Management and Risk Acceptance**

In cases where a vulnerability cannot be remediated within the defined SLA (e.g., due to a lack of a vendor patch or a high risk of business disruption), a formal exception shall be requested.

- **Request:** The asset owner must submit a formal exception request to the Security Team. The request must include a business justification, a risk analysis, and details of any proposed compensating controls. An acceptable compensating control must be a documented and testable measure that measurably reduces the likelihood or impact of the specific vulnerability being exploited.
    
- **Approval:** All exception requests require documented approval from the asset owner's manager and the **[Role Title, e.g., Security Officer]**. For Critical or High severity vulnerabilities, approval from the **[Role Title, e.g., Chief Technology Officer]** is also required.
    
- **Duration:** Approved exceptions are temporary and must be reviewed at least quarterly. An exception is not a permanent solution.
    
- **Documentation:** All approved exceptions, including the justification and compensating controls, must be documented in a centralized risk register.
    

### 4. Standards Compliance

This policy is designed to comply with and support the following industry standards and regulations.

| **Policy Section** | **Standard/Framework**        | **Control Reference**                                                                       |
| ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------- |
| **All**            | HIPAA Security Rule           | 45 CFR § 164.308(a)(1)(ii)(A) - Risk Analysis                                               |
| **All**            | HIPAA Security Rule           | 45 CFR § 164.308(a)(1)(ii)(B) - Risk Management                                             |
| **3.1, 3.2**       | SOC 2 Trust Services Criteria | CC7.1 - The entity uses detection and monitoring procedures to identify... vulnerabilities. |

### 5. Definitions

- **Vulnerability:** A weakness in an information system, security procedure, internal control, or implementation that could be exploited by a threat source.
    
- **CVSS (Common Vulnerability Scoring System):** An open industry standard for assessing the severity of computer system security vulnerabilities.
    
- **Remediation:** The process of fixing or eliminating a discovered vulnerability.
    
- **Compensating Control:** An alternative security measure put in place to reduce the risk of a vulnerability that cannot be directly remediated.
    

### 6. Responsibilities

| **Role**               | **Responsibility**                                                                                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Security Team**      | Own, review, and update this policy annually. Manage the vulnerability scanning tools, prioritize vulnerabilities, track remediation efforts, and manage the exception process. |
| **IT / System Owners** | Remediate vulnerabilities on systems under their control within the defined SLAs. Request exceptions when necessary and implement approved compensating controls.               |
| **Engineering Team**   | Remediate vulnerabilities discovered in internally developed applications.                                                                                                      |
