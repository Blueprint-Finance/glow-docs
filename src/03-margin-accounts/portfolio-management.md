---
title: "How to Manage Your Portfolio"
description: "Portfolio Management: Viewing and Managing Positions, and Navigating the History Tab"
sidebar_label: "Portfolio Management"
sidebar_position: 3
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

The **Portfolio** section provides a high-level view of all your margin accounts, enabling efficient management of your positions and accounts without the need to switch between them. The dashboard displays all active margin accounts under your wallet with key metrics for each account:

- **(Health Level)[../03-margin-accounts/health-level.md]**: Indicates the overall safety of the account as a percentage, color-coded for clarity (green for safe, blue for middle, and red for at-risk).
- **Account Leverage**: The leverage ratio showing how much of the collateral is utilized.
- **Available Balance**: A breakdown of assets and liabilities in the account.
- **Available Collateral**: Represents the difference between your **Effective Collateral** and **Required Collateral**. When this value reaches zero, your account becomes unhealthy, and partial liquidation may occur to restore a healthy margin position.
- **Effective Collateral**: The total value of deposited assets adjusted by their respective **Collateral Weights**. Each asset type has a **Collateral Weight**, a percentage representing how much of its value can be considered usable collateral. For example, an asset with a 70% weight contributes 70% of its value to your Effective Collateral.
- **Required Collateral**: The minimum collateral value needed to support your current leverage and avoid liquidation.

## Benefits of Portfolio and History Features

- **Comprehensive Monitoring**: Always know the state of your accounts and their risk levels at a glance.
- **Streamlined Actions**: Perform a series of actions across multiple accounts seamlessly from the Portfolio page, saving time compared to switching accounts individually in the main margin account panel.
- **Detailed Insights**: Review the specifics of every transaction and liquidation for better understanding and decision-making.
- **Actionable Data**: Use historical records to optimize your borrowing strategies or analyze past decisions effectively.

This enhanced functionality makes managing multiple accounts more efficient and user-friendly, particularly for advanced users.

## Managing Positions

The Portfolio page is tailored for advanced users, enabling them to efficiently perform a series of actions across multiple margin accounts without needing to switch back and forth between the main interface. This streamlined workflow significantly enhances the user experience, especially for those managing complex portfolios or executing multiple strategies.

![](/img/position-2.png)

**View Positions**: Clicking this button opens a detailed view of all the positions within the selected margin account.

- **Asset Overview**: Lists all assets in the account with columns for:
    - **Deposited Amount**: Total assets deposited. The total value of assets deposited into the margin account. For clarity, the USD equivalent is displayed alongside each asset's amount, providing users with an intuitive understanding of their portfolio's value.
    - **Borrowed Amount**: Outstanding debts in each asset.
    - **Contribution to Collateral**: Displays the positive or negative impact of each asset on the account’s collateral.
- **Action Buttons**: Intuitively designed for each asset, allowing users to:
    - **Deposit** more.
    - **Borrow**, **Repay**, or **Withdraw** as applicable.
- **Filter for Active Positions**: Easily filter out zero-balance assets to focus only on active positions.



## Navigating the History Tab for Transaction and Liquidation Records

The **History** tab offers users a comprehensive log of all interactions with the protocol, including deposits, withdrawals, borrows, and liquidations.

- **Navigation from the Margin Account Panel:** Users can access the **History** tab for a specific margin account by selecting the account from the **Margin Account Panel** at the top of the interface. This panel allows users to seamlessly switch between accounts and access their corresponding activity logs.
- **Navigation from the Portfolio Dashboard:** Users can directly access the **History** page for any margin account by clicking the **View History** button on the **Portfolio Dashboard**. This quick-access feature streamlines the process of reviewing account activity.
- **Toggle Option for Individual Accounts:** Alternatively, users can still toggle between the **Positions** and **History** pages for a specific margin account by using the tabs within the account view.
- Navigation from the Margin account panel

### Transaction Records

- **Activity Logs**: Chronological entries for every action taken in the account.
    - **Types of Transactions**:
        - Deposits
        - Withdrawals
        - Borrowing and Repayments
        - Liquidations
        - Special rewards
    - **Details Displayed**:
        - **Amount** and **Fees** associated with the transaction.
        - **Timestamp**: Date and time of each event.
        - **Transaction Link**: Direct access to blockchain explorer for transparency.

## Immediate Alerts

- **Post-Liquidation Modal**: Once a liquidation event is complete (usually within a few seconds), users receive a notification in the form of a modal. This provides them with the ability to navigate directly to the History tab to review detailed insights, including what triggered the liquidation and how the event unfolded.
- **Persistent Alerts**: If users are not online during the liquidation event, the same modal will appear the next time they connect their wallet. This ensures that users are informed about liquidation events for any of their margin accounts, even if multiple accounts are affected or a single account is liquidated multiple times.

These alerts ensure users remain fully informed about their account status, enhancing transparency and enabling prompt follow-up actions.

![](/img/portfolio-7.png)
