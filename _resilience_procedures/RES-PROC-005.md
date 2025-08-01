---
title: IT Disaster Recovery Plan (DRP) ([RES-PROC-005])
parent: Resilience Procedures
nav_order: 5
---
### 1. Purpose

To provide detailed technical procedures for recovering IT infrastructure, systems, and data at an alternate site in the event of a disaster.

### 2. Scope

This plan applies to all critical IT systems, infrastructure, and data mandated to support essential business functions as defined in the Business Impact Analysis (BIA).

### 3. Overview

This document outlines the technical steps for the IT Disaster Recovery Team to respond to a declared disaster. It covers team activation, damage assessment, failover to the secondary recovery site, data restoration, and system validation to ensure a timely and effective recovery of IT services.

### 4. Procedure

| **Step** | **Phase** | **Who** | **What** |
| --- | --- | --- | --- |
| **1** | **Activation & Assessment** | BCDR Steering Committee | Declare a disaster and formally activate the DRP. |
| **2** | | DR Team Lead | Activate the Disaster Recovery (DR) Team. |
| **3** | | DR Team | Conduct an initial damage assessment to understand the extent of the outage. |
| **4** | **Recovery** | DR Team (Infrastructure) | Initiate failover procedures for network, servers, and other infrastructure to the secondary site (including cloud resources). |
| **5** | | DR Team (Data) | Restore application data from the most recent, consistent backups, respecting defined RPOs. |
| **6** | | DR Team (Applications) | Bring critical applications online at the recovery site. |
| **7** | **Validation & Resumption** | DR Team / Business Users | Validate that recovered systems and data are functional and consistent. |
| **8** | | DR Team Lead | Formally declare that IT systems are operational and ready to support business functions. |

### 5. Standards Compliance

| **Procedure Step(s)** | **Standard/Framework** | **Control Reference** |
| --- | --- | --- |
| **1-8** | SOC 2 Trust Services Criteria | A1.2 - Availability Monitoring |

### 6. Artifact(s)

A log of all recovery activities performed, including timelines, actions taken, and the results of system validation tests.

### 7. Definitions

**Failover:** The process of switching to a redundant or standby computer server, system, or network upon the failure or abnormal termination of the previously active application, server, system, or network.

**Disaster Recovery (DR) Site:** A secondary location where an organization can relocate its technology and operations following a disaster.

### 8. Responsibilities

| **Role** | **Responsibility** |
| --- | --- |
| **DR Team Lead** | Manages and coordinates all technical recovery activities during a disaster. |
| **DR Team (Infrastructure)** | Responsible for recovering core infrastructure components like networks and servers. |
| **DR Team (Data)** | Responsible for restoring data from backups. |
| **DR Team (Applications)** | Responsible for bringing business applications back online and validating their functionality. |
