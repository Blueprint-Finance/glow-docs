---
title: "Liquidation"
description: "Liquidation"
sidebar_label: "Liquidation"
sidebar_position: 6
---

Glow Finance integrates sophisticated tools to safeguard user portfolios from bad debt while maintaining the integrity of the lending ecosystem. Below is an in-depth explanation of how liquidation operates within the platform.

## Triggering Liquidation

Liquidation is initiated when the **Health Level** of a margin account drops to **0.0%**. This critical point occurs when the account’s **Effective Collateral** becomes insufficient to cover the **Required Collateral** for the borrowed positions. Once triggered:

- Glow Finance liquidates a portion of the collateral.
- The liquidated amount covers the outstanding loan and a 5% liquidation fee.

## Liquidation Process

- **Asset Conversion**: Collateral assets are converted into the borrowed asset to settle the debt.
- **Fee Deduction**: Any fees associated with the liquidation process (e.g., platform fees, gas fees) are subtracted.
- **Residual Balance**: Any remaining collateral, post-debt settlement, is returned to the user.

This ensures systemic stability and safety for all users by preventing bad debt accumulation in the protocol.

## Early Alerts and Notifications

Glow Finance provides timely alerts to users in the web application, enabling them to act before liquidation becomes inevitable.

## Health Level Monitoring

- **5.0% Threshold Warning**: The banner is triggered when the Health Level of **any margin account** associated with the currently connected wallet drops below 5.0%.
    - **Health Alert Banner:** it is displayed globally throughout the app, regardless of the page or section the user is navigating. It ensures users are promptly notified when the Health Level of any margin account associated with their connected wallet drops below 5.0%

![](/img/liq-1.png)

    - **Health Alert Modal** Summarizes all at-risk accounts, helping users prioritize which accounts require immediate action.

![](/img/liq-2.png)


## Liquidation Notification

**Post-Liquidation Modal** When liquidation occurs, users are notified via a dedicated modal.

- **Account(s) Liquidated:** A detailed summary of the affected accounts. The modal displays the accounts liquidated since the last time the user viewed and acknowledged this information. Once the **ACK LIQUIDATIONS** button is clicked, the app considers the shown liquidations acknowledged.

![](/img/liq-3.png)

- **Asset Breakdown:** When a user clicks on one of the liquidated account rows in the initial modal, they are directed to a detailed view modal. This second modal provides a comprehensive breakdown of the liquidation, including each subswap involved in the process, liquidation fees, timestamps, and a link to the corresponding blockchain transaction on SolScan’s block explorer for full transparency.

![](/img/liq-4.png)

![](/img/liq-5.png)

- **Historical Records**: Users can access liquidation records through the **Portfolio History page** for in-depth review and understanding of past liquidation events.

![](/img/liq-6.png)

## Managing Risk with Health Levels

Glow Finance equips users with tools to manage their portfolio risk effectively by monitoring and improving their Health Level. A higher Health Level indicates a more stable account, reducing the likelihood of liquidation. For users seeking detailed guidance on strategies to maintain a healthy account, including depositing collateral, repaying borrowed assets, or adjusting leverage. For more information, you can check the [Health Level](../03-margin-accounts/health-level.md) article.
