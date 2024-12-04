---
title: "Using glowSOL"
description: "Using glowSOL"
sidebar_label: "Using glowSOL"
sidebar_position: 2
---

Users can stake SOL through Glow Protocol to mint GlowSOL. This process ensures users benefit from Solayer’s staking infrastructure while receiving a liquid, tradable token.

The redemption process includes converting the staked assets (sSOL) back to SOL, managed through Glow’s multisig vault.


## How It Works

SOL flows through the staking contract, to the multisig vault, and then to Solayer, with GlowSOL issued in return. GlowSOL holders redeem SOL through a queue managed by the protocol.

- **Staking:** Users deposit SOL, which is restaked through Solayer, generating sSOL (staked SOL). This sSOL is then wrapped into GlowSOL, a liquid token that users receive in their wallet.

- **Unstaking:** Users can redeem GlowSOL back into SOL through an automatic unwrapping process. A 7-day withdrawal period ensures the system maintains adequate liquidity.

## How to Stake

- **Step 1: Deposit SOL or sSOL**  
Users can deposit SOL or sSOL into Glow’s staking interface.
     - **If depositing SOL:**  
       SOL is automatically staked in Solayer to generate sSOL, which is then wrapped into GlowSOL.
     - **If depositing sSOL:**  
       Users with existing sSOL can directly wrap it into GlowSOL.
- **Step 2: Wrapping Process**  
     - **SOL → sSOL:** Solayer converts deposited SOL into sSOL.  
     - **sSOL → GlowSOL:** The system wraps sSOL into GlowSOL, representing staked assets and accrued rewards.

GlowSOL allows users to convert their staked SOL assets into a liquid token.

### Dynamic Minting Ratio

GlowSOL’s minting ratio reflects the combined value of SOL and sSOL in Glow’s vault relative to GlowSOL supply. This ensures GlowSOL accurately represents the value of staked assets in real-time.

### Benefits of Depositing

- Earn staking rewards (~8%), Glow Points, and Solayer Points.
- Maintain liquidity for your staked SOL.
- Use GlowSOL in Glow’s DeFi ecosystem for swaps, leveraging, and borrowing.

## How to Unstake & Withdraw

Unstaking GlowSOL allows users to redeem their tokens and reclaim their SOL.

1. **Step 1: Unstake**

- GlowSOL holders initiate unstaking through Glow’s interface, which burns the GlowSOL tokens and starts the redemption process.
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

Glow’s multisig vault dynamically manages SOL and sSOL liquidity, ensuring smooth withdrawal operations.

## Advanced Utility of GlowSOL

GlowSOL isn’t just a staking token; it’s a gateway to advanced DeFi opportunities:
- **Liquidity Without Unstaking:** Retain liquidity while earning rewards on staked SOL.
- **DeFi Strategies:** Use GlowSOL for swaps, borrowing, leveraging, and more within Glow Protocol’s ecosystem.
- **Transparent and Secure:** The platform provides real-time visibility into minting ratios, staking yields, and withdrawal statuses while maintaining robust security with smart contracts and multisig vaults.

## Example Scenarios

1. **Depositing SOL to Receive GlowSOL:**

- A user deposits 10 SOL into Glow. This SOL is staked in Solayer to generate sSOL, which is then wrapped into GlowSOL. The user can trade or use GlowSOL while continuing to earn staking rewards and Glow Points.

2. **Redeeming GlowSOL for SOL:**

- The user redeems 5 GlowSOL, initiating a 7-day withdrawal process. After the waiting period, the equivalent value in SOL (including rewards) is transferred to the user’s wallet.
