---
title: "How to Manage Your Portfolio"
description: "Portfolio management in Glow: viewing accounts, health level, leverage, positions, and history with actionable UI."
sidebar_label: "Portfolio Management"
sidebar_position: 3
keywords:
  - portfolio management
  - positions
  - health level
  - leverage
  - solana
---

## Margin Account Panel Explainer

The **Margin Account Panel** is the hub for managing your margin accounts on Glow Finance. It provides detailed insights into your active margin account and allows you to easily switch between accounts, create new ones, and perform transactions.

![](/img/portfolio-0.png)

### Key Features

1. **Current/Active Margin Account:**
   - The panel displays information for the currently selected margin account, referred to as the **active account**.
   - All transactions, such as deposits, borrows, or repayments, are executed for the active account.
   - Switching accounts updates the panel to reflect the details of the newly selected account.
2. **Health Level Indicators:**
   - **Health Level** is a normalized measure showing how far the account's **Available Collateral** is from 0.
   - **Available Collateral** = **Effective Collateral** - **Required Collateral**.
   - When **Available Collateral = 0**, the account is unhealthy and at risk of partial liquidation to restore its health. If the account remains undercollateralized, partial liquidations can occur multiple times in quick succession, especially in volatile markets. This may continue until the user either adds collateral or repays debt to improve the account’s health.
3. **Visual Indicators:**
   - Health levels are represented using color-coded indicators:
     - **Green**: Stable account with sufficient collateral.
     - **Blue**: Moderate risk but still safe.
     - **Red**: Critical health level; liquidation is imminent.
   - Users are alerted through banners if the health level for the active or other accounts falls below safe thresholds of 5%.
4. **Switching and Creating Accounts:**
   - Click the **Account dropdown menu** located in the **top-left corner of the screen** (next to the Health Level and Account Leverage indicators).
   - From this menu, you can **switch between existing margin accounts** or **create a new account** with just a few clicks.
   - Creating a margin account requires a small, refundable blockchain rent fee and enables interaction with Glow's advanced DeFi products.
5. **Manage Positions:**
   - Click the **Manage Positions** button to open a popup that shows a full breakdown of how your margin account positions are being used.
   - The popup clearly lists each asset and whether it’s using space due to deposits, borrows, or empty leftover positions.
   - You can quickly withdraw or repay from this view to free up space, or use the Close Empty Positions button to remove unused slots in bulk.
   - This feature helps you stay under the 24-position cap and avoid transaction errors caused by maxed-out position slots.

### Detailed Terms

1. **Health Level**: Indicates the ratio of Effective Collateral to Required Collateral, normalized to a percentage scale:
   - **100.0%**: No borrowing positions; stable account.
   - **Below 20.0%**: Risk of liquidation; users should act to stabilize the account.
   - Max borrowing or leveraging limits are determined based on maintaining a minimum health level of **6.0%**, ensuring a small buffer before [warnings are triggered](../03-margin-accounts/health-level.md).
2. **Account Leverage**: Shows the ratio of total borrowed assets to total equity in your account (where equity = assets - liabilities). Higher leverage indicates greater risk exposure.
3. **Available Balance**: total deposited assets available for use and total borrowed assets currently owed.
4. **Available Collateral**:
   - **Effective Collateral**: Usable collateral value, adjusted for each deposited asset's collateral weight.
   - **Required Collateral**: The minimum collateral necessary to maintain existing borrowing positions.
5. **Global Metrics**:
   - **Global Market Size**: Total value of all assets deposited and borrowed across Glow.
   - **Total Deposited**: Combined value of all deposits in the protocol.
   - **Total Borrowed**: Total value of borrowed assets across the protocol.

### All Markets and Asset Management

The **All Markets** section lists all supported assets, such as SOL, USDC, and more. For each asset, you can:

- **Deposit**: Add assets to your margin account to increase collateral.
- **Borrow**: Use deposited collateral to borrow assets.
- **Repay**: Pay back borrowed amounts to improve health levels.
- **Withdraw**: Remove deposited assets.

### Ease of Advanced Actions

The panel allows sophisticated users to:

- Perform multiple actions across accounts without the need to switch repeatedly.
- Quickly deposit, borrow, or repay for different assets from the **All Markets** section.

## Portfolio Dashboard

![](/img/portfolio-3.png)

The **Portfolio** section provides a high-level overview of all your margin accounts and vault positions. The dashboard displays all active vault positions, strategy vault positions, and margin accounts under your wallet with key metrics for each account:

- [Health Level](../03-margin-accounts/health-level.md): Indicates the overall safety of the account as a percentage, color-coded for clarity (green for safe, blue for middle, and red for at-risk).
- **Account Leverage**: The leverage ratio showing how much of the collateral is utilized.
- **Available Balance**: A breakdown of assets and liabilities in the account.
- **Available Collateral**: Represents the difference between your **Effective Collateral** and **Required Collateral**. When this value reaches zero, your account becomes unhealthy, and partial liquidation may occur to restore a healthy margin position.
- **Effective Collateral**: The total value of deposited assets adjusted by their respective **Collateral Weights**. Each asset type has a **Collateral Weight**, a percentage representing how much of its value can be considered usable collateral. For example, an asset with a 70% weight contributes 70% of its value to your Effective Collateral.
- **Required Collateral**: The minimum collateral value needed to support your current leverage and avoid liquidation.

### Sections & Filters

The Portfolio Dashboard organizes your assets into expandable sections, making it easier to manage different position types from a single view.

Users can filter the dashboard by:

- **All** – shows everything in one view
- **Vaults** – simple, non-leveraged vault positions
- **Strategy Vaults** – advanced vaults running multi-step or leveraged strategies
- **Accounts** – standalone margin accounts

Each section is collapsible, allowing you to expand only the positions you want to review while.

### Margin Account Positions - Expandable View

The Portfolio Dashboard provides a unified view of all lending and borrowing activity across every margin account connected to your wallet. Instead of reviewing accounts one by one, users can now see health levels, leverage, assets, and liabilities for all accounts in a single consolidated interface — making it easier to understand overall exposure and manage risk.

In the list of margin accounts, the positions within margin account can be viewed on a per token basis in the expandable section that appears after the first deposit is made to it. Inside this expandable section, individual positions are sorted by their impact on the account’s [effective collateral](../../glossary/#effective-collateral), although you may sort by any of the columns available (price, deposited, borrowed, and contribution to collateral) . This includes both assets with large deposited values (which provide an account’s effective collateral) and assets with large borrowed values (which consume effective collateral). Positions can be reordered using other columns as needed.

This reduces the cognitive overhead of managing multiple accounts and helps users identify risky positions or unused capital.

![](/img/portfolio-8.png)


### Vault Positions

Vault positions remain fully integrated with your margin account while providing a simplified, strategy-focused management experience.

When a wallet has an active vault position:

- The Portfolio dashboard highlights the account containing the vault.
- Selecting the account allows you to navigate directly to the vault’s **Manage Position** page.
- From there, you can deposit more SOL, initiate withdrawals, and monitor vault-specific metrics such as leverage, health level, and liquidation ratio.

## Managing Positions

From the Portfolio page, users can manage both **vault-based positions** (Vaults and Strategy Vaults) and **standalone margin accounts**.

Vault-based positions appear in the Portfolio only if the user has an active position. Expanding a vault section — or clicking the individual row — allows users to view key position metrics and access actions such as Manage Vault, Withdraw, or view the Unstaking Queue.

Standalone (normal) margin account positions are expandable. Expanding a margin account provides access to position-level actions such as borrowing, repaying, or withdrawing assets.

The Portfolio page is tailored to assist users, enabling them to efficiently perform a series of actions across multiple margin accounts without needing to switch back and forth between the main interface. This streamlined workflow significantly enhances the user experience, especially for those managing complex portfolios or executing multiple strategies.

![](/img/position-2.png)

When a margin account row is expanded, users can view all positions within that account.

- **Asset Overview**: Lists all assets in the account with columns for:
    - **Deposited Amount**: Total assets deposited. The USD equivalent is displayed alongside each asset’s amount for clarity.
    - **Borrowed Amount**: Outstanding debts in each asset.
    - **Contribution to Collateral**: The positive or negative impact of each asset on the account’s effective collateral.
- **Action Buttons**: For each asset, users can:
    - **Deposit**
    - **Borrow**
    - **Repay**
    - **Withdraw**

## Immediate Alerts

- **Post-Liquidation Modal**: Once a liquidation event is complete (usually within a few seconds), users receive a notification in the form of a modal. This provides them with the ability to review detailed insights, including what triggered the liquidation and how the event unfolded.
- **Persistent Alerts**: If users are not online during the liquidation event, the same modal will appear the next time they connect their wallet. This ensures that users are informed about liquidation events for any of their margin accounts, even if multiple accounts are affected or a single account is liquidated multiple times.

These alerts ensure users remain fully informed about their account status, enhancing transparency and enabling prompt follow-up actions.

![](/img/portfolio-7.png)
