---
title: "How to Manage Positions"
description: "Understanding positions in Glow margin accounts: counting rules, limits, UI counters, and freeing slots."
sidebar_label: "How to Manage Positions"
keywords:
  - positions
  - limits
  - margin account
  - manage positions
---

This article explains what **margin account positions** are, how they are counted, and what users should be aware of when managing many tokens within a single margin account.

![](/img/position-2.png)

## What is a “Position”?

A **position** represents a distinct asset tracked in your margin account. Glow uses a memory-efficient structure that supports **up to 32 positions per account**, of which:

- **8 positions** are reserved for internal Liquidator operations.
- **24 positions** are available to the **user**.

These 24 user positions are used when depositing or borrowing assets.

## How Positions Are Counted

Deposits and borrows are tracked separately, and a single transaction can use **one**, **two**, or more positions—depending on the asset's presence in the account.

### Position Increments

| **Action**                             | **Position Change** |
| -------------------------------------- | ------------------- |
| Deposit a new asset                    | +1 position         |
| Borrow an asset already in the account | +1 position         |
| Borrow an asset **not** in the account | +2 positions        |

:::tip
If you borrow a token you haven’t deposited yet, Glow automatically redeposits it into the pool—counting as a second position.
:::

### Example

You deposit USDC → **+1**

Then borrow SOL (you don’t hold it yet) → **+2** (borrow + redeposit)

**Total = 3 positions**

### Position Decrements

| **Action**                                     | **Position Change** |
| ---------------------------------------------- | ------------------- |
| Withdraw 100% of an asset                      | -1 position         |
| Repay a loan (asset still held in account)     | -1 position         |
| Repay a loan (asset no longer held in account) | -2 positions        |

## Viewing Position Limits

Glow shows position usage in two key places:

- **Margin Account Panel** – Located at the top of the screen when viewing a specific margin account (e.g., **6/24 used**). This is also a **clickable button** that opens the **Manage Positions popup** for that account. Hover or click to view position usage across all your margin accounts without switching between them.
- **Portfolio Page** – Displays a side-by-side overview of all margin accounts and their current position usage, helping you monitor them at a glance.

These counters help you manage usage and avoid errors when approaching the cap:

1. **Margin Account Panel**:
   ![](/img/position-1.png)

2. **Portfolio Page**:
   ![](/img/position-2.png)

### Why Is There a Limit?

The 24-position cap exists due to **on-chain memory constraints**.

Glow helps you work within this limit by surfacing usage counters, warning messages, and optimized UI feedback.

## Managing Positions

To get a detailed view of which assets are using positions—and quickly take action to free up space—click the **Manage Positions** button in the margin account panel.

This will open the **Manage Positions Popup**, where you can:

- See how many of your 24 available positions are in use
- Understand how each asset is using positions, e.g. `+1 pool deposit`, `+1 pool borrow`, or `+1 empty position`
- Take direct action to free up space by withdrawing deposits or repaying loans
- Close all empty positions in a single click using the button at the top. If any empty positions exist, this is the easiest way to get more space for additional positions.
  :::tip
  Empty positions can occur when a position slot remains open after certain operations (like full repayment or withdrawal) but hasn’t yet been reclaimed by the system.
  :::

Each entry in the popup represents an asset, with a clear description of its position usage and an action button (e.g. **Withdraw Fully**, **Repay Loan Fully**) to close that position if needed. A single asset can contain more than one row if it is taking more than one position.

![](/img/position-3.png)
