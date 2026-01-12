---
title: Application Security Testing Procedure (ENG-PROC-001)
parent: Engineering Procedures
nav_order: 1
---
### 1. Purpose

The purpose of this procedure is to detail the process for conducting static application security testing (SAST), dynamic application security testing (DAST), and penetration testing to identify and remediate security vulnerabilities in applications.

### 2. Scope

This procedure applies to all company-developed applications that process or store sensitive customer data.

### 3. Overview

This procedure outlines the security testing requirements for applications, including automated security scans integrated into the development process and periodic security assessments to identify and remediate vulnerabilities.

### 4. Procedure

#### 4.1 Automated Security Testing

| **Step** | **Who**                      | **What**                                                                                                                              |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | Development Team             | Integrates automated security scanning tools into the development pipeline to check code for common vulnerabilities.                   |
| **2**    | Development Team             | Reviews security scan reports and addresses high-severity findings before production deployment.                                       |
| **3**    | Development Team             | Documents remediation efforts and tracks resolution of identified security issues.                                                    |

#### 4.2 Security Assessments

| **Step** | **Who**                      | **What**                                                                                                                              |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **1**    | IT Manager/Security Officer  | Conducts or arranges annual security assessments for applications handling sensitive data.                                            |
| **2**    | IT Manager/Security Officer  | Reviews assessment findings and prioritizes remediation based on risk level.                                                          |
| **3**    | Development Team             | Implements remediation plan for identified vulnerabilities within established timeframes.                                             |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**     |
| --------------------- | -------------------------- | ------------------------- |
| **4.1 - 4.2**         | SOC 2 Trust Services Criteria | CC7.1 - System Operations |

### 6. Artifact(s)

Security scan reports and annual security assessment documentation with remediation tracking.

### 7. Definitions

**Security Scanning:** Automated tools that analyze application code or running applications to identify potential security vulnerabilities.

**Security Assessment:** Comprehensive evaluation of application security including testing and review of security controls.

### 8. Responsibilities

| **Role**                     | **Responsibility**                                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Development Team**         | Implements security scanning, reviews findings, and remediates identified vulnerabilities.                     |
| **IT Manager/Security Officer** | Manages security assessments and provides guidance on vulnerability remediation priorities.                   |
