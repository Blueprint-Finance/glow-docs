---
title: "Audits"
description: "Audits"
sidebar_label: "Audits"
sidebar_position: 7
---

Glow Finance values **security and transparency**. To protect users and ensure the reliability of our protocol, we have our smart contracts reviewed by independent security experts.

Below, you can find the latest Glow Audit Reports (Zellic, Certora and Halborn), which details our security assessment.

## Zellic Audit

* **Auditor:** **Zellic** (Web3 security research & audit firm)
* **Date:** **June 27 – July 21, 2025**
* **Scope:** Core **Glow Protocol** smart contracts on Solana, including **margin**, **margin-pool**, **airspace**, **metadata**, and the **lookup-table-registry**.
* [View Full Audit Report](/files/Glow-Zellic-Audit-Report.pdf)

### Summary of Findings

* **Total Issues Identified:** **10**
  * Critical: **0**
  * High: **5**
  * Medium: **4**
  * Low: **1**
  * Informational: **0**
* **Status:** All findings were acknowledged; remediations were implemented by Blueprint Finance in follow-up commits.
* **Key Risks Found:**
  * **Access control flaws** (anyone could revoke permits in certain cases; governor had excessive transfer powers).
  * **State corruption risks** in the registry when reusing empty slots.
  * **Fee collection logic errors** due to local state copies.
  * **Token configuration bypasses** allowing immutability checks to be circumvented.
  * **Two-step authority transfers** breaking on incorrect pubkeys.

### Recommendations

* Strengthen **account constraints** and validation logic.
* Improve **PDA seed design** to avoid collisions.
* Replace unsafe error-handling (`unwrap`, `panic!`) with safer patterns.
* Increase **unit test coverage** for both positive and negative cases.
* Adopt a **security-focused development workflow** with thorough documentation and 100% branch coverage testing.

## Certora Audit

- **Auditor:** **Certora** (Industry-leading Web3 security firm)  
- **Date:** **November 2024**  
- **Scope:** Smart contract security, vulnerability assessments, and risk management.
- [View Full Audit Report](/files/Glow-report.pdf)

### Summary of Findings

Glow Finance partnered with **Certora** to review the security of **Glow LRT** in **December 2024**. The audit focused on identifying potential risks, improving safety measures, and ensuring smart contract reliability.  

- **Total Issues Identified:** **7** (1 High, 2 Medium, 1 Low, 3 Informational)  
- **Status:** **All identified issues have been resolved.**  
- **High-Severity Fix:** A **Share Inflation Attack** vulnerability was found and fixed.  
- **Other Key Fixes:** Improvements to frontrunning protection, governance security, and contract logic.

### What Was Audited?

- **Core smart contracts** managing deposits, withdrawals, and staking.  
- **Security protections** against potential exploits.  
- **Governance controls** to ensure safe protocol operations.

## Halborn Audit

- **Auditor:** **Halborn** (Industry-leading Web3 security firm)  
- **Date:** **December 13, 2024, to February 28, 2025**
- **Scope:** Identify vulnerabilities and ensure smart contract security.
- [View Full Audit Report](/files/Glow-halborn.pdf)  

### Summary of Findings

- **Registry Account Closure**: Previously, any user could close an account. Fixed by restricting this action to authorized users.  
- **Two-Step Authority Transfer**: Implemented a safer two-step process to prevent unintended authority changes.  
- **Liquidators & Account Health**: Adjustments ensure liquidators restore accounts to a **healthy state** post-liquidation.  
- **Unchecked Program Parameters**: Enhanced validation to prevent **misconfigurations**.  
- **Mint Extensions Validation**: Introduced verification to mitigate risks from **certain token extensions**.  

### Testing Approach

Halborn conducted:  
- **Manual Code Review** – Examining business logic vulnerabilities.  
- **Automated Testing** – Identifying security issues via dependency scans and runtime tests.  
- **Attack Simulations** – Assessing potential exploitability.  


📢 Glow Finance remains dedicated to **continuous security improvements** and will continue to review and enhance our protocol’s safety.
