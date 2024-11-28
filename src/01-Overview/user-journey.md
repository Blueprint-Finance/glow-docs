---
title: "User Journey"
description: "From Deposit to Full Utilization of Glow’s Features"
sidebar_label: "User Journey"
sidebar_position: 2
---

This journey showcases how a user can utilize Glow’s capabilities efficiently and maximize their opportunities while staying informed through the platform’s intuitive visual indicators.

### 1. Connecting the Wallet and Setting Up a Margin Account

The journey starts when the user connects their wallet to Glow. The user is prompted to create a margin account, a crucial step since this account enables access to various features like depositing assets, borrowing, and executing swaps. To set up this account, the user must pay a small refundable rent fee of 0.035 SOL to cover on-chain storage costs on the Solana blockchain. Glow transparently displays this requirement to the user through a clear prompt.

:::tip
Users should ensure they have a small amount of SOL in their wallet for transaction fees. Glow displays a notification when the wallet lacks sufficient SOL, preventing confusion and streamlining the setup process.
:::

### 2. Depositing Assets into the Margin Account

Once the margin account is set up, the user can deposit any supported assets, such as USDC, SOL, or other Solana-based tokens. The deposited assets become available as collateral in the margin account. For instance, if the user deposits 1,000 USDC, that value contributes directly to the user’s effective collateral.

**Visual Indicators**: To maintain transparency, Glow displays account health and leverage levels on the dashboard. If an account's health drops below 5%, a **red banner** warns the user that their margin account is at risk of liquidation. This banner directs the user to a **Health Alert Modal**, where they can view all margin accounts with risky health levels. From this modal, the user can select a specific account to address. Upon selection, they will be taken to the **Portfolio Positions** page for that margin account, where they can manage positions by depositing more collateral, adjusting leverage, or taking other actions to improve the account’s health.

**Blockchain Performance Alerts**: When the Solana blockchain is experiencing latency or degraded performance, a **yellow banner** will appear, notifying the user of potential transaction delays. This banner serves as a heads-up to help users avoid issues with transaction timing.

### 3. Earning Interest through Pooled Lending

With assets in their margin account, the user automatically begins earning interest on deposits, such as USDC, based on the pool's utilization rate. Glow provides dynamic visual cues, like projected interest rates and utilization ratios, to help users understand and monitor potential returns.

**Example**: If a user deposits 1,000 USDC into the pool and the current utilization rate is 70%, Glow projects an interest rate of 5% APY. The user sees these calculations and can determine how their deposit impacts both their returns and the pool’s overall rate.

### 4. Executing Leverage Swaps for Strategic Gains

Glow’s leverage swaps allow users to enhance their trading strategies by borrowing against their collateral. For example, a user with a margin account funded with USDC can borrow SOL using the leverage swap feature, which allows them to simultaneously borrow SOL and swap it for another asset, such as sSOL, within the same transaction. This process opens up opportunities for yield farming and other sophisticated strategies.

**Example Strategy 1: Stablecoin Rate Arbitrage**

Users seeking to maximize yield on stablecoins can borrow USDC at a low rate from Glow’s margin pools, then leverage the swap feature to deposit the borrowed funds into another protocol with a higher APY. Glow’s visual indicators make it easy to monitor utilization and projected returns, ensuring the user’s strategy remains informed and efficient.

**Example Strategy 2: Pair Trade for Market Neutrality**

By borrowing two assets and leveraging them simultaneously, users can create pair trades to profit from relative price movements.

### 5. Utilizing Glow Recipes for Simplified Strategies

Glow Recipes are pre-configured leverage swaps designed to automate complex strategies, making them accessible even to those new to DeFi trading. Similar to traditional DeFi vaults, these 'canned' leverage swaps allow users to execute sophisticated strategies with minimal input, without the need to manually adjust each variable. By offering these ready-made 'recipes,' Glow enables users to deploy effective strategies with ease and differentiation from the standard DeFi vaults.

**Example Recipe**: A "Delta Neutral Farming" recipe could involve depositing SOL and swapping it for **sSOL**—a liquid restaking token that earns rewards as it appreciates over time from staked SOL. This setup creates a hedged position that minimizes exposure to SOL price volatility while allowing the user to earn sSOL restaking rewards. Glow guides users through each step of the recipe, configuring the necessary leverage swap so users only need to make an initial deposit.

Glow’s interface provides real-time delta values highlighted in yellow, illustrating how the recipe will impact the user’s account, including collateral impact, borrowing limits, and health levels. Users can fine-tune swap amounts using sliders, previewing potential outcomes before confirming the transaction.

### 6. Managing Multiple Margin Accounts

Glow offers the option to create multiple margin accounts within a single wallet, allowing users to isolate different strategies and segment and manage risk more effectively. For instance, a user may have one margin account dedicated to a high-leverage swap strategy while maintaining a separate account for delta-neutral farming. This segmentation ensures that a risky position in one account doesn’t impact the stability of others. If one account is liquidated, it would not affect the other margin account at all.

**Visual Management Tools:**

Users can switch between their margin accounts using a dropdown menu and access portfolio.

- **Portfolio Overview**: The **Portfolio** page provides a “bird’s eye view” of all accounts, enabling users to see the overall health, collateral, and leveraged positions of each margin account in a single view. Designed as the primary management hub, the Portfolio page allows users to seamlessly navigate between accounts using a dropdown menu and drill down into specific positions within each account.
- **Position Details**: Users can access detailed breakdowns of each position in their accounts. Here, they can view how individual deposits or borrows are contributing to, or detracting from, the effective collateral in each margin account.
- **Account History:** Each margin account's History tab in the Portfolio provides a comprehensive record of all transactions, including detailed liquidation events. Collapsible sections break down liquidation transactions into individual sub-swaps, showing how each was executed to repay outstanding debt. This transparency helps users review past actions, learn from prior events, and better understand how market conditions or strategies impacted their accounts.

### 7. Monitoring Account Health and Liquidation Risks

Throughout the user journey, Glow monitors account health in real-time. It calculates effective and required collateral, ensuring users know if they approach a liquidation threshold. If the account health dips below 5%, the platform displays a yellow warning banner, prompting the user to add collateral or reduce their position. In severe cases, a critical alert banner appears, urging immediate action to protect the account.

**Example Safeguards**:

- **Network Status Warnings**: If the Solana network experiences delays, Glow shows a yellow banner warning the user about potential transaction issues, helping them avoid failed transactions.

### 8. Glow Recipes for Automated and Advanced Strategies

Beyond individual transactions, Glow Recipes automate advanced strategies, saving users time and optimizing their capital. Recipes range from simple yield farming setups to more complex arbitrage strategies that involve cross-protocol opportunities.

**Example**: In a "Cross-Protocol Arbitrage" recipe, a user could borrow USDC at a low rate from Glow’s margin pools and use an integrated adapter to deposit it into another protocol with a higher APY. Glow’s interface guides the user through the steps, showing projected returns and potential fees, ensuring transparency.
