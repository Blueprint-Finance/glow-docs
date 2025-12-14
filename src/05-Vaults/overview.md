---
title: "Overview"
description: "Overview"
sidebar_label: "Overview"
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

Glow Vaults are **automated yield strategies** that deploy deposited assets across integrated DeFi protocols to maximize returns while managing risk. They are built to make DeFi yield simple, transparent, and automated — giving users access to diversified on-chain strategies without manual management.

Each Vault represents a curated investment approach, balancing **liquidity, security, and yield optimization** through smart contract automation.

Vaults are fully on-chain and integrate with leading DeFi protocols using secure and audited smart contracts.

## Vault Objectives

- Deliver **sustainable, risk-adjusted yield** on digital assets.
- Automate complex multi-chain strategies for passive depositors.
- Enhance capital efficiency through **collateralized borrowing**.
- Maintain full transparency on allocations, APY, and risk metrics.

## Deployment Strategies

Glow Vault strategies generally fall into three core categories:

### 1. **Lending & Rebalancing Strategies**

Vaults dynamically rebalance liquidity between integrated markets (e.g. Glow, Kamino and Jupiter Lend) to capture the best yield opportunities while maintaining safety thresholds.

### 2. **Leveraged Yield**

Certain vaults use **collateralized borrowing** to amplify returns — managed automatically within safe liquidation limits.

### 3. **Liquidity Buffers (Planned)**

Future versions may introduce **liquidity buffers** (secondary highly liquid strategies) to support faster [withdrawals](#withdrawals) and reduce queue reliance.

## Yield & Performance

- **APY Calculation:** Based on recent share-price changes over a rolling time window, reflecting the vault’s performance across its underlying strategies.
- **Update Frequency:** The Vault Operator reports updated valuations approximately every **48 hours**, adjusting the vault’s share price and refreshing the displayed APY. The most recent update is shown in-app as **“Last updated”** with a timestamp.
- **Transparency:** All vault allocations, performance data, and fee structures are **on-chain and viewable** in the Glow app, allowing users to independently verify performance and update cadence.

## Withdrawals

All withdrawals are processed through a **queued withdrawal** system — typically completed within **~72 hours** once liquidity becomes available.
Queued withdrawals appear in the **Withdrawal Queue** with countdown timers and can be finalized once ready.

## Rewards

Vault participants earn **Glow Points** for participating in the Glow vault ecosystem.
Future vaults may include additional partner reward programs.

## Vault Risks

Before depositing, review the full [Vault Risk Disclosure](../../risks/#vault-risks) for details on risk mitigation, collateral safeguards, and underlying protocol integrations.
