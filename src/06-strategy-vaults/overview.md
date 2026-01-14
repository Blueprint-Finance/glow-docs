---
title: "Overview"
description: "Overview"
sidebar_label: "Overview"
keywords:
  - glow finance
  - vaults
  - strategy pzQdh7H39l9zgB4PJqjRNqydvdYCDG4HFXM4XuvSaQQlEc91IU1yALL8gUTDomgBAfz3XJdmUS
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

All Glow Vaults are vaults — the difference lies in the **strategy they run**.

- **Vaults** may run simple strategies, such as earning yield on a single asset without leverage.
- **Strategy Vaults** are still vaults — they simply run more advanced strategies and may expose additional controls and risk metrics.

Both are accessed and managed through the same vault interface. Strategy Vaults simply apply more complex strategy logic.

## What Is a Strategy Vault?

A **Strategy Vault** is a vault that runs a pre-built, automated DeFi strategy composed of a coordinated sequence of actions — such as depositing collateral, borrowing, restaking, swapping, or creating long/short positions — executed through a single guided flow.

Users choose a few settings, such as how much they want to deposit and their preferred risk level, then confirm the transaction to create the Strategy Vault position. From there, Glow handles execution automatically. Once the Strategy Vault is live, users can easily manage their position and track performance in real time through a simple, user-friendly dashboard.

Strategy Vaults are designed to make advanced on-chain actions more accessible by wrapping complex workflows in a simplified, guided experience.

Each Strategy Vault can have:

- Its own strategy logic (e.g. leveraged staking, stablecoin farming, delta-neutral positions)
- An isolated margin account used to execute the strategy
- Custom parameters and risk settings
- Unique yield opportunities, rewards, and fee structures

### Architecture (High Level)

While Strategy Vaults share a common vault interface and safety principles, their underlying architecture is defined on a **case-by-case basis** depending on the requirements of each strategy.

Many Strategy Vaults are **composed of**:

- One or more isolated margin accounts
- Adapters to Glow pools and/or external protocols
- Strategy-specific execution logic and safeguards

The exact components and flow vary per Strategy Vault to ensure each strategy is implemented safely, efficiently, and with appropriate risk isolation.

### Built for Modularity

Glow Strategy Vaults are modular and designed to evolve. New strategies — and new assets — can be added over time. Each Strategy Vault has its own page with specific instructions, risks, and FAQs.
