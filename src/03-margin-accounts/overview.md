---
title: "Overview"
description: "Overview"
sidebar_label: "Overview"
sidebar_position: 0
---

Glow’s **Margin Accounts** provide a structured environment for users to deposit assets, earn interest, and leverage those deposits as collateral for borrowing and advanced trading strategies. Glow’s margin accounts integrate with various DeFi protocols on Solana through adapters, enabling composable strategies without leaving the Glow ecosystem.

Glow’s **Margin Accounts** empower users by enabling **undercollateralized borrowing**, a feature that has been a cornerstone of traditional finance yet remains rare in decentralized finance. This innovative capability allows users to access additional liquidity without being fully collateralized, unlocking new opportunities for efficient capital utilization.

Margin accounts are a core component of the Glow Finance protocol, providing a structured environment for users to deposit assets, earn interest, and leverage those deposits as collateral for borrowing and advanced trading strategies. By integrating with various DeFi protocols on Solana through adapters to other protocols, Glow’s margin accounts enable **composable strategies** and seamless interaction within Solana applications, allowing users of the Glow UI to access other applications without ever leaving Glow.

## Margin Account Fundamentals

Margin accounts in Glow are dynamic, collateral-backed accounts where users can deposit assets like USDC, SOL or other tokens, that serve two functions:

1. **Interest Generation**: Deposits in a margin account are automatically transferred to margin pools, where they immediately begin earning variable interest.
2. **Collateral Provision**: Deposited assets also act as collateral for borrowing, leverage swaps, and other advanced trading strategies, with the collateral amount calculated based on each asset’s collateral weight.

These accounts serve as the foundation for risk-segmented strategies and allow for simultaneous positions across Glow’s margin pools, enabling strategies like delta-neutral farming or high-leverage swaps.

## Key Components and Calculations

### 1. Available vs. Required Collateral

The Glow margin account architecture centers on calculating **effective collateral** and **required collateral** to support borrowing and prevent liquidation.

- **Available Collateral**: This is the collateral value that users can use for new actions, such as borrowing or additional swaps. Glow adjusts the value based on each asset’s **collateral weight**, a risk adjustment metric that scales the collateral’s value relative to its market volatility and ability to liquidate.
    - Example: An asset like USDC may have a high collateral weight, close to 1.0, given its stability, whereas more volatile assets like SOL may be weighted lower, affecting the amount counted towards an account’s effective collateral.
- **Required Collateral**: Required collateral is the minimum collateral needed to maintain the account's debt positions and prevent liquidation. It is calculated dynamically, accounting for current borrow levels, leverage ratios, and asset price fluctuations.

Together, these collateral metrics enable Glow to evaluate a margin account’s health in real time, helping manage potential liquidation risks.

### 2. Health Level and Risk Management

Glow’s system continuously monitors this health level, issuing alerts to users and providing real-time updates to manage exposure effectively.

Each Glow margin account has a **Health Level** indicator based on the ratio of available to required collateral. Consideration of the health level is essential for users to evaluate their risk, as it allows them to determine how close their account is to potential liquidation. This empowers users to take proactive measures in managing their positions effectively.

The health level is a percentage that helps users visualize the risk associated with their margin account by normalizing the relationship between effective collateral and required collateral:

- **100.0%**: Indicates a stable, well-collateralized account with no borrowing positions (required collateral = 0).
- **Below 20.0%**: Suggests that the user may soon need to add collateral or reduce borrowings to avoid liquidation.
- **5.0% Warning Threshold**: At this level, the UI alerts the user with a warning banner, emphasizing the need for immediate action to prevent liquidation.
- **Maximum Leverage Buffer**: The maximum borrowing or swap leverage allowed leaves the health level at **6.0%**, granting users the optionality to access maximum leverage while retaining a small buffer before the warning alert is triggered.
- **0.0%:** When the health level reaches 0.0% the margin account is slated for partial liquidation - Glow’s liquidator will attempt to exchange only as much value in assets from a user’s margin account as is necessary to cover enough debt to return the health level to above 0%. This protects the rest of the users of the protocol. Read the [liquidations page](../03-margin-accounts/liquidation.md) to read more about liquidations on Glow.

:::tip
The health level provides a normalized scale, where 100% represents no borrowing (effective collateral is significantly higher than required collateral), and 0% occurs when required collateral exceeds effective collateral, leading to liquidation.
:::

## Integration with Margin Pools

Glow’s **Margin Pools** manage liquidity for assets deposited within margin accounts. Margin pool rates are dynamic, adjusting both lending and borrowing rates based on utilization and providing a steady source of liquidity for user borrowing.

### Dynamic Rate Mechanism

Glow’s margin pools utilize a **variable-rate interest model**:

- **Utilization Rate**: The interest rate is tied to the pool's utilization rate (i.e., the percentage of the pool’s liquidity currently borrowed). As utilization rises, rates increase to attract more deposits, ensuring liquidity availability.
- **Real-Time Adjustments**: Glow adjusts these rates based on current demand to balance liquidity within each pool. This dynamic mechanism helps manage interest payouts and maintain optimal liquidity.

## Adapters: Connecting to External Protocols

Glow’s architecture includes **Adapters**, which bridge margin accounts to other protocols on Solana, allowing Glow to enhance users' capital efficiency by integrating a broad DeFi ecosystem.

Adapters enable the margin account to:

- **Integrate Cross-Protocol Collateral**: Adapters could allow users to count deposits made on external protocols as collateral within their Glow margin account. This opens opportunities for advanced strategies such as arbitraging interest rates across lending protocols, or leveraging deposits in one platform while borrowing or trading in another.
- **Enhance Cross-Platform Operations**: For example, users can route borrowed assets to external AMMs (Automated Market Makers) for trading or to external protocols for automated yield optimization. Future integrations may also include routing to Central Limit Order Books (CLOBs) for more sophisticated trading strategies.
- **Optimize Trade Execution**: By leveraging adapters, users can access optimized swap routes through aggregators like Jupiter on Solana, ensuring the most efficient trades across multiple DEXs.

## Multiple Margin Accounts for Segmented Strategies

Both Glow’s margin accounts and the application UI support **multi-account structures** controlled by a single wallet address. This setup enables users to isolate different trading strategies and control risk:

- **Portfolio Management**: Within the Glow Portfolio page of the UI, users can view all active margin accounts, switching between them to monitor health, collateral levels, and specific positions and history for each account.
- **Risk Segmentation**: Users can create accounts dedicated to different strategies, ensuring that liquidation or risk in one account does not impact other positions. This has many benefits, e.g. some users may use one account for delta-neutral farming, while using another for high-leverage swaps.

## Account History and Transparency

Glow’s **Account History** feature within the Portfolio tab offers full transactional records, allowing users to track all deposits, borrows, and liquidations.

The history includes collapsible entries for liquidation events, offering users a transparent view of every action taken to restore an account’s Health Level. For cases where a single liquidation required multiple steps, each **sub-swap** is displayed in detail. This feature allows users to see:

- The specific assets liquidated.
- The corresponding liquidation amounts.
- How each sub-swap contributed to stabilizing the account’s Health Level.

By breaking down the process into sub-swaps, users gain a clearer understanding of how Glow managed their account during liquidation and the overall impact on their holdings. This level of transparency ensures users can confidently evaluate past events and optimize future strategies.
