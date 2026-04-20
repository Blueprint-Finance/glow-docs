---
title: "How It Works"
description: "How Glow Finance works on Solana: architecture with margin accounts, margin pools, adapters, and vaults."
sidebar_label: "How It Works"
sidebar_position: 3
keywords:
  - glow finance
  - solana
  - architecture
  - margin accounts
  - margin pools
  - adapters
  - vaults
  - glowSOL
  - solayer
  - solana
  - glow
  - SOL
---

import Footnotes from '@site/src/components/Footnotes';

:::info
This section of the documentation outlines features of the upcoming **Glow Finance V1** application, currently in development. While we finalize this exciting update, you can already take advantage of Glow Restaking, which is live and available today.

[Learn more about Glow Restaking](../02-LRT/overview.md).
:::

Glow offers a suite of complementary DeFi tools designed to give users access to lending, borrowing, and strategy tools on Solana through a unified interface.

These tools are accessible through the platform's easy-to-use interface and are built to cater to both beginners and advanced users alike. Below is a brief overview of each feature:

1. **Margin Accounts**: Think of these as flexible digital accounts where users can deposit assets and use them as collateral for borrowing or trading. Margin accounts provide users with the ability to manage and optimize their funds efficiently while accessing multiple features on Glow.
2. **Pooled Lending**: This feature enables users to lend their assets to a **shared liquidity pool** that operates on a variable interest rate model. The interest rate is dynamically set based on **utilization rate**—an indicator of how much of the pool is currently being borrowed. This utilization-based interest rate system encourages a balance between lenders and borrowers: when the pool's utilization rate is high, interest rates increase, attracting new deposits, while low utilization results in lower interest rates to incentivize borrowing. This model is a utilization-based pooled lending design.
3. **Vaults (Simple Vaults)**: are pre-set, automated containers that users can select and manage through dedicated vault positions, allowing them to deploy capital and earn yield with minimal manual management. they run simpler, single-asset strategies without leverage, designed for passive yield generation (e.g. syrupUSDC).
4. **Strategy Vaults**: Vaults that run more advanced strategies—such as leverage or multi-step DeFi actions—within isolated margin accounts. These vaults may expose additional controls and risk metrics.

We will dive into the Glow architecture and how all these tools integrate seamlessly on the Solana blockchain.

## Architecture

The diagram illustrates the core architecture and functionality of Glow on the Solana blockchain, showcasing how Glow utilizes Solana's speed and the Solana Virtual Machine (SVM) architecture to provide a highly efficient and composable DeFi experience.

By centralizing user assets into margin accounts and connecting them with margin pools, and external protocols through adapters, Glow ensures that users can optimize their capital efficiency while accessing a wide variety of DeFi services. The use of strategy vaults simplifies complex trading strategies, making advanced financial maneuvers accessible and manageable for all user levels.

![](/img/how-it-works.png)

Let’s break down each component and explain how they interact within Glow’s ecosystem:

## 1. User/Client Interaction

The user/client is at the center of Glow’s functionality. Users interact with Glow primarily through **margin accounts**, which serve as the gateway for accessing various financial products within the ecosystem.

**Permissioned bubbles** (optional) can be applied to segment specific user interactions or environments, may support segmented user environments or feature gating where needed.<sup>5</sup>

## 2. Margin Accounts

**Margin accounts** are central to Glow’s model. They serve as the primary structure for users to deposit collateral and interact with various Glow products. These accounts help manage and allocate user funds efficiently, enabling multiple strategies such as borrowing and lending within the same account structure.

They are directly integrated with external protocols through **adapters**, which serve as connectors to Solana’s vast DeFi ecosystem. These adapters allow margin accounts to interact seamlessly with other protocols, enhancing capital efficiency and flexibility for users.

## 3. Adapters

Adapters function as the bridges between Glow’s margin accounts and various **external protocols** on Solana. They facilitate interoperability and allow users to easily move assets between Glow and other DeFi protocols.

By leveraging these adapters, Glow can maintain a high level of **composability**, ensuring that users can access a wide range of DeFi products without leaving the platform.

## 4. Margin Pools

The **Margin Pools** hold the various assets that users deposit into their margin accounts. These pools act as liquidity reserves, which users can access for borrowing or leveraging their assets. The interaction with these pools is central to Glow’s lending and leverage capabilities.

Users can deposit assets into these pools, enhancing the platform's liquidity while earning yield. The margin pools also manage risk by ensuring that sufficient liquidity is available for users who wish to borrow against their collateral.

## 5. Strategy Vaults

**Strategy Vaults**  are vaults that run pre-configured, automated strategies within isolated positions. They allow users to access more complex DeFi strategies—such as leverage or multi-step actions—without manual setup, while keeping each strategy self-contained and easy to manage.

By using Strategy Vaults, Glow users—whether beginners or advanced traders—can efficiently access advanced yield opportunities and strategy-driven positions without requiring extensive configuration.

### Leveraged glowSOL Restaking Vault + Glow and Solayer Points

The **Leveraged glowSOL Restaking Vault** is Glow's flagship vault, designed to give users leveraged exposure to glowSOL-related rewards while reducing the effect of SOL price movements on certain health calculations; it does not eliminate liquidation or other risks.<sup>3</sup> This strategy uses **glowSOL** and **sSOL (Solayer’s liquid restaking token)** to allow users to select a leverage level and earn multiplied SOL restaking yield and points within an **isolated margin account**.

While the USD value of the position still moves with SOL price, the vault is intended so that SOL price movements alone are not the sole driver of position health under the current design; depeg, borrow-rate, liquidity, oracle, smart contract, and other risks remain, as both collateral and debt are tied to SOL.

**How It Works:**

1. The user creates a Glow margin account and navigates to the “Leveraged glowSOL Restaking” strategy vault.
2. The application UI walks them through the setup, in which the user may choose between depositing SOL from their wallet, from one of their margin accounts, and then deposit it to the vault
3. The user holds glowSOL, which is designed to accrue value as staking rewards accumulate, targeting a delta-neutral position relative to SOL price.
4. GlowSOL is also wrapped sSOL, meaning that users earn both Glow and Solayer points — with a multiplier depending on leverage selected!
5. Since the user borrows SOL (but holds glowSOL), they are protected against price swings in SOL, maintaining a position that that will fluctuate in value alongside SOL price while benefiting from staking rewards. The primary liquidation risk arises if the SOL/sSOL peg deviates significantly. Prolonged periods where borrow APY exceeds restaking yield may also affect position health.

### Potential Future Strategy Vaults

In addition to the Leveraged glowSOL Vault, Glow aims to introduce additional vaults to meet a variety of user goals. Potential future vaults include:

- **Stablecoin Rate Arbitrage**: A strategy designed to take advantage of differing interest rates on stablecoins across various protocols. Users can borrow or deposit stablecoins in platforms where they offer the highest yield, seeking to capture rate differentials, subject to smart contract, liquidity, market, and execution risk.
- **Leverage Long**: For users who want to amplify their exposure to price appreciation in specific assets, this strategy borrows additional assets to take long positions, potentially magnifying gains and losses in directional markets.<sup>3</sup>
- **Leverage Short**: This strategy allows users to take short positions by borrowing and selling assets they believe will decline in value. It is a straightforward way to benefit from bearish trends.
- **Pair Trade**: This strategy enables users to set up pair trades by simultaneously going long on one asset and short on another. Pair trading can be used for arbitrage or hedging purposes, offering a balanced risk approach to trading.
- **LRT Leverage**: By leveraging specific tokens or liquidity pool assets (like sSOL in Solayer), this strategy aims to generate targeted yield from protocols offering liquid restaking or similar yield-generating mechanisms.
- **AMM LP Leverage**: This strategy leverages assets to provide liquidity on Automated Market Maker (AMM) platforms, earning additional yield from LP fees while retaining leveraged exposure to the asset pairs in the liquidity pool.

## 6. External AMMs and CLOB Integration

Glow’s vaults can connect with **External AMMs** (Automated Market Makers) on the Solana network, allowing users to provide liquidity or trade directly on these AMMs. This integration may expand available trading and liquidity options within Glow, supporting various strategies such as liquidity provision, yield farming, and automated trading.

Unlike AMMs, which pool liquidity for automated trading, CLOBs operate with traditional bid-ask order matching, similar to those used in stock markets. This integration will allow Glow users to place specific buy and sell orders, increasing control and precision in trade execution and enabling more sophisticated trading strategies.

![](/img/amms.png)

<Footnotes />
