---
title: "Positions"
description: "Positions"
sidebar_label: "Positions"
---


This article explains what **margin account positions** are, how they are counted, and what users should be aware of when managing many tokens within a single margin account.

## What is a “Position”?

A **position** represents a distinct asset tracked in your margin account. Glow uses a memory-efficient structure that supports **up to 32 positions per account**, of which:

- **8 positions** are reserved for internal Liquidator operations.
- **24 positions** are available to the **user**.

These 24 user positions are used when depositing or borrowing assets.

## How Positions Are Counted

Deposits and borrows are tracked separately, and a single transaction can use **one**, **two**, or more positions—depending on the asset's presence in the account.

### Position Increments

| **Action** | **Position Change** |
| --- | --- |
| Deposit a new asset | +1 position |
| Borrow an asset already in the account | +1 position |
| Borrow an asset **not** in the account | +2 positions |

:::tip
If you borrow a token you haven’t deposited yet, Glow automatically redeposits it into the pool—counting as a second position.
:::

### Example

You deposit USDC → **+1**

Then borrow SOL (you don’t hold it yet) → **+2** (borrow + redeposit)

**Total = 3 positions**

### Position Decrements

| **Action** | **Position Change** |
| --- | --- |
| Withdraw 100% of an asset | -1 position |
| Repay a loan (asset still held in account) | -1 position |
| Repay a loan (asset no longer held in account) | -2 positions |

## Viewing Position Limits in the App

Glow displays your position usage in two key places:

1. **Margin Account Panel** – Shows the number of positions used out of 24.

![](/img/position-1.png)

1. **Portfolio Page** – Hover over the underlined position count for a tooltip with more info.
These counters help you manage usage and avoid errors when approaching the cap.

![](/img/position-2.png)

## Why Is There a Limit?

The 24-position cap exists due to **on-chain memory constraints**.

Glow helps you work within this limit by surfacing usage counters, warning messages, and optimized UI feedback.
