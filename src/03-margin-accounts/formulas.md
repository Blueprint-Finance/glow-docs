---
title: "Margin Accounting Formulas"
description: "Core formulas for margin accounts: equity, collateral weights, required collateral, leverage, and risk metrics."
sidebar_label: "Formulas"
sidebar_position: 10
keywords:
  - formulas
  - collateral weight
  - required collateral
  - leverage
  - risk metrics
---

A **margin account** keeps track of assets and liabilities that the user has accrued through their interaction with integrated products. It is through the **margin account** that a user's **deposits are used as collateral**, allowing them to borrow assets or take other risk positions.

Margin accounts also serve a **critical role in risk management**, ensuring **Glow Finance remains solvent** by triggering liquidations when an account becomes unhealthy.

### **Key Properties of Margin Accounts**

- Users **may open multiple margin accounts** under a single wallet.
- **Accounts are isolated**: Liquidation in one margin account does **not** impact other accounts.
- Users can **switch between accounts** seamlessly and transfer assets between them.

A **particular user**, identified by a **public key**, may have **multiple margin accounts**. These accounts can be **named for easy reference**. The app allows **seamless switching** between margin accounts and for **transferring assets** between them.

From a **risk perspective**, all margin accounts are **completely isolated**. **Liquidations only affect a particular unhealthy account**, even if the user being liquidated **also owns other margin accounts**.

## **Accounting Overview**

From an **accounting perspective**, a **margin account** can be viewed as a **list of assets** and a **list of liabilities**. Margin accounting **proceeds in terms of the USD value** of these positions.

### **Assets and Liabilities**

The **assets** and **liabilities** of the margin account are given by:

$ A = \sum\_{a \in \mathcal{A}} P_a$

$ L = \sum\_{i \in \mathcal{L}} P_i$

where:

- $ P_a \geq 0$ represents the **USD value of assets**.
- $ P_i \geq 0$ represents the **USD value of liabilities**.

### **Equity Calculation**

The **equity**, also referred to as the **account value**, is calculated as:

$Equity = A - L$

This represents the **net value** of the account after subtracting liabilities from assets.

### **Weighted Collateral Calculation**

A margin account is required to have a **minimum amount of equity** in order to be considered **healthy**. The **amount depends on the composition** of assets and liabilities.

**Collateral weights** $w_a$ determine the **contribution of assets** to **weighted collateral**, which is given by:

$C_w = \sum_{i \in \mathcal{S}} w_i P_i$

where:

- ${S}$ = set of assets in the account
- $w_i$ is the **collateral weight** assigned to each asset (bounded between 0 and 1).

### **Required Collateral Calculation**

Borrowing creates liabilities that require **collateral backing**. The **required collateral $C_r$** is determined by:

$C_r = \sum_{i \in L} \frac{P_i}{f_i}$

where:

- $f_i$ is the **required collateral factor**, which varies by asset and risk model.

A margin account is considered **healthy** if the weighted collateral exceeds the required collateral plus liabilities:

$C_w - L \geq C_r$

Your weighted collateral above your borrow amount must still cover the required collateral buffer. If this condition is **not met**, the account is considered **unhealthy** and may be **subject to liquidation**.

## **Leverage and Risk Metrics**

### **Leverage Calculation**

Leverage is a measure of how much an account is **borrowing relative to its equity**. It is defined as:

$ \text{leverage} = \frac{A}{A - L}$

This indicates the **multiplier effect** of borrowing on the account’s exposure.

### **Adjusted Leverage**

Adjusted leverage accounts for **collateral weight and required collateral**:

$ \text{adjusted leverage} = \frac{C_w}{C_w - (L + C_r)}$

- Adjusted leverage is **zero** when $C_w$ is **zero** and there are no liabilities.
- Adjusted leverage **increases** as an account takes on **more debt relative to collateral**.
- If $ C_w \leq L + C_r$, adjusted leverage approaches **infinity**, meaning the account is at the **liquidation threshold**.

## **Account Risk Indicator**

The **account risk indicator** ( $ \rho$) helps determine how close an account is to liquidation:

$ \rho = \frac{L + C_r}{C_w}$

- If $ \rho = 1$, the account **is at the liquidation threshold**.
- If $ \rho > 1$, the account is **over-leveraged** and at **high risk**.
- The **app prevents users** from taking actions that would **immediately liquidate** their accounts by enforcing **setup checks**.

## **Collateral-Weighted Return**

The **risk indicator** is linked to **collateral-weighted return**:

R*actual = $ \sum*{a \in A} \frac{w_a P_a}{K_w} r_c$

where $ r_c$ is the **return on collateral asset.**

The **return required to bring an account to liquidation** is given by:

R_threshold = $\rho - 1$

For example, if $ \rho = 0.90$, then a **10% decrease** in collateral value will **trigger liquidation**.

## **Available Collateral Calculation**

The **excess collateral available** before liquidation is given by:

$ \text{Available Collateral} = (C_w - L) - C_r$

This represents the **buffer** before liquidation occurs.

**Liquidation occurs when available collateral reaches zero.**

For further details, refer to the [Liquidation](../03-margin-accounts/liquidation.md) page.
