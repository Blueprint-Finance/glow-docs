---
title: "How to Create a Margin Account"
description: "Step-by-step guide to create a Glow margin account on Solana, requirements, rent fee, and UI indicators."
sidebar_label: "How to Create a Margin Account"
sidebar_position: 1
keywords:
  - create margin account
  - solana
  - glow finance
  - setup
---

This guide explains the steps involved in creating a margin account, the Solana blockchain requirements, and the visual indicators Glow uses to help users through the process.

A margin account is a necessary prerequisite for interacting with the Glow Finance application, enabling access to its full range of features and functionalities. Glow margin accounts underpin the interaction between a user’s wallet and the Glow Protocol on-chain programs. With just a few clicks, you can create your margin account and unlock the full potential of Glow's innovative DeFi products.

:::tip
Glow even supports creating multiple margin accounts under a single wallet, thus allowing risk segmentation and strategy isolation.
:::

## Prerequisites

1. **Wallet Connection**: Ensure your wallet (Phantom, Backpack, Solflare, WalletConnect, or Coinbase Wallet) is connected to the Glow platform. Glow supports multiple wallets for seamless integration.
2. **SOL Balance Requirement**: You must have at least **0.072 SOL** in your wallet to cover the rent fees for both required transactions — one for creating the margin account and another for creating the associated lookup table. This fee is used for Solana blockchain storage. In a later release, we will allow users to close their margin accounts and receive a full refund of this rent fee.

3. **Multiple Accounts = Additional Rent Fees**: Each additional margin account requires payment an additional rent fee. In a future release, users will have the option to close a margin account and receive the full rent fee refunded back to their wallets.
   :::tip
   The amount of 0.072 SOL does not cover the additional SOL required to process transactions on the blockchain. Transaction fees are typically minimal, averaging less than 0.001 SOL per transaction.
   :::

## Key Visual Indicators

- **Tooltips**: If no margin account exists, tooltips on actions like Long, Short, Deposit, or Borrow buttons will display “Create a margin account first.”
- **Disabled Buttons**: If the wallet is not connected or has insufficient SOL, action buttons will be disabled. For instance, if your wallet balance is less than 0.072 SOL, the modal for creating a margin account will indicate that the required balance is insufficient, and you will need to top up your wallet to continue.

## Step 1: Connect Your Wallet

- Navigate to the Glow website and click either of the **Connect Wallet** buttons in the top right section of the web app.

![](/img/create-1.png)

- Select your preferred wallet from the available options.

<img
src="/img/create-2.png"
style={{ maxWidth: "300px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

- Approve the connection in your wallet interface to allow Glow to view your balances and activities.

<img
src="/img/create-3.png"
alt="New Margin Account Rent Fee Modal"
style={{ maxWidth: "300px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

## Step 2: Access Margin Account Creation

Once your wallet is connected:

- The top menu bar changes to show the connected wallet, and can be clicked to view app settings.
- A banner at the top of the **Markets** page will prompt you to create a margin account. Click the **Create Margin Account** button. Alternatively, you may click the underlined text in the banner.

![](/img/create-4.png)

## Step 3: Pay the Rent Fee

In the **New Margin Account** modal:

- You’ll see a **one-time rent** of **0.072 SOL** displayed.
- The modal explains that this rent fee is required by Solana and will be fully refundable upon account closure.
- Click **Create Margin Account** to proceed.

<img
src="/img/create-5.png"
style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

- After paying the rent fee, you’ll be prompted to complete one more step: **setting up a lookup table** for your margin account. This is required for transacting efficiently on Glow and helps reduce transaction size on Solana. You’ll need to approve a second transaction to complete this step.

## Step 4: Handle Insufficient SOL Balance (If Applicable)

If you don’t have enough SOL in your wallet, the button will be disabled, and an error message will prompt you to add more SOL to your wallet.
:::tip
You’ll need approximately **0.072 SOL** to cover the rent fees for **both required transactions** — one for creating the margin account and another for creating the associated **lookup table**. Make sure your wallet has sufficient SOL before proceeding.
:::

<img
src="/img/create-6.png"
style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

## Step 5: Set Up the Lookup Table

Once the rent payment is successful, Glow will prompt you to create a **lookup table** as a second transaction. Lookup tables help Glow reduce transaction sizes and ensure your margin account can efficiently interact with the Glow Protocol.

- The "Create Lookup Table" button will appear

<img
src="/img/create-10.png"
style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

- Confirm the transaction in your wallet to proceed

## Step 6: Confirmation

Once both steps are complete—**rent fee payment** and **lookup table creation**—you’ll receive a confirmation that your new margin account has been successfully created.

- If this is **not your first margin account**, a shortcut will appear allowing you to quickly switch to the newly created account.
- Otherwise, your current view will remain unchanged.

You can always switch between margin accounts using the **account dropdown selector** in the top-left corner of the margin account panel. Alternatively, visit the [Portfolio page](../03-margin-accounts/portfolio-management.md) to view and manage all your accounts in one place.

<img
src="/img/create-10.png"
style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

- If the creation fails, an error banner will notify you of the failure. For any issues, please feel free to contact us via our [Support](../support.md).

<img
src="/img/create-9.png"
style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

## Step 7: Review Your Margin Account Panel

After successfully creating a margin account, the Markets page will update to reflect your new account. At the top of the screen, you’ll now see the [Margin Account Panel](../margin-accounts/portfolio-management#margin-account-panel-explainer), which displays key stats for the currently active margin account.

![](/img/create-11.png)
