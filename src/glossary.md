---
title: "Glossary"
description: "Glossary"
sidebar_label: "Glossary"
sidebar_position: 9
---

## **A**

### **(Margin) Account**

A margin account where users deposit assets, borrow funds, engage in leverage trading, and interface with other DeFi protocols via adapters, such as swapping tokens held in the account through Jupiter.

Users may open multiple isolated margin accounts under a single wallet to segment risk and separate strategies. Each account is ring-fenced, meaning collateral and debt are entirely independent—a liquidation in one account does not impact others. This ensures better risk management and strategic flexibility for users.

### **Account Overview**

A section in Glow Finance that displays key financial metrics of a user's margin account in real-time. This helps users monitor deposits, borrows, balances, and collateral contributions.

**Deposited**

- The amount of a given asset currently deposited in Glow Finance.
- This balance earns deposit APY and can be used as collateral for borrowing.

**Borrowed**

- The amount of an asset borrowed against the user’s deposited collateral.
- This amount accrues borrow interest (APY) until repaid.

**Net Balance**

- Represents the difference between deposited and borrowed amounts for a given asset.
- Useful for tracking overall holdings, but not a direct risk indicator for liquidation.
- Does not account for collateral weight or Health Level, meaning it’s not the best metric to assess borrowing risk.

**Contribution to Collateral**

- The true measure of margin health—shows how much of your deposits are securing borrow positions.
- A negative value means collateral is in use; if it reaches zero, liquidation is imminent.
- Unlike Net Balance, Contribution to Collateral directly impacts your Health Level and borrowing power.

Key Takeaway:

- **Net Balance ≠ Risk Indicator** – It only shows deposits vs. borrows.
- **Contribution to Collateral = Risk & Liquidation Metric** – The closer it gets to zero, the **higher your liquidation risk**.
- **Monitor Contribution to Collateral, not just Net Balance**, to stay safe and optimize your borrowing strategies.

### **Account Leverage**

The ratio of total assets to equity in a margin account, indicating the level of borrowing relative to the user's funds.

**Formula**: $ \frac{\text{Assets}}{\text{Equity}}$

### **Adapters**

An adapter is a program that connects Glow’s margin accounts with external DeFi protocols (e.g., swap aggregators like Jupiter or AMMs like Orca) on Solana, enabling users to interact with other protocols directly from their Glow account.

Adapters provide a standardized way for Glow to integrate and transact using margin account funds with various DeFi services, extending functionality without requiring users to leave the platform.

### **Assets**

The USD value of all tokens and positions owned in a margin account, including deposits and holdings.

---

## **B**

### **Borrowing**

The act of taking out a loan using assets as collateral, commonly used in leverage swaps and margin trading.

Glow’s Implementation: Users can borrow assets through Margin Pools, using deposited collateral in their Margin Accounts.

### **Borrow Interest Rate**

The interest paid by borrowers on borrowed assets, determined dynamically based on the utilization rate of the margin pool.

Example: A user borrows USDC from the pool, and the borrow rate increases as utilization rises.

### **Borrow Limit**

The maximum amount of an asset a user can borrow, determined by market conditions, collateral deposited, and risk parameters.

- Borrow Limits help manage protocol stability by ensuring loans remain sufficiently collateralized.
- Users can view their Borrow Limit in the Market Info section of the asset details page.
- Initially, borrow limits will be set conservatively to ensure user safety and protect against excessive leverage.
- Over time, these limits will be gradually increased, especially in the early stages, as liquidity grows and risk parameters are refined.

---

## **C**

### **Capital Efficiency**

The ability to maximize asset utilization while minimizing idle liquidity.

Glow’s Solution: Through Margin Accounts, Pooled Lending, and Leverage Swaps, Glow optimizes capital deployment and borrowing strategies.

### **Claim(s)**

A synonym for liabilities or debts owed in a margin account.

### **Collateral**

Assets deposited into a margin account that secure loans or leveraged positions.

**Usage in Glow**:

- A deposited asset contributes “collateral” which a user may use to borrow based off the value of that asset.
- Directly influences Health Level and risk of liquidation.
- See also [undercollateralized](/glossary#undercollateralized)

### **Collateral Values**

Collateral values are key risk indicators that determine Health Level and borrowing power in Glow Finance. These values impact a user’s ability to borrow, maintain leverage, and avoid liquidation. The following three metrics are critical to understanding Health Level and should be monitored closely to manage risk effectively:

**1. Collateral Weight**

The risk-adjusted value of an asset when used as collateral. Higher-risk assets have lower collateral weight, meaning they provide less borrowing power per unit deposited.

**2. Required Collateral**

The minimum amount of collateral needed to maintain open borrow positions. If Health Level drops too low, liquidation may occur.

**3. Effective Collateral**

The risk-adjusted collateral amount, factoring in collateral weight and borrowed positions. This value determines how much additional borrowing power remains before reaching liquidation risk.

🔗 **See also**: [Health Level](/glossary#health-level)

### **Collateral Weight**

A multiplier assigned to each asset that adjusts its value when calculating effective collateral, based on its volatility and liquidity.

Example:

- USDC (Stablecoin) → Collateral Weight = 1.0
- SOL (Volatile asset) → Collateral Weight = 0.7

### **Composability**

The ability of different DeFi protocols to interact seamlessly, enabling complex financial strategies.

Glow’s Implementation: Uses Adapters to integrate with Solana’s DeFi ecosystem, expanding liquidity and interoperability.

---

## **D**

### **Debt**

The value of the loan that is owed or due to the protocol.

### **Deposit**

The act of transferring assets into a Margin Account, at which point they begin earning interest from lending.

Impact in Glow: Deposits contribute to the user’s Effective Collateral and can be used for borrowing or earning interest.

### **Deposit Limit**

The maximum amount of a specific asset that can be deposited into a Glow lending pool at any given time.

- This limit helps maintain balanced liquidity across all pools.
- Users can view the Deposit Limit in the Market Info section when selecting an asset in the app.
- Initially, limits will be set conservatively for user safety, but they will increase over time based on liquidity needs and risk assessments.
- Early-stage adjustments will be made quickly to accommodate growing demand while maintaining protocol stability.

### **Deficit**

A situation where a margin account’s collateral value drops below required collateral, leading to potential liquidation.

---

## **E**

### **Effective Collateral**

The adjusted value of assets available for borrowing or leveraging, determined by the collateral weight of each asset.

**Formula**:

$Effective Collateral = \sum (\text{Asset Value} \times \text{Collateral Weight})$

### **Equity**

The difference between total assets and total liabilities.

**Formula**: $Equity = \text{Assets} - \text{Liabilities}$

### **External AMMs & CLOB Integration**

The future capability of Glow to integrate leverage swaps via Adapters with external AMMs (e.g., Orca, Raydium) and CLOBs (Central Limit Order Books, e.g., Phoenix Dex) for optimized trading strategies.

---

## **G**

### **glowSOL**

A liquid restaking token (LRT) that represents staked SOL assets via Solayer, allowing users to retain liquidity while earning staking yield. See [Restaking](/glossary#restaking).

**glowSOL Use Cases**:

- Can be used as collateral for borrowing.
- Tradable within Glow’s Leverage Swaps and Swaps.
- Earns Solayer and Glow Points as part of Glow’s incentive programs.

---

## **H**

### **Health Level**

A risk metric representing the ratio of available collateral to required collateral in a Margin Account. It provides an intuitive way to assess account risk, and users should understand that collateral values, including collateral weight, required collateral factor, and available collateral, directly impact this metric.

**Thresholds:**

- **100%**: No borrowing, fully collateralized.
- **Below 20%**: High risk, user should manage exposure.
- **5% Warning Level**: Liquidation warning banner issued.
- **0%**: Liquidation occurs.

🔗 **See also**: [Collateral Values](/glossary#collateral-values)

---

## I

### **Interest Rate Curve**

The Interest Rate Curve in Glow Finance is designed to optimize the experience for both borrowers and lenders by dynamically adjusting rates based on utilization rate.

- Borrowers benefit from competitive rates at normal utilization levels.
- Depositors are rewarded with sustainable yields that scale with demand.
- At high utilization, the curve steepens to attract new deposits and prevent liquidity shortages.

This model helps maintain market stability and ensures that Glow’s lending pools remain efficient and responsive to changing demand.

🔗 **See also**: [Utilization Rate](/glossary#utilization-rate)

---

## **L**

### **Leverage**

The ability to borrow additional assets to increase market exposure beyond the user’s initial deposit.

### **Liquid Restaking**

A mechanism that enables users to stake their assets to earn yield from multiple sources while retaining liquidity, allowing the staked capital to be used in other DeFi applications.

### **Liquidation**

The automatic process of selling part of a user's collateral when Health Level reaches 0%, ensuring that borrowed funds are repaid to prevent insolvency.

### **Liquidator**

Glow operates a Liquidator, a system that monitors accounts and executes liquidations to protect the protocol and users from bad debt.

---

## **M**

### **Margin Account**

A collateralized account where users deposit assets to borrow, lend, and trade using leverage.

### **Margin Pool**

Liquidity reserves where users deposit assets, and borrowers access liquidity.

Dynamic Interest Rates: Determined by utilization rate—higher utilization leads to higher deposit and borrow rates.

### **Max Leverage**

The highest possible leverage a user may take is defined as borrowing the amount of the debt asset that would leave their health level equal to 6.0%.

Note that this also takes into account the [collateral values](/glossary#collateral-values) of the borrowed assets (e.g. a margin account is able to borrow more of an asset that has a higher *collateral weight,* since the borrowed asset will also counts towards account collateral)

---

## **P**

### **Pooled Lending**

A lending system where deposited assets are lent to multiple borrowers, generating interest based on utilization rates. For more info check the **Pool lending(update link later)** article.

---

## **R**

### **Restaking**

The process of staking an already staked asset to earn additional yield and rewards. In Glow, this refers to staking glowSOL into Solayer and delegating it to an AVS (Actively Validated Service) to compound yield and earn additional incentives.

### **Recipes**

A structured, automated strategy that allows users to deposit a specific token and seamlessly execute complex DeFi actions using Glow’s products and adapters. Recipes guide users step-by-step through processes such as leveraging, staking, or yield optimization, simplifying interactions with multiple protocols.

You can think about it as a pre-set strategy that helps users deposit a token and automatically complete multiple DeFi steps in one go. Recipes make it easy to do things like borrowing, swapping, or staking without manual transactions—Glow handles the process for you.

**Examples**:

- **Leveraged SOL Restaking** → Borrow SOL, convert to **glowSOL**, and earn staking rewards.
- **Stablecoin Arbitrage** → Borrow a stablecoin (e.g., PYUSD) at a lower borrow rate than the deposit rate of another stablecoin (e.g., USDC) to earn a yield difference. This strategy takes advantage of interest rate discrepancies between lending pools.

### **Required Collateral**

The minimum collateral value required to maintain borrowed positions and avoid liquidation.

### **RPC (Remote Procedure Call)**

An RPC (Remote Procedure Call) allows the Glow Finance application to communicate with the Solana blockchain by sending requests to a node.

- Users can set a Custom RPC URL to improve performance or use a private node.
- This setting can be changed in the Settings menu by clicking on the wallet connection in the upper right part of the screen.

---

## **U**

### **Utilization Rate**

The Utilization Rate represents the percentage of a lending pool’s liquidity that is currently borrowed. It directly impacts the borrow and deposit rates, ensuring dynamic adjustments based on supply and demand.

As utilization increases:

- Borrow rates rise, discouraging excessive borrowing and protecting pool liquidity.
- Deposit rates increase, incentivizing lenders to provide more capital.

Conversely, at low utilization:

- Borrow rates stay low, making borrowing more attractive.
- Deposit rates decrease, balancing yield with capital efficiency.

The interest rate curve is carefully designed to optimize the experience of both borrowers and lenders. This ensures that borrowers can access liquidity at competitive rates, while depositors are rewarded with sustainable yields. This dynamic model prevents liquidity shortages and helps stabilize the lending ecosystem.

**Formula:**

$Utilization\ Rate = \frac{\text{Total Borrowed}}{\text{Total Deposited}}$

This system ensures efficient capital allocation, maintains liquidity, and allows Glow Finance to function as a resilient and adaptive lending protocol.

🔗 **See also**: [Interest Rate Curve](/glossary#interest-rate-curve)  

### **Undercollateralized**

Unlike most DeFi protocols that require full overcollateralization, Glow Finance enables undercollateralized borrowing, allowing users to borrow more than their available collateral.

- Assets aren’t locked up unnecessarily, enabling more productive use of funds.  
- Users can borrow against future yield and strategic positions without excessive collateral.  
- Facilitates leveraged staking, recursive borrowing, and restaking strategies.
