---
title: "How to Close a Margin Account"
description: "Step-by-step guide to closing a Glow margin account on Solana, including prerequisites, the closure flow, and rent refund."
sidebar_label: "How to Close a Margin Account"
sidebar_position: 2
keywords:
  - close margin account
  - solana
  - glow finance
  - rent refund
---

This guide explains how to close a margin account you no longer need. Closing an account reclaims the SOL rent deposit you paid when you created it.

## Prerequisites

Before you can close a margin account, it must be completely empty:

1. **Repay all outstanding debt** — any borrowed assets must be fully repaid.
2. **Withdraw 100% of your assets** — all deposited assets must be withdrawn from the account.

:::tip
You can check your account's balances on the [Portfolio](../03-margin-accounts/portfolio-management.md) page. Both **Assets** and **Liabilities** must show **$0.00** before the close option becomes available.
:::

## Step 1: Navigate to the Portfolio Page

Go to the **Portfolio** page from the top navigation. You'll see all your margin accounts listed under the **Accounts** tab.

## Step 2: Close Margin Account

On the account you want to close, click the **Close Margin Account** button.

{/* TODO: add screenshot of Portfolio page with Close button visible */}

Glow will check your account and open the **Close Margin Account** modal.

## Step 3: Confirm and Approve

The modal will remind you of the prerequisites and confirm that your SOL rent will be refunded upon closure.

### Accounts without a lookup table

If your account does not have a lookup table, the process is straightforward:

- Review the information in the modal.
- Click **Close Margin Account** to approve a single wallet transaction.

### Accounts with a lookup table

If your account has a lookup table, closing requires two transactions with a short waiting period:

1. **Transaction 1** — removes the lookup table from your account. Click **Next** to approve this transaction in your wallet.
2. **Waiting period** — after the first transaction is confirmed, the app requires you to wait **2 minutes** before proceeding. This waiting period is required by the Solana network.
3. **Transaction 2** — once the timer completes, click **Close Margin Account** to approve the final transaction and close your account.

{/* TODO: add screenshot of Close Margin Account modal (step 1 — with lookup table) */}

{/* TODO: add screenshot of Close Margin Account modal (step 2 — countdown timer) */}

:::info Not sure if your account has a lookup table?
You don't need to check — Glow detects this automatically and shows you the correct flow. If you created your account recently, it likely has a lookup table and will follow the two-transaction flow.
:::

## Step 4: Confirmation

Once the closure transaction is confirmed, you'll receive a success notification. Your SOL rent deposit (0.072 SOL) will be refunded to your wallet, and the account will be removed from your Portfolio.

{/* TODO: add screenshot of success notification */}

:::tip
Closing a margin account is permanent. If you want to use Glow again later, you can always [create a new margin account](../03-margin-accounts/how-to-create-a-margin-account.md).
:::
