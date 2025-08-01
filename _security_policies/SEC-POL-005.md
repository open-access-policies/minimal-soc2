---
title: Vendor and Third-Party Risk Management Policy (SEC-POL-005)
parent: Security Policies
nav_order: 5
---
### 1. Objective

The objective of this policy is to establish requirements for assessing, managing, and monitoring security risks associated with vendors and third-party service providers. This policy ensures that **[Company Name]** maintains appropriate oversight of external parties who access, process, store, or transmit company information while maintaining SOC 2 compliance.

### 2. Scope

This policy applies to all **[Company Name]** workforce members involved in vendor selection, contract negotiation, or ongoing vendor management. It encompasses all external parties including vendors, service providers, consultants, and contractors that have access to **[Company Name]** information systems, data, or facilities. This policy covers the entire vendor lifecycle from initial assessment through contract termination.

### 3. Policy

**[Company Name]** shall implement a vendor risk management program to ensure that all third-party relationships meet security and compliance requirements.

**3.1 Vendor Classification and Risk Assessment**

All vendors shall be classified based on their risk level and subject to appropriate due diligence and ongoing monitoring.

**3.1.1 Vendor Risk Classification**

Vendors shall be classified into risk categories based on the following factors:
- Type and sensitivity of data accessed (Confidential, Internal, Public)
- Level of system access required (network, applications, databases, privileged access)
- Business criticality and financial impact
- Duration and scope of engagement

**Risk Classifications:**
- **High Risk:** Vendors with access to Confidential data or critical systems; cloud service providers; vendors with privileged access
- **Medium Risk:** Vendors with access to Internal data or providing business-critical services
- **Low Risk:** Vendors with limited access to Internal data or no direct system access; vendors providing non-critical services

**3.1.2 Pre-Engagement Risk Assessment**

Prior to engaging any vendor, appropriate risk assessment shall be conducted based on the vendor's risk classification.

**High-Risk Vendor Requirements:**
- Comprehensive security questionnaire
- Security assessment report (SOC 2, ISO 27001, or equivalent)
- Financial stability assessment
- Reference checks with existing customers
- Cyber insurance verification

**Medium-Risk Vendor Requirements:**
- Standard security questionnaire
- Third-party assessment report or self-attestation
- Financial stability review
- Reference checks
- Insurance verification

**Low-Risk Vendor Requirements:**
- Comprehensive security questionnaire or assessment
- General insurance verification

**3.2 Contractual Security Requirements**

All vendor contracts shall include appropriate security provisions based on the vendor's risk level and data access requirements.

**3.2.1 Standard Security Contract Provisions**

All vendor contracts shall include security provisions appropriate to the risk level:

**Essential Security Clauses:**
- Data protection and confidentiality requirements
- Incident notification and response procedures with defined timeframes
- Right to audit and conduct security assessments when appropriate
- Personnel security requirements for vendor staff
- Insurance and liability provisions
- Compliance with applicable laws and regulations
- Requirement for secure data return or destruction upon contract termination

**Additional High-Risk Vendor Clauses:**
- Specific security control requirements (encryption, access controls, logging)
- Regular security reporting requirements
- Breach notification procedures with specific timelines
- Subcontractor approval and oversight requirements
- Business continuity and disaster recovery provisions
- Right to terminate for security violations

**3.3 Vendor Security Monitoring and Ongoing Assessment**

Ongoing monitoring shall be conducted to ensure vendors maintain appropriate security posture throughout the engagement lifecycle.

**3.3.1 Continuous Monitoring Requirements**

- Annual security questionnaire updates for High-risk vendors
- Review of updated security certifications and assessment reports
- Monitoring of vendor security incidents and breach notifications
- Performance and service level monitoring
- Compliance with contractual security requirements

**3.3.2 Periodic Assessments**

- High-Risk vendors: Annual security assessment
- Medium-Risk vendors: Assessment every two years or upon contract renewal
- Low-Risk vendors: Assessment upon contract renewal

**3.3.3 Vendor Security Incident Management**

- Vendors shall notify **[Company Name]** of security incidents within contractually specified timeframes
- **[Company Name]** shall assess the impact of vendor incidents on company operations and data
- Incident response coordination with vendors shall follow documented procedures

**3.4 Vendor Access Management**

Access granted to vendors shall be controlled and monitored in accordance with the principle of least privilege.

**3.4.1 Access Provisioning**

- Vendor access requests shall be formally approved by the business owner and **[Role Title, e.g., IT Manager/Security Officer]**
- Access shall be limited to the minimum necessary to perform contracted services
- Vendor personnel shall be individually identified and authenticated
- Multi-factor authentication shall be required for High-risk vendor access

**3.4.2 Access Monitoring and Review**

- All vendor access shall be logged and monitored for inappropriate activity
- Annual access reviews shall be conducted for all vendors with system access
- Access shall be promptly revoked upon contract termination or personnel changes

**3.5 Vendor Onboarding and Offboarding**

Formal processes shall be established for vendor onboarding and offboarding to ensure security requirements are met.

**3.5.1 Vendor Onboarding Process**

1. Risk assessment and classification
2. Security questionnaire and documentation review
3. Contract negotiation including security provisions
4. Security orientation (if required)
5. Access provisioning and testing
6. Ongoing monitoring setup

**3.5.2 Vendor Offboarding Process**

1. Access revocation and account deactivation
2. Data return or secure destruction verification
3. Equipment and credential return
4. Final security assessment and documentation
5. Contract closure and relationship termination

**3.6 Cloud Service Provider Management**

Cloud service providers shall be subject to enhanced security requirements due to the sensitivity of data and critical nature of services.

**3.6.1 Cloud Provider Requirements**

**3.6.1 Cloud Provider Requirements**

- SOC 2 Type II certification or equivalent (ISO 27001)
- Data encryption at rest and in transit
- Geographic data location controls where required
- Incident response and breach notification procedures
- Business continuity and disaster recovery capabilities
- Regular security assessments and vulnerability testing

**3.6.2 Cloud Service Monitoring**

- Regular review of service provider security posture and certifications
- Monitoring of provider security advisories and incident notifications
- Assessment of configuration changes and security updates

**3.7 Subcontractor Risk Management**

Vendors shall be required to manage risks associated with their subcontractors and ensure equivalent security standards.

- Vendors shall obtain written approval before engaging subcontractors for services involving **[Company Name]** data
- Subcontractors shall be subject to the same security requirements as primary vendors
- Vendors shall maintain oversight of subcontractor security practices
- Notification requirements for subcontractor changes or incidents

### 4. Standards Compliance

This policy is designed to comply with and support the following industry standards and regulations.

|**Policy Section**|**Standard/Framework**|**Control Reference**|
|---|---|---|
|**All**|SOC 2 Trust Services Criteria|CC9.1 - Vendor Management|
|**3.1, 3.3**|SOC 2 Trust Services Criteria|CC9.2 - Vendor Risk Assessment|
|**3.2**|SOC 2 Trust Services Criteria|CC9.3 - Vendor Agreements|

### 5. Definitions

**Cloud Service Provider:** A company that offers network services, infrastructure, or business applications in the cloud.

**Due Diligence:** The investigation or exercise of care that a reasonable business is expected to take before entering into an agreement or contract.

**Service Level Agreement (SLA):** A contract between a service provider and customer that defines the level of service expected.

**Subcontractor:** An entity engaged by a vendor to perform functions or activities on behalf of the vendor.

**Vendor Risk Assessment:** The process of evaluating the potential risks associated with engaging a third-party vendor.

### 6. Responsibilities

|**Role**|**Responsibility**|
|---|---|
|**IT Manager/Security Officer**|Develop vendor security requirements, conduct risk assessments, and monitor vendor security compliance.|
|**Legal/Contracts Team**|Negotiate security contract provisions, ensure legal compliance, and manage contract lifecycle.|
|**Business Owners**|Define business requirements, approve vendor selections, and monitor service delivery performance.|
|**IT Department**|Implement technical controls for vendor access, monitor vendor system activity, and manage vendor integrations.|
|**All Workforce Members**|Report vendor security concerns, comply with vendor interaction policies, and protect company information shared with vendors.|
