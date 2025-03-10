---
title: "Margin Accounting Formulas"
description: "Formulas"
sidebar_label: "Formulas"
sidebar_position: 10
---

A **margin account** is a **ledger within a ledger**, keeping track of assets and liabilities that the user has accrued through their interaction with integrated products. It is through the **margin account** that a user's **deposits are used as collateral**, allowing them to borrow assets or take other risk positions.

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
The **assets (A)** and **liabilities (L)** of the margin account are given by:

$ A = \sum_{a \in A} P_a$

$ L = \sum_{i \in L} P_i$

where:
- $ P_a \geq 0$ represents the **USD value of assets**.
- $ P_i \geq 0$ represents the **USD value of liabilities**.



### **Equity Calculation**
The **equity (E)**, also referred to as the **account value**, is calculated as:

E = A - L


This represents the **net value** of the account after subtracting liabilities from assets.



### **Weighted Collateral Calculation**
A margin account is required to have a **minimum amount of equity** in order to be considered **healthy**. The **amount depends on the composition** of assets and liabilities.

**Collateral weights** $ w_a$ determine the **contribution of assets** to **weighted collateral**, which is given by:

$ K_w = \sum_{a \in A} w_a P_a$

where:
- $ w_a$ is the **collateral weight** assigned to each asset.



### **Required Collateral Calculation**
Borrowing creates liabilities that require **collateral backing**. The **required collateral $ K_r$** is determined by:

$K_r = \sum_{i \in L} \frac{P_i}{f_i}$

where:
- $ f_i$ is the **required collateral factor**, which varies by asset and risk model.

A margin account is considered **healthy** if the weighted collateral exceeds the required collateral plus liabilities:

$ K_w - L \geq K_r$

If this condition is **not met**, the account is considered **unhealthy** and may be **subject to liquidation**.



## **Leverage and Risk Metrics**

### **Leverage Calculation**
Leverage is a measure of how much an account is **borrowing relative to its equity**. It is defined as:

$ \text{leverage} = \frac{A}{A - L}$

This indicates the **multiplier effect** of borrowing on the account’s exposure.



### **Adjusted Leverage**
Adjusted leverage accounts for **collateral weight and required collateral**:

$ \text{adjusted leverage} = \frac{K_w}{K_w - (L + K_r)}$

- Adjusted leverage is **zero** when $ K_w$ is **zero** and there are no liabilities.
- Adjusted leverage **increases** as an account takes on **more debt relative to collateral**.
- If $ K_w \leq L + K_r$, adjusted leverage approaches **infinity**, meaning the account is at the **liquidation threshold**.



## **Account Risk Indicator**
The **account risk indicator** ($ \rho$) helps determine how close an account is to liquidation:

$ \rho = \frac{L + K_r}{K_w}$

- If $ \rho = 1$, the account **is at the liquidation threshold**.
- If $ \rho > 1$, the account is **over-leveraged** and at **high risk**.
- The **app prevents users** from taking actions that would **immediately liquidate** their accounts by enforcing **setup checks**.



## **Collateral-Weighted Return**
The **risk indicator** is linked to **collateral-weighted return** ($ R$):

R = $ \sum_{a \in A} \frac{w_a P_a}{K_w} r_a$

where $ r_a$ is the **return on collateral asset $ a$**.

The **return required to bring an account to liquidation** is given by:

R = $\rho - 1 $

For example, if $ \rho = 0.90$, then a **10\% decrease** in collateral value will **trigger liquidation**.



## **Available Collateral Calculation**
The **excess collateral available** before liquidation is given by:

$ \text{available collateral} = (K_w - L) - K_r$

This represents the **buffer** before liquidation occurs.

**Liquidation occurs when available collateral reaches zero.**

For further details, refer to the [Liquidation](../03-margin-accounts/liquidation.md) page.
