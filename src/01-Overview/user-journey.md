---
title: "User Journey"
description: "A step-by-step guide from wallet connect and margin account creation to lending, borrowing, recipes, and risk management."
sidebar_label: "User Journey"
sidebar_position: 4
keywords:
  - user journey
  - margin accounts
  - lending
  - borrowing
  - glow recipes
  - health level
---

:::info
This section of the documentation outlines features of the upcoming **Glow Finance V1** application, currently in development. While we finalize this exciting update, you can already take advantage of Glow Restaking, which is live and available today.

[Learn more about Glow Restaking](../02-LRT/overview.md).
:::

This journey showcases how a user can utilize Glow’s capabilities efficiently and maximize their opportunities while staying informed through the platform’s intuitive visual indicators.

## 1. Connecting the Wallet and Setting Up a Margin Account

The journey starts when the user connects their wallet to Glow. The user is prompted to create a margin account, a crucial step since this account enables access to various features like depositing assets and borrowing. To set up this account, the user must pay a small refundable rent fee of 0.055 SOL to cover on-chain storage costs on the Solana blockchain. Glow transparently displays this requirement to the user through a clear prompt.

Glow enables users to create and manage multiple margin accounts under a single wallet, providing an intuitive interface that allows seamless navigation, management, and transactions across all accounts.

:::tip
Users should ensure they have a small amount of SOL in their wallet for transaction fees. Glow displays a notification when the wallet lacks sufficient SOL, preventing confusion and streamlining the setup process.
:::

## 2. Depositing Assets into the Margin Account

Once the margin account is set up, the user can deposit any supported assets, such as USDC, SOL, or other Solana-based tokens. The deposited assets are simultaneously available as collateral within the margin account, even as they are actively lent out to generate yield. For instance, if the user deposits 1,000 USDC, that value contributes directly to the user’s effective collateral as it continuously earns the displayed APY (see next section).

**Visual Indicators**: To maintain transparency, Glow prominently displays account health and leverage levels on the dashboard. If the Health Level of any margin account controlled by the connected wallet drops below 5%, a red banner will appear, alerting the user that the account is at risk of liquidation. This banner directs the user to a **Health Alert Modal** where they can view all margin accounts with risky health levels. From this modal, the user can select a specific risky account(s) to address, and they will be taken to the **Portfolio Positions** page for that margin account. Here, they can manage positions by depositing more collateral, adjusting leverage, or taking other actions to improve the account’s health.

**Blockchain Performance Alerts:** When the Solana blockchain experiences latency or degraded performance, users are notified via banners. A **yellow banner** indicates moderate delays, while an **orange banner** signals more severe performance issues that may impact transaction timing. These alerts provide users with a heads-up to plan their transactions accordingly and avoid potential issues.

## 3. Earning Interest through Pooled Lending

With assets in their margin account, the user automatically begins earning interest on deposits, such as USDC, based on the pool's utilization rate. Glow provides dynamic visual cues, like projected interest rates and utilization ratios, to help users understand and monitor potential returns.

Example: If a user deposits 1,000 USDC into the pool and the current utilization rate is 70%, Glow displays the current lending rate for USDC and, more importantly, the projected rate the user will earn after their deposit is factored in. As a new deposit will affect the pool utilization and thus the interest rates, this feature ensures users will see exactly how their deposit will affect the pool APY before committing. This level of transparency, often missing in other DeFi lending protocols, empowers users to make informed decisions based on their desired returns.

## 4. Managing Multiple Margin Accounts

Glow offers the option to create multiple margin accounts within a single wallet, allowing users to isolate different strategies and segment and manage risk more effectively. This segmentation ensures that a risky position in one account doesn’t impact the stability of others. If one account is liquidated, it would not affect the other margin account at all.

**Visual Management Tools:**

Users can switch between their margin accounts using a dropdown menu and easily take action on all the margin accounts in their portfolio. In addition, Glow provides a UI to manage all margin accounts at once:

- **Portfolio Overview**: **Portfolio** page provides a “bird’s eye view” of all accounts, enabling users to see the overall health, collateral, and leveraged positions of each margin account in a single view. Designed as the primary management hub, the Portfolio page allows users to seamlessly navigate between accounts using a dropdown menu and drill down into specific positions within each account.
- **Position Details**: Users can access detailed breakdowns of each position in their accounts. Here, they can view how individual deposits or borrows are contributing to, or detracting from, the effective collateral in each margin account.
- **Account History:** Each margin account's History tab in the Portfolio provides a comprehensive record of all transactions and any rewards earnned, including detailed liquidation events. This transparency helps users review past actions, learn from prior events, and better understand how market conditions or strategies impacted their accounts.

## 5. Glow Recipes for Automated and Advanced Strategies

Beyond individual transactions, Glow Recipes automate advanced strategies, saving users time and optimizing their capital. Recipes range from simple yield farming setups to more complex arbitrage strategies that involve cross-protocol opportunities.

**Example**: In the future, Glow may support adapters for external protocols, unlocking the potential for advanced cross-protocol arbitrage. This would allow users to borrow stablecoins from one protocol and lend them on another to arbitrage rate differences, with all deposits and borrowings across platforms contributing to the collateral value of their Glow margin account.

![](/img/user.png)
