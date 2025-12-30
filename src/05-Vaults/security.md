---
title: "Security & Operational Controls"
description: "Glow Vaults Operations & Security Design"
sidebar_label: "Security"
keywords:
  - glow finance
  - vaults
  - shares
  - solana
  - architecture
  - margin accounts
  - margin pools
  - adapters
  - glowSOL
  - solayer
  - solana
  - glow
  - SOL
---

:::tip
This document outlines the security considerations, design principles, and mitigations applied to the protocols of Glow Finance, ensuring depositors’ funds stay safe at all times.
:::

Glow Finance is a Solana-native, non-custodial lending, margin, and liquid restaking protocol. The system isolates risk and permissions via “airspaces,” enforces role-based authority for governance and operations, and provides deposit/withdrawal flows with explicit safety checks, waiting periods, and oracle validation.

## Glow Vaults

Glow Vaults is a smart contract that allows users to deposit into isolated vaults, where a designated fund operator then accesses the funds in the vault to deploy strategies.

The vaults are integrated with the Glow margin system, allowing:

- Vault “Strategy Operators” to access the funds via constrained margin accounts, and employ strategies via the rest of the Glow ecosystem, such as depositing into yield pools, looping funds to leverage yield, etc.
- Vault “Depositors” to leverage their deposits by borrowing from Glow margin pools and looping by depositing into vaults.

This offers LPs an opportunity to potentially leverage their positions, either indirectly through Strategy Operators deploying leverage, or directly through using margin accounts.

Funds are still isolated per vault for depositors, and loss events in other parts of the overall Glow protocol do not affect vault deposits.

### General Vault Flow of Funds

The following visualises the flow of funds for our vaults. It is broken down into 2 flows. The security aspects of each flow are also described.


### Deposits

1. Depositors deposit funds into the vault smart contract through the Glow web app.
   - The contract supports disabling deposits if there are security issues that the team identifies.

2. The Strategy Operator requests funds from the vault by signing a vault smart contract instruction.  
   Only the registered Strategy Operator may request a fund allocation.
   - The contract supports disabling operator actions if there are security issues.

3. The Strategy Operator, or a designated Valuation Authority, updates the USD value of allocated funds.
   - If funds are allocated to Operator Margin Accounts, their valuation is performed automatically and frequently without the need for external valuation or accounting.
   - If funds are allocated to a multisig strategy, the smart contract includes a valuation instruction that only the Strategy Operator or Vault Authority can sign and execute.


**Redemptions**

1. Depositors initiate a redemption through the Glow web app. Waiting periods are subject to the vault’s strategy and configuration, and thus vary by vaults.
2. The vault reserves a redemption amount, which the Strategy Operator will be required to transfer to Pending Redemptions with the redemption period.
3. The Strategy Operator returns funds by calling an instruction for the vault to transfer funds from the operator. The Strategy Operator must update the vault valuation before initiating a transfer to ensure that transfers are recorded at the correct vault rate.
4. After any waiting period, depositors redeem their funds from the vault.

![](/img/vault-flow-of-funds.png)

## Access control

Each smart contract integrates **role-based access control** to restrict sensitive functions. The system defines multiple roles, each with clearly scoped permissions and capabilities:

| Actor | Role | Configuration |
| --- | --- | --- |
| **Protocol Authority** | Deploy and upgrade smart contracts, onboard vaults and tokens, and configure vault parameters (e.g., disable deposits/withdrawals, change fee parameters). | The authority is controlled by a Squads multisig, with 3 signers required to make a change.<br /><br />This configuration ensures proper coverage by requiring two signers with technical oversight and one signer providing organizational and governance oversight. |
| **Strategy Operator** | Manages the funds in the vault, having the ability to transfer funds to strategies. | Strategy operations are conducted through a leading, secure digital asset management platform that provides granular permissions, role-based controls, and robust policy configuration to ensure multiple layers of protection. |
| **Valuation Authority** | A separate and automated account or process that has permission to update valuation of multisig strategies. The authority periodically sends updates to the network on the USD value of funds held in a strategy if that strategy is not a margin account. | The authority operates as a service account with a private key or wallet that is only owned by the service and is not exposed to the team.<br /><br />The protocol authority can change this valuation authority through a multisig vote. |
| **Operator Margin Account** | A Glow margin account constrained and designated to a Strategy Operator. | The Glow Vault program communicates with the Glow Margin program to constrain the permissions of a margin account.<br /><br />This prevents Strategy Operators from:<br />- Withdrawing funds from the margin account<br />- Transferring between margin accounts<br /><br />This action is enforced via cross-program invocation between the two smart contracts. |


## Control & Security Model

| Role / Function | Powers & Actions | Safeguards / Limitations |
| --- | --- | --- |
| **Protocol Authority** | - Upgrade protocol contracts, including vaults<br />- Add new vaults | - Squads multisig with 3 signers<br />- Rare program changes after audit completion<br />- Configuration changes when adding new tokens or vaults |
| **Strategy Owner** | - Owns individual strategies | - Owned by nominated vault owner<br />- Can be a multisig or secured automated wallet, depending on vault type |
| **Multisig Strategy Operator** | - Propose vault valuation updates (automation)<br />- Transfer funds to vault for redemptions | - Cannot withdraw funds directly without accounting for the transfer in the vault<br />- Operator can be replaced or removed by the Strategy Owner |
| **LPs (Liquidity Providers)** | - Deposit underlying assets<br />- Redeem vault shares as SPL (Solana Program Library) tokens | - Shares are held by a program-derived account owned by the LP; only the LP can redeem funds<br />- Withdrawals honored per stated policy |


## Frontend Protection

Glow’s frontend infrastructure is secured through multiple layers designed to prevent disruption, tampering, or malicious access.

### DNS & Network Layer Protection

Our DNS is hosted on **Cloudflare**, providing global availability, resilience, and advanced network security:

- **DNSSEC** enabled to prevent DNS spoofing and hijacking
- **Layer 3–7 DDoS protection** with automated mitigation and adaptive challenge system

### Application Security

Glow’s frontend is deployed using **Vercel (Next.js)** with security features hardened for production:

- **Isolated edge compute environments** to limit resource sharing and reduce cross-tenant attack surface
- **Skew protection** to mitigate timing-based side-channel attacks
- **HTTP Strict Transport Security (HSTS)** to enforce encrypted connections and prevent SSL stripping
- **Strict rate limits** on backend endpoints to prevent abuse and brute-force patterns

### Risk and Compliance Controls

- **Geo-restriction enforcement** to block high-risk regions and sanctioned jurisdictions
- **Chainalysis Risk API integration** for wallet screening:
    - Blocks high-risk addresses involved in theft, fraud, laundering, or sanctioned activity
    - Only allows transactions from wallets rated **Low** or **Medium** risk

### Monitoring & Threat Detection

We maintain proactive visibility over frontend security through continuous monitoring:

- **Cloudflare Security Analytics** for threat detection and firewall insights
- **Sentry** for real-time frontend error tracking and anomaly reporting
- **Vercel deployment monitoring** to prevent supply-chain or injection attacks during build/deploy processes

## Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Protocol Authority could upgrade contract or add a malicious strategy | Squads multisig with management approval in quorum; upgrades rare/scheduled; external audits |
| Strategy Owner updates assets incorrectly (inflate/deflate shares) | Updates constrained by APY target bounds; Operator removable |
| Collusion among signers | Regular review of signed proposals; vaults prevent changing Strategy Owner if there are outstanding funds |

## Audits

[Glow Margin Vaults](../../audits/#glow-margin-vaults)
