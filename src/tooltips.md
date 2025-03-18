---
title: "Tooltips"
description: "Tooltips"
sidebar_label: "Tooltips"
sidebar_position: 9
---

Tooltips are small informational pop-ups that appear when users hover over an element in the UI. They provide contextual insights, helping users understand financial metrics, lending and borrowing mechanics, leverage swaps, and other core functionalities of Glow Finance.

Each tooltip is strategically placed to assist users in making informed decisions while interacting with the Glow application.

## Tooltip Categories

### 1. Markets

| **Tooltip Location** | **Tooltip Text** |
| --- | --- |
| **Global Market Size** | The total market capitalization of all assets within Glow Finance. |
| **Total Deposited** | The sum of all deposited assets available for lending. |
| **Total Borrowed** | The total value of assets currently borrowed across all pools. |
| **My Deposit** | The amount of tokens currently deposited. |
| **Active Borrow** | This label is displayed for assets where a debt exists. |
| **Deposit APY** | The current interest rate earned by depositors. |
| **Borrow APY** | The current interest rate paid by borrowers. |
| **Asset** | The asset that each pool is composed of. |
| **Current Price** | The real-time market price of the selected asset. |
| **Borrowed** | The amount of tokens currently borrowed, and the current borrow limit for this asset pool. |
| **Deposited** | The amount of tokens currently deposited, and the current deposit limit for this asset pool. |
| **PYUSD Incentive** | A bonus APY reward applied when depositing or borrowing PYUSD. |

### 2. Assets

| **Tooltip** | **Description** |
| --- | --- |
| **Assets** | The USD value of all held tokens. |
| **Liabilities** | The USD value of debt positions. |
| **Current Price** | The real-time market price of the selected asset. |
| **Deposit Limit** | The maximum amount of this asset that can be deposited in Glow Finance. |
| **Borrow Limit** | The maximum borrowable amount of the asset based on market conditions. |
| **Utilization** | The percentage of the asset’s liquidity that is currently borrowed. |
| **Collateral Weight** | The risk-adjusted multiplier for an asset when used as collateral. |
| **Required Collateral Factor** | The minimum collateral percentage required to borrow an asset safely. |
| **Token Address** | The on-chain address of the asset, useful for external integrations. |

### 3. Margin Accounts

| **Tooltip** | **Description** |
| --- | --- |
| **Health Level** | The current account health percentage. If it drops to 0.0%, liquidation occurs. |
| **Account Leverage** | The multiple of borrowed funds relative to the user's deposited collateral. |
| **Available Collateral** | The portion of assets that can be used as collateral for new borrowings (effective collateral - required collateral). When available collateral reaches $0, liquidation occurs. |
| **Available Balance** | The USD value of equity in this margin account, equal to (assets - liabilities). |
| **Assets** | The USD value of tokens and positions that you own in your margin account. |
| **Liabilites** | The USD value of tokens and positions that you owe in your margin account. |
| **Available Collateral** | The portion of deposited assets that can be used as collateral for new borrowings. Also: The difference between your effective collateral and required collateral, quoted in USD.  When available collateral reaches zero, your margin account is subject to liquidation.

 |
| **Effective Collateral** | The risk-adjusted collateral amount, factoring in asset weights. |
| **Required Collateral** | The minimum amount of collateral needed to maintain open borrow positions. |

### 4. Deposit, Borrow, Withdraw, and Repay

| **Tooltip** | **Description** |
| --- | --- |
| **Deposit Asset** | The action of supplying assets to earn yield and increase borrowing power. |
| **Withdraw Asset** | The ability to remove deposited assets, provided they are not tied to active positions. |
| **Borrow Asset** | Taking a loan against deposited collateral, increasing market exposure. |
| **Repay Debt** | Settling borrowed positions to reduce liability and improve health level. |
| **Promotional Fee Waiver** | For a limited time, borrowing-related swaps are free of fees. |

### 5. Asset Details Page

| **Tooltip Location** | **Tooltip Text** |
| --- | --- |
| **Current Price** | The real-time market price of this asset. |
| **Deposit APY** | The current interest rate earned by depositors. |
| **Borrow APY** | The current interest rate paid by borrowers. |
| **Deposited** | The amount of tokens currently deposited (in white), the USD value, and the change in the deposited amount/value if the current transaction being set up is submitted. |
| **Borrowed** | The amount of tokens currently borrowed (in white), the USD value, and the change in the borrowed amount/value if the current transaction being set up is submitted. |
| **Net Balance** | The amount of tokens deposited minus the amount of tokens borrowed, the value, and the change from the current transaction. |
| **Contribution to Collateral** | The net effect of the current tokens on the effective collateral of the margin account, the value, and the change from the current transaction. |
| **Deposit Limit** | The maximum depositable amount for this asset across the protocol. |
| **Borrow Limit** | The maximum borrowable amount for this asset across the protocol. |
| **Utilization** | The percentage of the deposited assets that are currently borrowed. |
| **Collateral Weight** | The risk-adjusted multiplier for an asset when used as collateral. |
| **Token Address** | The on-chain address of the asset, useful for external integrations. |
