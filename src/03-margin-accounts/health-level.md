---
title: "Health Level"
description: "Health Level"
sidebar_label: "Health Level"
sidebar_position: 5
---


The Health Level is a crucial indicator of a margin account's risk exposure. It represents the amount of effective collateral remaining proportionally to the required collateral, normalized to a 100% scale, providing users with a clear assessment of how close their account is to liquidation.

The **Health Level (HL)** is calculated based on **required collateral**, **weighted collateral**, and **liabilities.** If the **weighted collateral > 0**:

$HL = 100 - \left( \frac{\text{requiredCollateral} + \text{liabilities}}{\text{weightedCollateral}} \right) \times 100$

- `requiredCollateral`: The minimum amount of collateral required to support the borrow position.
- `liabilities`: The total outstanding debt of the user.
- `weightedCollateral`: The effective collateral after applying risk-adjusted multipliers.

### Special Cases

- **When the required collateral is equal to the liabilities for a margin account:**  $HL = 0$  **and that account can be liquidated**
(This means the user has debt but no effective collateral to support it.)
- **If there is no debt (`requiredCollateral + liabilities = 0`)**: $HL = 100$
(Whenever a margin account has no debt, the health level is always at the maximum of 100.0%)

## Health Alerts:

The Health Level provides a benchmark for users to monitor their account risk, and the web application also includes visual cues and warnings to encourage proactive management before liquidation occurs.

- **100% Threshold**: When the Health Level is at 100%, it indicates that no debts or borrowing positions are open, and the account has sufficient collateral without any risk of liquidation. This is the ideal state for accounts without leverage.
- **5% Threshold**: At 5%, the account is flagged with a **Health Alert Banner Warning** in the application interface. This serves as an alert to the user that the Health Level is dangerously close to liquidation. While no action is taken by the protocol at this level, the app warns the user to take preemptive steps to avoid liquidation. [Learn more about the health level alert banner](../03-margin-accounts/liquidation.md).
- **0% Threshold**: When the Health Level drops to 0%, the account is subject to liquidation. At this point, the protocol begins the liquidation process to bring the account back to a healthy state by partially liquidating collateral to cover liabilities.
- Additionally, the graphical indicator of the Health Level as displayed in the margin account panel appears in different colors depending on the numerical value:
    - Green when 100.0% ≤ Health Level < 60.0%:

    <img
      src="/img/h-1.png"
      style={{ maxWidth: "150px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
    />

    - Blue when 60.0% ≤ Health Level < 20.0%:

    <img
      src="/img/h-2.png"
      style={{ maxWidth: "150px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
    />

    - Red when 20.0% ≤ Health Level < 0.0%:

    <img
      src="/img/h-3.png"
      style={{ maxWidth: "150px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
    />


## Maintaining a Healthy Account

### 1. Regular Monitoring

- Begin by checking your **Health Level** through the **Margin Account Panel**, which is always accessible at the top of the interface. This panel provides a quick snapshot of the active margin account, displaying crucial metrics like Health Level, Account Leverage, and Available Collateral. Since it follows you across the app, it serves as a consistent reference point as you navigate between pages.
- Additionally, the **Portfolio Dashboard** offers a consolidated view of all your margin accounts, enabling you to monitor the Health Levels of multiple accounts in one place. This is particularly useful if you manage several accounts simultaneously, as it provides an at-a-glance overview of their status.
- Use Glow’s visual indicators—green (safe), blue (signaling a moderate risk but leveraged state), and red (critical)—to understand your risk levels.

![](/img/h-4.png)

### 2. Deposit Additional Collateral

Improve your Health Level by increasing your Effective Collateral — this means depositing extra collateral assets to a margin account can help strengthen and maintain a buffer against liquidation risks.

### 3. Repay Borrowed Amounts

Repaying your debts, even partially, directly improves your Health Level. Navigate to the **Repay** tab within the application to reduce your outstanding liabilities.

- **Partial Repayment Helps**: Even repaying a portion of your debt can improve your Health Level, making it easier to avoid liquidation risks.
- **Future Feature**: In a later release, users will have the option to repay debts directly from their  wallet. For now, ensure you deposit the debt asset into the platform and use the “Repay” functionality to clear your liabilities.

This feature ensures that you can manage your liabilities effectively, with flexibility to improve your account's health incrementally or fully at your convenience.

### 4. Limit Leverage Usage

Avoid over-leveraging to keep your account stable.

## Importance of Health Level

### 1. Risk Assessment

The Health Level helps users track how secure their account is. A higher percentage means the account is in a safe position, while a lower percentage signals potential liquidation risks.

### 2. Proactive Alerts

When the health level of *any* margin account controlled by a wallet is below 5.0%, Glow alerts users via a **Risky Health Level Alert Banner**. This banner is displayed regardless of which margin account is the active account in the application, so that the user is made aware of all of their margin accounts controlled by that wallet that are at.

![](/img/h-5.png)

![](/img/h-6.png)

The app will not allow users to complete transactions that would result in a Health Level below 5.0%. This restriction ensures that users maintain a minimum buffer to avoid immediate liquidation risk. By setting this boundary, Glow prioritizes account stability and helps users manage their positions responsibly.


<img
  src="/img/h-7.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

### 3. Informed Decision-Making

By providing users a clear metric to gauge account health, one can decide more easily whether to adjust their leverage, deposit more collateral, or reduce liabilities.
