---
title: "Architecture"
description: "Architecture"
sidebar_label: "Architecture"
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


Glow Vaults accept deposits of a single supported asset and allocate that capital into curated yield strategies managed by a designated Strategy Operator. Depositor balances are tracked through **program-derived claim accounts (non-transferable PDAs)** that represent each user’s proportional claim on vault assets. These claim accounts behave as **yield-bearing share records**, increasing in value as the vault accrues performance.

As strategies generate performance, the vault updates its internal valuation—allowing users to redeem their proportional share through the vault’s queued withdrawal mechanism.

Glow Vaults make on-chain yield **passive**, **transparent**, and **institutionally adaptable**, while maintaining strict isolation per vault so outside protocol events do not affect a vault’s deposits.

## What’s Unique About Glow Vaults

Glow Vaults introduce several architectural and operational features that distinguish them from traditional vault systems and align with institutional best practices:

- **Constrained Operator Accounts** — Strategy execution occurs through margin accounts with enforced permissions, preventing unauthorized withdrawals or transfers.
- **Deterministic Redemption Queues** — Withdrawals follow a predictable waiting-period model which results in a higher yield, enabling safe strategy unwinding and controlled liquidity.
- **Strict Role Separation** — Operational responsibilities are split across Protocol Authority, Strategy Owner, Strategy Operator, and Valuation Authority.
- **Adaptive Strategy Framework** — Vaults support both margin-based and multisig strategies without exposing user funds to external protocol risks.
- **Safety-First Controls** — Vaults can disable deposits or operator actions during abnormal events.

These design principles deliver the flexibility of modern automated yield systems while preserving robust operational safety.

## Vault Architecture

Glow Vaults follow a modular, security-first architecture using coordinated components defined in the protocol’s smart contracts.

### Vault Program

Responsible for:

- accepting deposits
- creating user claim accounts
- enforcing role-based permissions
- managing redemption queues
- validating valuation updates

### Strategy Execution

Strategies run through controlled execution environments:

- **Operator Margin Accounts** — constrained Glow Margin accounts preventing unauthorized withdrawals or transfers. These accounts are automatically valued by the margin system at high frequency.
- **Multisig Strategies** — secured multisig-managed wallets for strategies not executed via margin accounts.

### Valuation Updates

The **Strategy Operator** or **Valuation Authority** submits valuation updates, which apply strategy gains/losses and adjust user claims.

**The Valuation Authority role applies only to multisig-managed strategies.**

Valuations occur when submitted, not on a fixed cadence, though typical operational practice updates valuations **approximately every 48 hours**, as reflected in the in-app “Last updated” timestamp.

### Redemption Queue

Withdrawals follow a waiting-period model defined per vault. Funds move through:

- A redemption request
- A Pending Redemptions pool
- Final redemption by the depositor

## Roles & Permissions

Glow enforces strict separation of responsibilities:

### Protocol Authority

- Controls upgrades and vault configuration
- Managed by a Squads multisig

### Strategy Owner

- Owns the vault’s strategy configuration
- Configures and governs the strategy but does not execute it
- May operate via multisig or secured automated wallets

### Strategy Operator

- Requests capital allocations
- Executes strategies
- Must submit valuation updates before returning funds to Pending Redemptions

### Valuation Authority

- Updates valuations for **multisig strategies only**
- Acts as a restricted service account

### Depositors

- Hold claim records via program-derived addresses
- Initiate withdrawals through the redemption queue
- May optionally **leverage deposits using Glow Margin Pools** to amplify exposure

## Flow of Funds

Glow Vaults follow an auditable lifecycle consistent with the official vault flow diagrams.

### Deposits

1. User deposits assets into the vault.
2. Vault credits the user’s claim account.
3. Strategy Operator submits a signed request for allocation.
4. Vault transfers capital to either:
    - a constrained Operator Margin Account, or
    - a designated multisig strategy account.

**Note:** Deposits may be temporarily disabled during abnormal or high-risk conditions.

### Valuation

A valuation update is submitted prior to any redemption-related transfers.

### Redemptions

1. Depositor initiates a redemption request.
2. Vault reserves the requested amount by marking the claim as unavailable.
3. Strategy Operator unwinds positions and returns funds to Pending Redemptions.
4. After the waiting period, the depositor redeems their funds.

**Note:** Operator actions may also be paused under abnormal conditions for user safety.

## Access Control & Safety Model

Glow Vaults incorporate layered safeguards:

- Multisig-gated upgrades
- Constrained Operator Margin Accounts preventing unauthorized transfers
- Valuation deviation checks rejecting abnormal updates
- Pause switches to disable deposits or operator actions
- Cross-program invocation guarantees ensuring correct interactions between Vault and Margin Programs

All operator actions and valuation updates are recorded on-chain for auditability.

## Valuation & Accounting

Glow Vaults use operator-submitted valuation updates rather than continuous share-price accrual.

### Valuation Model

When a valuation update is submitted:

- strategy value is adjusted
- gains/losses are recognized
- user claim balances adjust proportionally
- deviation bounds ensure accuracy and reject abnormal values

## Vault Fees

Vaults may include configurable fee parameters, which are applied through valuation updates and reflected in user claim amounts. Fee structures are documented per vault in the Glow app and Fees documentation.

## Vault Types

Glow Vaults may support:

- Single-strategy vaults
- Multi-strategy vaults
- Leverage-enabled strategies using constrained Operator Margin Accounts
- Future liquidity-buffer vaults
- Migration or restricted-deposit vaults for operational transitions
