---
title: System Hardening and Baselining Procedure (ENG-PROC-005)
parent: Engineering Procedures
nav_order: 5
---
### 1. Purpose

The purpose of this procedure is to describe the process for applying documented security baselines to new systems and verifying their ongoing compliance to ensure a consistent and secure configuration.

### 2. Scope

This procedure applies to all new production servers, virtual machines, and container images provisioned in the company's infrastructure.

### 3. Overview

This procedure details the steps for system hardening. It begins with the provisioning of a new system, followed by the automated application of a security baseline, removal of unnecessary software, and concludes with a compliance scan to verify the configuration and detect any drift.

### 4. Procedure

| **Step** | **Who**                      | **What**                                                                                                                                                           |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1**    | Engineer / Automated System  | A new server or service is provisioned using Infrastructure as Code (IaC) templates.                                                                               |
| **2**    | Automated Configuration Script | An automated configuration management script (e.g., Ansible, Puppet) applies the documented security baseline, such as the relevant CIS Benchmark.                 |
| **3**    | Automated Configuration Script | The script removes or disables unnecessary services, ports, and software packages to reduce the system's attack surface.                                         |
| **4**    | Automated Compliance Tool    | A compliance scan is automatically run after provisioning to verify that the baseline was applied correctly and to establish the initial secure state.               |
| **5**    | Security Team                | Periodically runs compliance scans to detect any configuration drift from the established baseline and alerts the system owner if deviations are found.            |

Note: If the security team determines the configuration drift is critical, an incident post-mortem may be initiated to analyze the incident in detail.

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework**     | **Control Reference**     |
| --------------------- | -------------------------- | ------------------------- |
| **1-5**               | SOC 2 Trust Services Criteria | CC6.1 - Logical Access Security |
| **2, 4**              | CIS Controls               | Control 4, 5              |

### 6. Artifact(s)

A compliance scan report confirming adherence to the security baseline.

### 7. Definitions

**CIS Benchmarks:** A set of globally recognized and consensus-developed best practices for the secure configuration of a target system.

**Configuration Drift:** The process by which a system's configuration changes over time from its established, secure baseline.

**Infrastructure as Code (IaC):** The management of infrastructure (networks, virtual machines, load balancers, and connection topology) in a descriptive model, using the same versioning as DevOps team uses for source code.

### 8. Responsibilities

| **Role**          | **Responsibility**                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| **Engineer**      | Develops and maintains the Infrastructure as Code templates and automated configuration scripts.                 |
| **Security Team** | Defines the security baselines, manages the compliance scanning tools, and reviews scan reports for deviations. |
| **System Owner**  | Is responsible for remediating any configuration drift detected on their systems.                                |
