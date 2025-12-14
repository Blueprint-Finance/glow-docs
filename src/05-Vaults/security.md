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

**Deposits**

1. Depositors deposit funds into the vault smart contract through the Glow web app
    1. The contract supports disabling deposits if there are security issues that the team identifies
2. The Strategy Operator requests funds from the vault through signing for a vault smart contract instruction. Only the registered Strategy Operator may request a fund allocation.
    1. The contract supports disabling operator actions if there are security issues
3. The Strategy Operator, or a designated Valuation Authority, updates the USD value of allocated funds.
    1. If funds are allocated to Operator Margin Accounts, their valuation is performed automatically and frequently without need for external valuation/accounting.
    2. If funds are allocated to a Multisig Strategy, the smart contract has a valuation instruction, which only the Strategy Operator or Vault Authority can sign to execute.

**Redemptions**

1. Depositors initiate a redemption through the Glow web app. Waiting periods are subject to the vault’s strategy and configuration, and thus vary by vaults.
2. The vault reserves a redemption amount, which the Strategy Operator will be required to transfer to Pending Redemptions with the redemption period.
3. The Strategy Operator returns funds by calling an instruction for the vault to transfer funds from the operator. The Strategy Operator must update the vault valuation before initiating a transfer to ensure that transfers are recorded at the correct vault rate.
4. After any waiting period, depositors redeem their funds from the vault.

![](/img/vault-flow-of-funds.png)

### Example Flow of Funds for SyrupUSDC

The flow of funds for the SyrupUSDC vault is the same as the above general flow of funds, with the following exception(s):

- The funds deposited will initially only be allocated to a multisig strategy. The Glow team are building integrations into more Solana protocols to enable more capital efficiency, thus only the multisig strategy will be deployed in the short term.

## Access control

Each smart contract integrates **role-based access control** to restrict sensitive functions. The system defines multiple roles, each with clearly scoped permissions and capabilities:

| Actor | Role | Configuration |
| --- | --- | --- |
| Protocol Authority | Deploy and upgrade smart contracts, onboard vaults and tokens, and configure vault parameters (e.g. disable deposits/withdrawals, change fee parameters) | The authority is controlled by a Squads multisig, with 3 signers required to make a change. This configuration ensures proper coverage by requiring two signers with technical oversight and one signer providing organizational and governance oversight. |
| Strategy Operator | Manages the funds in the vault, having the ability to withdraw transfer funds to strategies. | Strategy operations are conducted through a leading, secure digital asset management platform that provides granular permissions, role-based controls, and robust policy configurations to ensure multiple layers of protection. |
| Valuation Authority | A separate and automated account/process that has permission to update valuation of multisig strategies. The authority periodically sends updates to the network on the USD value of funds held in a strategy if that strategy is not a margin account. | The authority operates as a service account with a private key/wallet that is only owned by the service and is not exposed to the team.

The protocol authority can change this valuation authority through a multisig vote. |
| Operator Margin Account | A Glow margin account constrained and designated to a Strategy Operator. | The Glow Vault program communicates with the Glow Margin program to constrain the permissions of a margin account.

This prevents Strategy Operators from:
* Withdrawing funds from the margin account
* Transferring between margin accounts

This action is enforced via cross-program-invocation between the two smart contracts. |

## Control & Security Model

| Role / Function | Powers & Actions | Safeguards / Limitations |
| --- | --- | --- |
| **Protocol Authority** | * Upgrade protocol contracts, including vaults
* Add new vaults | * Squads Multisig with 3 signers
* Rare, program changes after audit completion
* Configuration changes when adding new tokens or vaults |
| **Strategy Owner** | • Owns individual strategies | * Owned by nominated vault owner
* Can be a multisig or secured automated wallet, depending on vault type |
| **Multisig Strategy Operator** | * Propose vault valuation updates (automation)
* Transfers funds to vault for redemptions | * Cannot withdraw funds directly without accounting for the transfer in the vault
* Operator can be replaced/removed by Strategy Owner |
| **LPs (Liquidity Providers)** | * Deposit underlying assets
* Redeem vault shares as SPL (Solana Public Library) tokens | * Shares are held by a program derived account that is owned by the LP, only the LP can redeem funds
* Withdrawals honored per stated policy |

## Frontend Protection

Glow’s frontend infrastructure is secured through multiple layers designed to prevent disruption, tampering, or malicious access.

Our DNS is hosted on Cloudflare, which provides enterprise-grade protection against network-layer and application-layer attacks. We enable Cloudflare’s “I’m Under Attack” mode to mitigate Distributed Denial of Service (DDoS) attacks and filter out malicious traffic before it reaches our frontend.

Glow’s frontend and web access infrastructure are secured through layered defense mechanisms designed to prevent service disruption, unauthorized access, and security threats targeting users.

### DNS & Network Layer Protection

Our DNS is hosted on **Cloudflare**, providing global availability, resilience, and advanced network security:

- **DNSSEC** enabled to prevent DNS spoofing and hijacking
- **Encrypted DNS** via DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)
- **Layer 3–7 DDoS protection** with automated mitigation and adaptive challenge system
- **“I’m Under Attack” mode** (Cloudflare IUAM) available for rapid response against volumetric attacks and bot-based threats

### Application Security

Glow’s frontend is deployed using **Vercel (Next.js)** with security features hardened for production:

- **Isolated edge compute environments** to limit resource sharing and reduce cross-tenant attack surface
- **Skew protection** to mitigate timing-based side-channel attacks
- **HTTP Strict Transport Security (HSTS)** to enforce encrypted connections and prevent SSL stripping
- **Strict rate limits** on backend endpoints to prevent abuse and brute-force patterns

### Risk & Compliance Controls

- **Geo-restriction enforcement** to block high-risk regions and sanctioned jurisdictions
- **Chainalysis Risk API integration** for wallet screening
    - Blocks high-risk addresses involved in theft, fraud, laundering, or sanctioned activity
    - Only allows transactions from wallets rated **Low** or **Medium** risk

### **Monitoring & Threat Detection**

We maintain proactive visibility over frontend security through continuous monitoring:

- **Cloudflare Security Analytics** for threat detection and firewall insights
- **Sentry** for real-time frontend error tracking and anomaly reporting
- **Vercel deployment monitoring** to prevent supply-chain or injection attacks during build/deploy processes

## Risks & Mitigations

| Risk | Mitigation |
| --- | --- |
| Protocol Authority could upgrade contract or add a malicious strategy | Squads multisig with management approval in quorum; upgrades rare/scheduled; external audits |
| Strategy Owner updates assets incorrectly (inflate/deflate shares) | Updates constrained by APY target bounds; Operator removable |
| Collusion among signers | Regular review of signed proposals; vaults prevent changing Strategy Owner if there are outstanding funds |

## Audits

[Glow Margin Vaults](/files/Glow-Margin-Vaults.pdf)
