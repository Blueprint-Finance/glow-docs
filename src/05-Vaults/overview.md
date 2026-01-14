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

**Glow Vaults** are on-chain containers that manage deposited assets using predefined strategies, allocating and deploying capital across integrated DeFi protocols to maximize returns while managing risk.

Each Vault represents a curated investment approach, balancing **liquidity, security, and yield optimization** through smart contract automation.

Vaults are fully on-chain and integrate with leading DeFi protocols using secure and audited smart contracts.

## Vaults vs Strategy Vaults

All Glow Vaults are vaults — the difference lies in the **strategy they run**.

- **Vaults** may run simple strategies, such as earning yield on a single asset without leverage.
- **Strategy Vaults** are still vaults — they simply run more advanced strategies and may expose additional controls and risk metrics.

Both are accessed and managed through the same vault interface. Strategy Vaults simply apply more complex strategy logic. Strategy Vaults may rely on strategy-specific architectures such as isolated margin accounts or external protocol adapters depending on the requirements of the strategy.


## Vault Objectives

- Deliver **sustainable, risk-adjusted yield** on digital assets.
- Automate complex multi-chain strategies for passive depositors.
- Enhance capital efficiency through **collateralized borrowing**.
- Maintain full transparency on allocations, APY, and risk metrics.

## Deployment Strategies

Each vault may run one or more strategies depending on its design. Some vaults apply a single strategy, while others combine multiple strategies or rebalance between them over time.

Some of the strategies below are used exclusively by Strategy Vaults, while others may be employed by simpler allocation-focused vaults. Glow Vault strategies generally fall into **three core categories**:

### 1. Lending & Rebalancing Strategies

Vaults dynamically rebalance liquidity between integrated markets (e.g. Glow, Kamino and Jupiter Lend) to capture the best yield opportunities while maintaining safety thresholds.

### 2. Leveraged Yield

Certain vaults use **collateralized borrowing** to amplify returns — managed automatically within safe liquidation limits.

### 3. Liquidity Buffers (Planned)

Future versions may introduce **liquidity buffers** (secondary highly liquid strategies) to support faster [withdrawals](#withdrawals) and reduce queue reliance.

## Yield & Performance

- **APY Calculation:** Based on recent share-price changes over a rolling time window, reflecting the vault’s performance across its underlying strategies.
- **Update Frequency:** The Vault Operator reports updated valuations approximately every **48 hours**, adjusting the vault’s share price and refreshing the displayed APY. The most recent update is shown in-app as **“Last updated”** with a timestamp.
- **Transparency:** All vault allocations, performance data, and fee structures are **on-chain and viewable** in the Glow app, allowing users to independently verify performance and update cadence.

## Withdrawals

Withdrawals are processed according to the vault’s strategy design. Some vaults support queued withdrawals (typically completed within ~72 hours once liquidity becomes available), while others may support faster or instant withdrawals depending on underlying liquidity.

## Rewards

Vault participants earn **Glow Points** for participating in the Glow vault ecosystem.
Future vaults may include additional partner reward programs.

## Vault Risks

Risk profiles may differ between vaults, especially for vaults running advanced or leveraged strategies.

Before depositing, review the full [Vault Risk Disclosure](../../risks/#vault-risks) for details on risk mitigation, collateral safeguards, and underlying protocol integrations.
