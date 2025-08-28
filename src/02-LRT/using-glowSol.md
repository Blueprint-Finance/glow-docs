---
title: "Using glowSOL"
description: "How to stake, mint, redeem, and use glowSOL on Solana: staking flow, 7-day withdrawal, liquidity, and DeFi utility."
sidebar_label: "Using glowSOL"
sidebar_position: 2
keywords:
  - glowSOL
  - solana
  - solayer
  - glow
  - SOL
  - liquid restaking
  - staking
  - redemption
---

Users can stake SOL through Glow Finance to mint glowSOL. This process ensures users benefit from [Solayer’s staking infrastructure](https://docs.solayer.org/getting-started/introduction) while receiving a liquid, tradable token.

The redemption process converts the staked assets (sSOL) back to SOL, ensuring users can always redeem an amount equal to or greater than their initial deposit, depending on the time invested. This guarantees a monotonically increasing value, reflecting accrued staking rewards over time.

The redemption process includes converting the staked assets (sSOL) back to SOL, guaranteeing users receive the same amount or more SOL based on the accrued rewards over time, reflecting a consistently increasing value.

## How It Works

SOL flows through the staking contract to, to the vault, and then to Solayer, with glowSOL issued in return. glowSOL holders redeem SOL through a queue managed by the protocol.

- **Staking:** Users deposit SOL, which is restaked through Solayer, generating sSOL (staked SOL). This sSOL is then wrapped into glowSOL, a liquid token that users receive in their wallet.
- **Unstaking:** Users can redeem glowSOL back into SOL through an automatic unwrapping process. A **7-day withdrawal period** ensures the system maintains adequate liquidity. For those needing immediate access, glowSOL can also be sold on an AMM with deep liquidity, incentivized through GLOW points, providing a faster liquidation option.

## How to Stake

- **Step 1: Deposit SOL or sSOL**
  Users can deposit SOL or sSOL into Glow’s staking interface. - **If depositing SOL:**
  SOL is automatically staked in Solayer to generate sSOL, which is then wrapped into glowSOL. - **If depositing sSOL:**
  Users with existing sSOL can directly wrap it into glowSOL.
- **Step 2: Wrapping Process (Automated)**
  - **SOL → sSOL:** Solayer automatically converts deposited SOL into sSOL.
  - **sSOL → glowSOL:** The system seamlessly wraps sSOL into glowSOL, providing users with a single step to represent their staked assets and accrued rewards. Users simply deposit SOL or sSOL, and glowSOL is issued automatically.

glowSOL allows users to convert their staked SOL assets into a liquid token.

### Dynamic Minting Ratio

glowSOL’s minting ratio reflects the combined value of SOL and sSOL in Glow’s vault relative to glowSOL supply. This ensures glowSOL accurately represents the value of staked assets in real-time.

## How to Unstake & Withdraw

Unstaking glowSOL allows users to redeem their tokens and reclaim their SOL.

1. **Step 1: Unstake**

- glowSOL holders initiate unstaking through Glow’s interface, which burns the glowSOL tokens and starts the redemption process.
- Behind the scenes, sSOL is converted back into SOL.

2. **Step 2: Withdrawal Process**

- Users must wait for a **7-day withdrawal period**, during which Solayer processes the conversion of sSOL to SOL.
- A countdown timer is displayed to track withdrawal progress.
- Glow actively manages liquidity to ensure sufficient SOL is available for withdrawals.

3. **Step 3: Withdraw**

- Initiate unstaking through the interface.
- Wait for the 7-day period.
- Withdraw redeemed SOL to your wallet once the withdrawal period ends.

### Liquidity Management

Glow’s vault dynamically manages SOL and sSOL liquidity, ensuring smooth withdrawal operations.

## Advanced Utility of glowSOL

glowSOL isn’t just a staking token; it’s a gateway to advanced DeFi opportunities:

- **Liquidity Without Unstaking:** Retain liquidity while earning rewards on staked SOL.
- **DeFi Strategies:** Use glowSOL as collateral within Glow Finance’s ecosystem.
- **Transparent and Secure:** The platform provides real-time visibility into minting ratios, staking yields, and withdrawal statuses while maintaining robust security with smart contracts and vaults.

## Example Scenarios

1. **Depositing SOL to Receive glowSOL:**

- A user deposits 10 SOL into Glow. This SOL is staked in Solayer to generate sSOL, which is then wrapped into glowSOL. The user can trade or use glowSOL while continuing to earn staking rewards and Glow Points.

2. **Redeeming glowSOL for SOL:**

- The user redeems 5 glowSOL, initiating a 7-day withdrawal process. After the waiting period, the equivalent value in SOL (including rewards) is transferred to the user’s wallet.
