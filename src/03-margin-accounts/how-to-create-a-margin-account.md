---
title: "How to Create a Margin Account"
description: "How to Create a Margin Account"
sidebar_label: "How to Create a Margin Account"
sidebar_position: 1
---


This guide explains the steps involved in creating a margin account, the Solana blockchain requirements, and the visual indicators Glow uses to help users through the process.  

 A margin account is a necessary prerequisite for interacting with the Glow Finance application, enabling access to its full range of features and functionalities. Glow margin accounts underpin the interaction between a user’s wallet and the Glow Protocol on-chain programs. With just a few clicks, you can create your margin account and unlock the full potential of Glow's innovative DeFi products.

:::tip
Glow even supports creating multiple margin accounts under a single wallet, thus allowing risk segmentation and strategy isolation.
:::

## Prerequisites

1. **Wallet Connection**: Ensure your wallet (Phantom, Backpack, Solflare, WalletConnect, or Coinbase Wallet) is connected to the Glow platform. Glow supports multiple wallets for seamless integration.
2. **SOL Balance Requirement**: You must have at least **0.072 SOL** in your wallet to cover a one-time refundable rent fee for account creation. This fee is used for Solana blockchain storage. In a later release, we will allow users to close their margin accounts and receive a full refund of this rent fee. Please note that this amount does not cover the additional SOL required to process transactions on the blockchain. Transaction fees are typically minimal, averaging less than 0.001 SOL per transaction. Each additional margin account requires payment an additional rent fee. In a future release, users will have the option to close a margin account and receive the full rent fee refunded back to their wallets.

## Key Visual Indicators

- **Tooltips**: If no margin account exists, tooltips on actions like Long, Short, Deposit, or Borrow buttons will display “Create a margin account first.”
- **Disabled Buttons**: If the wallet is not connected or has insufficient SOL, action buttons will be disabled. For instance, if your wallet balance is less than 0.055 SOL, the modal for creating a margin account will indicate that the required balance is insufficient, and you will need to top up your wallet to continue.

## Step 1: Connect Your Wallet

- Navigate to the Glow website and click either of the **Connect Wallet** buttons in the top right section of the web app.


![](/img/create-1.png)

- Select your preferred wallet from the available options.

<img
  src="/img/create-2.png"
  style={{ maxWidth: "500px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>


- Approve the connection in your wallet interface to allow Glow to view your balances and activities.

<img
  src="/img/create-3.png"
  alt="New Margin Account Rent Fee Modal"
  style={{ maxWidth: "500px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
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
  style={{ maxWidth: "600px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

- After paying the rent fee, you’ll be prompted to complete one more step: **setting up a lookup table** for your margin account. This is required for transacting efficiently on Glow and helps reduce transaction size on Solana. You’ll need to approve a second transaction to complete this step.


## Step 4: Handle Insufficient SOL Balance (If Applicable)

If you don’t have enough SOL in your wallet, the button will be disabled, and an error message will prompt you to add more SOL to your wallet.

<img
  src="/img/create-6.png"
  style={{ maxWidth: "600px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

## Step 5: Set Up the Lookup Table

Once the rent payment is successful, Glow will prompt you to create a **lookup table** as a second transaction. This ensures your margin account can efficiently interact with the Glow Protocol.

- The "Create Lookup Table" button will appear

![](/img/create-10.png)

- Confirm the transaction in your wallet to proceed
- If your balance is too low, the button will remain disabled until you top up your wallet

## Step 6: Confirmation

After successfully paying the rent fee and creating the lockup table:

- A **Margin Account Created Successfully** banner will appear. The banner shown below allows you to seamlessly switch between margin accounts within the application. If you choose to create additional margin accounts in the future, you can easily select and activate your newly created margin account directly from this banner.

![](/img/create-7.png)

![](/img/create-8.png)

- If the creation fails, an error banner will notify you of the failure. For any issues, please feel free to contact us via our [Support](../support.md).

![](/img/create-9.png)
