---
title: "Deposit wBTC, Borrow SOL & Stake glowSOL"
description: "Deposit wBTC, Borrow SOL & Stake glowSOL"
sidebar_label: "Deposit wBTC, Borrow SOL & Stake glowSOL"
sidebar_position: 4
---

Glow Finance allows users to deposit a variety of collateral types. If you have any idle assets (not limited to just wBTC), you can **deposit them to earn interest while simultaneously using them as collateral** for borrowing and running a strategy such as the one described here.

**Why Deposit Collateral?**

Depositing assets in Glow Finance provides multiple benefits (by combining these strategies, users maximize capital efficiency while keeping their assets productive):

1. **Earn Passive Yield** – Deposited assets generate **Deposit APY** over time.
2. **Increase Borrowing Power** – Collateral enables users to borrow assets and utilize leverage.
3. **Stack Rewards** – Depositors benefit from:
    - Interest from lending pools
    - Staking yield from glowSOL (when SOL is restaked)
    - Boosted Glow Points, Solayer Points, and AVS Rewards

Users who hold a significant amount of Bitcoin can **maximize its utility** by simultaneously:

1. **Earning yield** on their wBTC by depositing it into Glow Finance.
2. **Leveraging wBTC as collateral** to borrow SOL.
3. **Restaking the borrowed SOL** as glowSOL to earn additional staking yield (currently **>10%**).

This strategy allows users to **put their Bitcoin to work** in multiple ways—generating interest on deposits while also accessing **leverage** and **staking rewards**, optimizing capital efficiency within the Glow ecosystem.

- Depositing wBTC earns **Deposit APY** and provides borrowing power (”collateral”).
- Borrowing SOL allows you to **leverage** your assets.
- Staking SOL as **glowSOL** generates **staking yield** and additional Solayer rewards while also providing collateral for further borrowing power.

## Step 1: Deposit wBTC

Depositing assets on Glow Finance provides **liquidity to lending pools** and enables you to use them as **collateral** for borrowing.

### 1.1 Start on the Markets Page

- When you open the Glow Finance app, you'll land on the **Markets** page (this is the **front page** of the app).
- Connect your wallet and [create a margin account](../03-margin-accounts/how-to-create-a-margin-account.md) if you haven’t already.
- Search the table of listed assets for **wBTC**.

For more info, you can read the article [How to Deposit](../03-margin-accounts/how-to-deposit.md).

### 1.2 Select wBTC and Deposit

- Click on the **wBTC row** in the assets list to open the **Asset Details** page, then navigate to the **Deposit** tab.
- Alternatively, you can directly click the **Deposit** button next to wBTC in the **Markets** list.
- In the **Deposit** tab, enter the amount of wBTC you wish to deposit.

### **1.3 Review the Deposit APY**

Before approving your deposit, review the **Deposit APY (Annual Percentage Yield)** to understand the interest you’ll earn on your wBTC deposit.

You will see both:

- **Before You Deposit APY** – The current rate before your transaction is completed.
- **After You Deposit APY** – An estimate of the rate after your deposit is added to the pool.

*Note:* These rates may fluctuate based on market conditions and utilization.

- Click **Approve wBTC Deposit** and confirm the transaction in your wallet.

📌 *Note:* Ensure you have sufficient funds and network fees available before approving the deposit.

## Step 2: Borrow SOL Against wBTC

Once your **wBTC is deposited**, you can **use it as collateral** to borrow **SOL**. Borrowing SOL allows you to leverage your wBTC collateral and use the borrowed SOL for staking.

1. **Navigate to SOL Market:** From the **Markets** page, find **SOL**.
2. **Check Borrowing Capacity:**
    - Your **available borrowing power** depends on your **Health Level** and deposited collateral.
    - You can check your borrowing capacity on the **Borrow** tab of the asset page.
    - **Use the slider** to see the **maximum amount you can borrow** while maintaining a safe Health Level.
    - **Max Leverage**: The highest possible leverage is reached when your **Health Level** is at 6%. See [Max Leverage](../glossary#max-leverage) for details.
3. **Borrow SOL**
    - Click the Borrow button next to SOL in the **Markets** list, or click on the SOL row in the assets list to open the **Asset Details** page, then navigate to the **Borrow** tab.
    - Enter the amount of **SOL** you want to borrow. Your **available borrowing power** is based on the **collateral weight** of your wBTC.
    - **Check the Borrow APY**: You’ll see both the **current APY** and the **after-borrow APY**, showing how your transaction impacts the lending pool, allowing you to make the best-informed decision based on current protocol condition.
    - **Review your resulting Health Level** in the transaction panel before approving. This helps you assess risk and avoid liquidation.
    - Click **Borrow SOL** and **approve** the transaction in your wallet.
4. **Confirm Borrowing**
    - Your borrowed SOL will appear in your account.
    - Your **Health Level** will update based on your new loan.

✅ *You now have SOL in your wallet, ready to stake.*

> Important: Borrowing SOL increases your account leverage. Be mindful of your Health Level, as borrowing too much can lead to liquidation.
>

## Step 3: Stake Borrowed SOL as glowSOL

Staking SOL as **glowSOL** allows you to earn **staking yield** while keeping it usable within Glow Finance.

**Note**: Currently, **staking must be done manually** outside of the margin account. In a future release, Glow will introduce a feature that allows users to restake SOL → glowSOL **directly from within a margin account**, streamlining this process.

### 3.1 Withdraw Borrowed SOL

Before staking, you must **withdraw SOL** from your margin account.

- **Go to your Margin Account** and navigate to the **Withdraw** section.
- **Select SOL** and choose an amount to withdraw.
- **Review Health Level**: Ensure that withdrawing does not **lower your Health Level too much**, risking liquidation.
- Click **Withdraw SOL** and **approve** the transaction in your wallet.

**You may not be able to withdraw 100% of your SOL at once** because your Health Level must remain above the liquidation threshold. You can **repeat this process multiple times** as needed.

In a later release, Glow Finance will allow **staking SOL → glowSOL directly from within a margin account**, removing the need to manually withdraw and deposit multiple times. This will make the **entire process seamless and efficient.**

### 3.2 Restake SOL to glowSOL

Once you have withdrawn SOL to your wallet:

- Go to the **Glow Restaking site**.
- Enter the amount of **SOL** you wish to restake.
- Click **Restake SOL** and **approve** the transaction.

**SOL is now converted to glowSOL**, which **earns staking yield** and can be used as collateral.

**Why is glowSOL better than SOL?**

- **Same collateral weight** as SOL, meaning it provides equal borrowing power.
- **Earning yield**: glowSOL steadily increases in value because it auto-compounds staking rewards.

### 3.3 Deposit glowSOL Back into Margin Account

- Navigate to the **Deposit** tab in your Margin Account.
- Select **glowSOL** and enter the amount to deposit.
- Click **Deposit glowSOL** and **approve** the transaction.

At this point, **your SOL has been fully converted into glowSOL**, **earning staking yield while acting as collateral**.

### 3.4 Repeat Until All Borrowed SOL is Staked

Since you may not be able to withdraw **all** SOL at once (due to Health Level constraints), you can **repeat the process**:

1. **Withdraw more SOL** from the margin account (as much as your Health Level allows).
2. **Restake SOL into glowSOL** via the Glow Restaking site.
3. **Deposit glowSOL back into your margin account**.

**Repeat this loop until all your SOL is converted into glowSOL.**

## Step 4: Manage Your Position

Now that you've **deposited wBTC, borrowed SOL, and staked SOL as glowSOL**, you need to monitor your position.

### 4.1 Check Your Portfolio Health

- Go to the **Portfolio** section to review your **Health Level**. For more info, check the [Health Level](../03-margin-accounts/health-level.md) article.
- Ensure you stay above the **liquidation threshold (0% Health Level)** to avoid risks. If your **Health Level** reaches **0%**, your collateral may be liquidated to repay your borrowed funds.

### 4.2 Earn Rewards

By completing this strategy, you maximize your capital efficiency and earn rewards from multiple sources:

- Your wBTC deposit accrues interest via Deposit APY.
- Your glowSOL stake earns staking yield that auto-compounds over time.
- You earn points from:
    - **Glow Points** – Rewarding activity within Glow Finance.
    - **Solayer Points** – Earned for participating in Solayer’s restaking ecosystem.
- You can unstake glowSOL anytime to redeem it back for SOL.

### 4.3 Repay Your Borrowed SOL (Optional)

- If you want to **reduce risk or withdraw wBTC**, repay part or all of your borrowed SOL by going to the **Repay** tab.
- If you staked your borrowed SOL as glowSOL, you may need to **withdraw glowSOL and unstake it first** to get back SOL before repaying.
- Enter the amount and approve the transaction in your wallet.

**Tip**: Repaying borrowed SOL improves your **Health Level**, reducing liquidation risk and allowing more flexibility with your collateral.
