---
title: "How It Works"
description: "How It Works"
sidebar_label: "How It Works"
sidebar_position: 4
---

:::info
This section of the documentation outlines features of the upcoming **Glow Finance V1** application, currently in development and scheduled for release in Spring 2025. While we finalize this exciting update, you can already take advantage of Glow Restaking, which is live and available today.

[Learn more about Glow Restaking](../02-LRT/overview.md).
:::

Glow offers a suite of complementary financial tools designed to maximize yield and enhance capital efficiency, similar to what a prime brokerage provides in traditional finance.

These tools are accessible through the platform's easy-to-use interface and are built to cater to both beginners and advanced users alike. Below is a brief overview of each feature:

1. **Margin Accounts**: Think of these as flexible digital accounts where users can deposit assets and use them as collateral for borrowing or trading. Margin accounts provide users with the ability to manage and optimize their funds efficiently while accessing multiple features on Glow.
2. **Pooled Lending**: This feature enables users to lend their assets to a **shared liquidity pool** that operates on a variable interest rate model. The interest rate is dynamically set based on **utilization rate**—an indicator of how much of the pool is currently being borrowed. This utilization-based interest rate system encourages a balance between lenders and borrowers: when the pool's utilization rate is high, interest rates increase, attracting new deposits, while low utilization results in lower interest rates to incentivize borrowing. This model is an improved version of the classic DeFi pooled lending design pioneered by Compound, adding refinements that enhance efficiency and stability.

3. **Leverage Swaps**: This feature enable users to borrow additional funds to trade with higher amounts than they actually own, maximizing their potential gains (or losses). Users can choose different strategies like going long or short on an asset, or setting up a pair trade depending on their market outlook.
4. **Recipes**: are pre-set strategies that users can select and execute with just a few clicks. These strategies are designed to help users take advantage of various market conditions without needing to set up complicated trades themselves.

We will dive into the Glow architecture and how all these tools integrate seamlessly on the Solana blockchain.

## Architecture

The diagram illustrates the core architecture and functionality of Glow on the Solana blockchain, showcasing how Glow utilizes Solana's speed and the Solana Virtual Machine (SVM) architecture to provide a highly efficient and composable DeFi experience.

By centralizing user assets into margin accounts and connecting them with margin pools, leverage swaps, and external protocols through adapters, Glow ensures that users can optimize their capital efficiency while accessing a wide variety of DeFi services. The use of recipes simplifies complex trading strategies, making advanced financial maneuvers accessible and manageable for all user levels.

 ![](/img/how-it-works.png)

Let’s break down each component and explain how they interact within Glow’s ecosystem:

## 1. User/Client Interaction

The user/client is at the center of Glow’s functionality. Users interact with Glow primarily through **margin accounts**, which serve as the gateway for accessing various financial products within the ecosystem.

**Permissioned bubbles** (optional) can be applied to segment specific user interactions or environments, ensuring that Glow can comply with regulatory requirements or other specific protocols when necessary.

## 2. Margin Accounts

**Margin accounts** are central to Glow’s model. They serve as the primary structure for users to deposit collateral and interact with various Glow products. These accounts help manage and allocate user funds efficiently, enabling multiple strategies such as borrowing, lending, and swapping—all within the same account structure.

They are directly integrated with external protocols through **adapters**, which serve as connectors to Solana’s vast DeFi ecosystem. These adapters allow margin accounts to interact seamlessly with other protocols, enhancing capital efficiency and flexibility for users.

## 3. Adapters

Adapters function as the bridges between Glow’s margin accounts and various **external protocols** on Solana. They facilitate interoperability and allow users to easily move assets between Glow and other DeFi protocols.

By leveraging these adapters, Glow can maintain a high level of **composability**, ensuring that users can access a wide range of DeFi products without leaving the platform.

## 4. Margin Pools

The **Margin Pools** hold the various assets that users deposit into their margin accounts. These pools act as liquidity reserves, which users can access for borrowing or leveraging their assets. The interaction with these pools is central to Glow’s lending and leverage capabilities.

Users can deposit assets into these pools, enhancing the platform's liquidity while earning yield. The margin pools also manage risk by ensuring that sufficient liquidity is available for users who wish to borrow against their collateral.

## 5. Leverage Swaps

**Leverage Swaps** allow users to borrow funds with leverage and swap those assets for other tokens. This can be used to execute various trading strategies and maximize yield opportunities.

Glow’s **Leverage Swaps** utilizess the **Jupiter routing** system on Solana to find the best rates and routes for asset swaps. This ensures optimal execution for users when leveraging assets across different markets.

## 6. Recipes

**Recipes** are pre-configured, automated strategies within the leverage swaps framework. These are designed to allow users to participate in complex DeFi maneuvers without the need for manual configuration. By using recipes, Glow users—whether beginners or advanced traders—can efficiently access high-yield opportunities and advanced market strategies without requiring extensive setup.

### Leveraged glowSOL Restaking Recipe + Glow and Solayer Points

The **Leveraged SOL Restaking Recipe** is Glow's flagship recipe, designed to maximize yield and points earned from Glow and Solayer, while minimizing exposure to price volatility. This strategy uses the **glowSOL** and **sSOL (Solayer’s liquid restaking token)** to create a position that allows a user to to choose their leverage and earn multiplied SOL restaking yield and Solayer + Glow points.

Even better, that position is protected from liquidation by volatile SOL price swings and is self-contained within its own isolated margin account, thanks to the power of Glow!

**How It Works**:

1. The user creates a Glow margin account and navigates to the “Leveraged glowSOL Restaking” page.
2. The application UI walks them through the setup, in which the user may choose between depositing SOL from their wallet, from one of their margin accounts, or swap another asset from their wallet or margin account into SOL and then deposit it to the recipe
3. The user is prompted to select their leverage for the recipe setup, which uses Glow’s Leverage Swaps product to borrow additional SOL (if desired) and immediately swap all SOL holdings for glowSOL.
4. The user holds glowSOL, which grows in value over time as staking rewards accumulate, effectively earning yield in a delta-neutral position.
5. GlowSOL is also wrapped sSOL, meaning that users earn both Glow and Solayer points — with a multiplier depending on leverage selected!
6. Since the user borrows SOL (but holds glowSOL), they are protected against price swings in SOL, maintaining a position that that will fluctuate in value alongside SOL price while bemefiting from staking rewards. The only way a user can be liquidated is if the SOL/sSOL peg breaks.

### Potential Future Recipes

In addition to the Solayer Delta Neutral Recipe, Glow aims to introduce additional recipes to meet a variety of user goals. Potential future recipes include:

- **Stablecoin Rate Arbitrage**: A strategy designed to take advantage of differing interest rates on stablecoins across various protocols. Users can borrow or deposit stablecoins in platforms where they offer the highest yield, allowing for consistent returns with minimal risk.
- **Leverage Long**: For users who want to amplify their exposure to price appreciation in specific assets, this recipe borrows additional assets to take long positions, potentially magnifying gains in bullish markets.
- **Leverage Short**: This strategy allows users to take short positions by borrowing and selling assets they believe will decline in value. It is a straightforward way to benefit from bearish trends.
- **Pair Trade**: This recipe enables users to set up pair trades by simultaneously going long on one asset and short on another. Pair trading can be used for arbitrage or hedging purposes, offering a balanced risk approach to trading.
- **LRT Leverage**: By leveraging specific tokens or liquidity pool assets (like sSOL in Solayer), this recipe aims to generate targeted yield from protocols offering liquid restaking or similar yield-generating mechanisms.
- **AMM LP Leverage**: This strategy leverages assets to provide liquidity on Automated Market Maker (AMM) platforms, earning additional yield from LP fees while retaining leveraged exposure to the asset pairs in the liquidity pool.

## 7. External AMMs and CLOB Integration

Glow’s leverage swaps and recipes can connect with **External AMMs** (Automated Market Makers) on the Solana network, allowing users to provide liquidity or trade directly on these AMMs. This integration expands the range of earning opportunities within Glow, supporting various strategies such as liquidity provision, yield farming, and automated trading.

In addition to AMMs, Glow plans to integrate with **Central Limit Order Books (CLOBs)** as part of our **Atlas Integration on Phoenix**. Unlike AMMs, which pool liquidity for automated trading, CLOBs operate with traditional bid-ask order matching, similar to those used in stock markets. This integration will allow Glow users to place specific buy and sell orders, increasing control and precision in trade execution and enabling more sophisticated trading strategies.
