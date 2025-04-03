---
title: "Optimized Lending Pool Mechanics"
description: "Optimized Lending Pool Mechanics "
sidebar_label: "Optimized Lending Pool Mechanics"
sidebar_position: 9
---

The interest rate in Glow Finance’s lending pools is **dynamic**, adjusting in real-time based on the **utilization rate**—the percentage of supplied assets currently being borrowed. This mechanism ensures that rates naturally respond to market demand, balancing incentives for both borrowers and lenders.

Glow Finance’s lending pool design was carefully structured to optimize the experience for both borrowers and lenders by improving upon traditional lending models.

### 1. Three-Segment Interest Rate Model

Most DeFi lending protocols use a **two-segment** interest rate model, where rates increase linearly based on **utilization**. Glow Finance improves upon this by introducing a **third segment** that steepens dramatically at **high utilization rates**.

| **Utilization Range** | **Interest Rate Effect** | **Purpose** |
| --- | --- | --- |
| **0% - 85%** | Starting interest rate: **1%** | Encourages stable borrowing and lending activity |
| **85% - 95%** | Interest rate increases to **15%** | Balances supply and demand as liquidity tightens |
| **95% - 100%** | Interest rate spikes to **150%**, maxing out at **200%** | Strongly incentivizes new deposits and borrower repayments as the pool nears full utilization |

:::note
Due to [Glow’s 95% utilization cap](../03-margin-accounts/integration-with-margin-pools.md#key-features), users will not be able to borrow in a way that pushes a pool above 95% utilization. The steep final segment (95%–100%) still exists in the interest rate curve to ensure the system reacts appropriately as utilization approaches the cap, serving as an incentive for additional deposits and borrower repayments.
:::

**Key Parameter Values:**

- **First optimal utilization point**: **85%**
- **Second optimal utilization point**: **95%**
- **Starting interest rate**: **1%**
- **Interest rate at first optimal point**: **15%**
- **Interest rate at second optimal point**: **150%**
- **Maximum interest rate**: **200%**

**Why does this matter?**

- The **first two segments** ensure a **predictable and sustainable** borrowing/lending experience.
- The third segment helps maintain healthy pool liquidity by offering extremely high rates to incentivize new deposits and borrower repayments.

### 2. Tighter Interest Rate Spreads for Fairer Lending

Interest rate **spread** refers to the **difference between lending and borrowing rates** for a given asset. Traditional DeFi platforms often have **wide spreads**, meaning borrowers **pay more**, while lenders **earn less**.

**How Glow improves this:**

- **Higher utilization thresholds** → Glow pools maximize capital efficiency.
- **Tighter spreads** → Lenders **earn more**, borrowers **pay less**.
- **Dynamic rate adjustments** → Rates adjust smoothly to market conditions, ensuring a competitive and predictable experience.

### 3. Addressing Liquidity Risk with Adaptive Incentives

As utilization nears 100%, liquidity risk increases—lenders may be temporarily unable to withdraw funds until additional liquidity is added to the pool, as most assets are actively borrowed. This is a common limitation in all pooled lending models (e.g., Aave, Compound, Save).

**Glow’s solution?**

- **Third-segment interest rate spike at high utilization** → Attracts new lenders **instantly** when liquidity is low.
- **Real-time adjustments** → Borrow rates increase dynamically to slow excessive borrowing.
- **Flexible capital flow** → Ensures **healthy liquidity cycles** for both depositors and borrowers.

## Why Glow's Lending Model is Superior

Glow Finance’s lending pool mechanics improve upon legacy DeFi models by:

- Reducing the spreads between borrow and lend rates at any given utilization → Fairer rates for both lenders and borrowers.
- Optimizing capital efficiency → Higher utilization thresholds before rates spike.
- Ensuring liquidity safety → Adaptive interest rate adjustments when utilization is high.

Glow Finance’s lending pools are designed to optimize both borrower and lender experiences.

- Borrowers pay less in interest compared to traditional DeFi lending models.
- Lenders earn more due to Glow’s higher utilization efficiency.
- Capital efficiency is maximized, making Glow one of the most optimized lending models in DeFi.

| **Feature** | **Traditional Lending Models** | **Glow Finance** |
| --- | --- | --- |
| Interest Rate Segments | **Two segments** | **Three-segment curve** |
| Liquidity Risk Management | High **risk at 90%+ utilization** | **Adaptive rate spikes** attract new deposits |
| Efficiency at High Utilization | **Less efficient** due to steep rate increases too soon | **Smoother borrowing experience** with delayed rate spikes |
| Interest Rate Spread | **Wider (lenders earn less, borrowers pay more)** | **Tighter (lenders earn more, borrowers pay less)** |

**Coming Soon**: More details on Glow's **borrowing mechanics, interest rate optimizations, and capital efficiency models**. Stay tuned!
