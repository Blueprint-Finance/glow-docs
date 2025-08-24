---
title: "Risks and Safety"
description: "Risks and Safety"
sidebar_label: "Risks and Safety"
---

Glow Finance leverages advanced DeFi mechanics to provide leveraged staking, borrowing, and restaking opportunities. While these features offer potential for amplified yields, they also carry inherent risks. This article outlines the key risk categories associated with Glow Finance and provides actionable mitigation strategies for each.

## Audits

All core smart contracts in Glow Finance are periodically [audited by leading security firms](./audits.md). However, even audited contracts carry residual risk.

**Mitigation:** 
Always make sure you’re using the official app URL: [https://app.glowfinance.xyz/](https://app.glowfinance.xyz/), Interacting with lookalike or unofficial sites can put your funds at risk. Bookmark the official app link and double-check it before connecting your wallet.

## Smart Contract Risk

Glow Finance operates through smart contracts that manage critical functions like leverage swaps, liquidation mechanics, and margin account management. Despite comprehensive audits, potential vulnerabilities may exist.

- **Mitigation:**
    - Interact only with verified contract addresses
    - Regularly check for announcements regarding contract upgrades or security patches.
    - Maintain collateral ratios well above liquidation thresholds to minimize potential losses from unexpected contract behavior.

## Liquidity Risk

If liquidity in the pool drops significantly, users may face borrowing or withdrawal restrictions.

- **Scenarios:**
    - [Utilization rates](../glossary#utilization-rate) exceed 95%, capping borrowing capacity to maintain pool integrity.
    - Withdrawals may be delayed if liquidity is temporarily depleted due to high demand.

    **Why This Is Temporary:**

    When utilization spikes, Glow’s dynamic interest rate model raises the borrow APR. This incentivizes new lenders to supply liquidity, helping to restore balance naturally. As a result, high-utilization periods tend to self-correct over time.

- **Mitigation:**
    - Monitor pool utilization metrics before initiating large transactions.
    - Plan deposits and withdrawals strategically to avoid periods of high utilization.
    - Stay informed of protocol updates that may impact liquidity management.

:::tip
Learn more in our [Margin Pools Overview](../src/04-margin-pools/overview.md) and how Glow minimizes this risk using [Optimized Lending Pool Mechanics](../src/04-margin-pools/optimized-lending-pool-mechanics.md).
:::

## Liquidation Risk

Liquidation occurs when the **Health Level** of a margin account drops below zero, indicating that effective collateral is insufficient to cover borrowed assets.

- **Mechanics:**
    - Liquidations are partial by design, aiming to restore account health without fully closing the position.
    - Collateral is first used to repay debt, with remaining assets either returned or further liquidated depending on account health.
- **Mitigation:**
    - Maintain conservative leverage levels, especially during high volatility.
    - Regularly monitor key metrics in the **Account Overview** panel, including Effective Collateral, Required Collateral, and Health Level.
    - Repay debt in response to market fluctuations to avoid cascading liquidations.

### **Leveraged glowSOL Recipe**

If you're using the Leveraged glowSOL Recipe, it's important to understand:

SOL price drops do *not* affect your Health Level or trigger liquidations. This strategy is designed with no SOL market price exposure. Your position health is only impacted by:

- A glowSOL or sSOL depeg (i.e. if glowSOL trades significantly below SOL).
- Prolonged periods where borrow APR exceeds leveraged yield, causing slow Health Level decline. For example: At 2× leverage, if glowSOL earns 6% and your SOL borrow rate is 3%, you break even. But if the borrow rate goes up to 4%, you start losing yield — and over time, your Health Level will go down.

## Strategy-Specific Risks

The **Leveraged glowSOL Recipe** helps users boost their staking rewards by borrowing SOL and restaking it into glowSOL, Glow’s staking token. This strategy carries its own set of risks:

- **Risks:**
    - **Price Depeg Risk:** While SOL price movements do **not** affect Health Level in this recipe, users **can still be liquidated** if the **glowSOL/SOL** or **sSOL/SOL** peg drops significantly. These pegs are normally stable, but extreme or sustained deviation could impact account safety.
    - **Unstaking Delay:** Withdrawing funds from a recipe triggers a **7-day unstaking period**, during which glowSOL is being converted back to SOL and cannot be accessed.

    > ℹ️ Note: Support for instant withdrawals is planned in a future release, once the glowSOL/SOL AMM pool is live.
    >
- **Mitigation:**
    - Monitor the **Unstaking Queue** or set an alarm when in the withdrawal process, to anticipate when assets will become available.
    - Use the **Liquidation Price** metric to assess exposure.
    - Check the **current SOL borrow rate** to see if the recipe is profitable. The strategy is unprofitable if your **leveraged restaking APR** (glowSOL base APR × selected leverage) is **less than** the SOL borrow APR.

## Unstaking Queue Delays

Initiating a glowSOL withdrawal starts a **7-day unstaking queue**, during which the unstaked assets remain illiquid.

- **Risks:**
    - During the queue period, users cannot access unstaked SOL to repay debt or adjust collateral.
    - SOL price changes during the 7-day unstaking queue do not impact your position’s Health Level. However, if glowSOL or its underlying asset sSOL depegs from SOL during that time, your position’s health could decline and lead to liquidation.
- **Mitigation:**
    - When you initiate unstaking, your glowSOL enters a 7-day illiquid period. During this time, it cannot be withdrawn or used in other strategies. You will still be able to manage your position (including borrow and repay actions) while unstaking is in progress — but the unstaking glowSOL itself remains locked until the 7-day queue completes. ****
    - Monitor the unstaking queue directly within the “Manage Recipe” section of the Leveraged glowSOL Recipe. It shows exactly when each unstaking request will complete and when your SOL will become available for withdrawal.
    - Consider initiating unstaking when SOL borrow APR is relatively low or stable, as this reduces the chance of your Health Level declining if interest costs temporarily exceed your leveraged restaking yield during the 7-day queue period. This risk is uncommon — SOL borrow rates tend to revert quickly, and prolonged high-rate periods have historically been rare.
    - You may cancel a pending unstaking request during the 7-day queue if needed. However, this comes with a small cancellation fee. The performance fee (charged in glowSOL) is taken at the moment you initiate withdrawal. If you cancel the withdrawal during the queue, that fee will *not* be refunded. This applies even if the glowSOL is never converted back to SOL.

## Interest Rate Spikes

Borrowing costs in Glow Finance adjust dynamically based on pool utilization, with key utilization thresholds affecting borrowing rates:

- **Regimes:**
    - Less than 85% Utilization: Base Borrow Rate at 0.50%
    - 85%-95% Utilization: Rate increases to 6.00%
    - 95% Utilization: Max Borrow Rate spikes to 160% to discourage further borrowing.
- **Mitigation:**
    - Monitor utilization rates in the **Borrow Panel** before initiating leverage.
    - Reduce borrowing during periods of high utilization to avoid sudden rate spikes.
    - Adjust leverage proactively to maintain lower borrowing costs.

:::tip
[Learn more about pool mechanics](../src/04-margin-pools/optimized-lending-pool-mechanics.md).
:::

## Position Management Constraints

Margin accounts in Glow Finance are limited to **24 user-managed positions**, with an additional 8 positions reserved for internal operations such as liquidations.

- **Risks:**
    - Exceeding the 24-position limit prevents new deposits or borrows.
    - Users must close or consolidate positions to free up space.
- **Mitigation:**
    - Use the **Manage Positions** popup to identify and close inactive or redundant positions.
    - Regularly review position usage to avoid inadvertently reaching the limit.
    - Consolidate smaller positions to minimize position count.

## Third-Party Integration Risks

The **Leveraged glowSOL Recipe** uses **glowSOL**, a wrapped version of **sSOL** — issued by Solayer, a leading staking protocol that Glow integrates with. This means the value and behavior of your recipe position is indirectly tied to the stability of sSOL.

- Any technical, governance, or security issues affecting the sSOL protocol may indirectly impact your position in the recipe.
- While glowSOL itself does **not currently carry collateral weight**, leveraged users still depend on the **glowSOL/SOL peg** to maintain a healthy margin account.
- If sSOL depegs significantly from SOL, it could cause a drop in Health Level and potentially lead to liquidation for users of the Leveraged glowSOL Recipe, since the recipe relies on the glowSOL/SOL peg to maintain account stability.

**Mitigation:**

- Monitor the **sSOL/SOL peg** (and by extension the **glowSOL/SOL peg**) for signs of instability.
- Stay informed via Glow Finance and Solayer announcements and status updates on supported assets.
