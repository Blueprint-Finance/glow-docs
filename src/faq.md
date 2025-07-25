---
title: "FAQ"
description: "FAQ"
sidebar_label: "FAQ"
sidebar_position: 8
---

- [General Questions](#general-questions)
- [Portfolio Management](#portfolio-management)
- [Handling Positions](#handling-positions)
- [glowSOL & Restaking](#glowsol--restaking)
- [Health Level & Risk Management](#health-level--risk-management)
- [Troubleshooting & Errors](#troubleshooting--errors)
- [Fees & Costs](#fees--costs)
- [Advanced Topics](#advanced-topics)

## **General Questions**

### What is Glow Finance?

Glow Finance is a DeFi protocol on Solana offering margin accounts, lending pools, and automated trading strategies to maximize capital efficiency.

### How does Glow Finance benefit users?

- One account for everything → Deposit, borrow, and trade from a single margin account.
- Capital Efficiency → Maximize your deposited capital through strategic leverage and pooled lending.
- Automated Strategies → Glow Recipes allow users to execute multi-step DeFi operations automatically.

### Is Glow Finance non-custodial?

Yes! Your funds remain in smart contracts controlled by your margin account connected to your wallet, not by Glow.

## **Portfolio Management**

### Why can’t I withdraw my funds?

- Not enough available liquidity → The pool may not have enough funds to cover your withdrawal.
- Deposit limits reached → Some assets have maximum caps that prevent further deposits/withdrawals.
- Health Level too low → Withdrawing would put your account at risk of liquidation.

### How do I borrow assets?

1. Deposit collateral into your margin account.
2. Select an asset to borrow.
3. Adjust the borrow amount (check the projected health level displayed in the panel since you will not be able to continue with the transaction if it would result in a health level below 10%).
4. Click the “Borrow” button and approve the transaction.

### How do I increase my borrow limit?

- Deposit more collateral.
- Repay part of your debt.
- Use assets with a higher [collateral weight](../src/glossary.md#collateral-values).

### How does the borrow/withdraw slider work?

- The slider allows users to see the full range of possible withdrawals or borrows.
- Moving the slider past a certain point may trigger an error (e.g., too low liquidity or Health Level warning).
- The projected rate impact is displayed for the operation being performed:
    - On Deposit and Withdraw panels, users see the estimated effect on the deposit rate.
    - On Borrow and Repay panels, users see the estimated post-transaction borrow rate.

### Can my account be liquidated multiple times?

Liquidations to account assets occurs in order to return the health level of an account to above 0%. If your Health Level reaches 0% multiple times, the system may liquidate collateral  in stages.

This can happen in quick succession if your position remains undercollateralized.

**Solution:** Monitor your Health Level closely and take action before it reaches 0%.

### What is the transaction panel?

The **transaction panel** is the interface where you enter amounts to deposit, borrow, or withdraw. It ensures you’ll never input a value that triggers an error or warning, keeping your account safe without needing to guess or adjust values manually.

![](/img/faq-0.png)

The transaction panel includes:

- An **input field** – Where you manually enter an amount.
- A **slider** (0–100%)  – Lets you quickly choose a percentage of your available balance. 100% shows the theoretical maximum, but doesn’t always match what’s safe.
- A **Max button**  – Inputs the actual maximum value that is safe and valid for the current action. This includes logic for Health Level, pool liquidity, buffer for SOL fees, and more.
- **Real-time Feedback** – Displays dynamic metrics like Health Level, expected output, and borrow APR as you adjust values.

### Why does the "Withdraw" tab show more than I can actually withdraw?

Clicking the "Max" button inputs the total amount of the asset deposited in your margin account. However, your actual withdrawable amount may be limited by your borrowed assets, as withdrawing too much could lower your Health Level below 10%, which is not allowed.

**Solutions:**

- Use the slider to adjust your withdrawal amount.
- Check the Withdrawable Balance field for the actual max amount.

### What does the Max button do?

All limit logic is built into the slider and Max button.

The **Max** button inputs the highest amount the user can borrow or withdraw **without lowering their Health Level below 10%**. This ensures that users **never accidentally enter liquidation risk**.

The **Max** button inputs the **highest amount allowed** without triggering any warnings or errors.

It automatically checks:

- **Health Level**: Ensures the transaction won't drop your account below the minimum 10% threshold.
- **Pool Liquidity Limits**: Prevents actions that exceed available liquidity for withdrawals or borrowing.
- **Deposit Limits**: Checks if the amount exceeds current global caps for token deposits.
- **Pool Utilization**: Avoids borrowing amounts that would push the pool over 95% utilization.

For deposits, you'll still see your wallet balance (shown as “Held in Wallet”) so you can select how much to supply. For **withdrawing**, clicking Max will set the amount to the highest value that won’t bring Health Level below 10%.

### Why doesn’t the Max button use my full balance?

Because it prioritizes **safety and success**.

For example:
- When depositing SOL, it subtracts a small **transaction fee buffer**
- When withdrawing or borrowing, it ensures your **Health Level stays above 10%**
- If liquidity or pool limits apply, it adjusts the value accordingly

The goal is to **prevent errors**, not just hit 100%.


### Why is 100% on the slider different from the Max button?

| Element | What it means | **Deposit Action** | **Withdraw Action** |
| --- | --- | --- | --- |
| **Slider (100%)** | The theoretical maximum — e.g. full wallet balance or position | Full wallet balance (minus fee buffer for SOL only) | Full position or wallet value (regardless of health or liquidity) |
| **Max Button** | The actual, validated max — safe, warning-free, and health-aware input | Amount minus fee buffer + within deposit limits | Withdrawable amount, considering pool liquidity + min 10% health level |

The **100% on the slider** represents what *could* be entered if no warnings or constraints existed — it’s just a reference point.

The **Max button**, on the other hand, uses **live calculations** to figure out what’s **actually valid** at that moment. It protects you from:

- Triggering errors (e.g. trying to deposit too much)
- Breaking pool caps or protocol rules
- Dropping below minimum Health Level (10%)
- The system prevents any action (like choosing excessive leverage) that would cause your Health Level (HL) to fall below the minimum threshold (currently 10%). The maximum leverage available per transaction is dynamically capped — it's the highest amount you can borrow without dropping your HL below this constraint.
- Leaving too little SOL to pay transaction fees

That’s why the Max value is often less than 100% on the slider — because it’s adjusted for reality, not just potential.

### What types of errors are now prevented automatically?

- Entering amounts that would drop your **Health Level below 10%**
- Exceeding **deposit limits** or **borrow limits** for a given asset
- Borrowing beyond the **95% utilization ceiling** (via Pool Utilization cap — not liquidity availability)
- Withdrawing more than the **available pool liquidity** (withdrawals only, since for borrows only 95% of the pool can be borrowed)
- Depositing 100% of SOL in your wallet, leaving no buffer for **transaction fees**

**Note:** While withdrawal actions may be blocked due to insufficient pool liquidity, borrowing is capped via utilization rules (not liquidity exhaustion). Borrow warnings are enforced through a 95% pool utilization limit — not a lack of borrowable funds.

If you manually input an invalid amount, the interface will show a warning — but the **Max button** always avoids these issues by using the safest possible amount.

### Why is the Max button showing less than 100% of my wallet or position?

Even though the **slider** shows 100% as the theoretical max, the **Max** button uses a **safety-adjusted value**.

That’s why:

- When **depositing**, it might leave a small buffer (e.g. for SOL transaction fees)
- When **withdrawing** or **borrowing**, it ensures your **Health Level stays ≥ 10%** and liquidity caps aren’t exceeded

### Why is the Withdraw button disabled?

The Withdraw button may be disabled due to:

1. Health Level too low – Withdrawals that would drop Health Level below 6.0% are blocked to prevent liquidation. Try reducing the withdrawal amount.
2. Insufficient pool liquidity – The pool doesn’t have enough liquidity to fulfill your request. Click the underlined max amount in the error message to adjust.
3. Not Enough Available Liquidity – Withdrawals may be restricted if the pool does not have enough liquidity at the moment. This also applies to borrowing. You may need to wait for more liquidity to be added by other users or for repayments to free up funds.
4. Invalid input – The entered amount exceeds what’s available. Check your balance and adjust.
5. Wallet not connected – Ensure your wallet is connected and has the necessary permissions.

If still blocked, try lowering the withdrawal amount or reconnecting your wallet.

### Why does my withdrawal fail even when I have enough balance?

- Health Level too low → You are attempting to withdraw too much collateral.
- Liquidity constraints → The lending pool may not have enough available funds.

**Solution:** Try a smaller amount or monitor pool conditions before withdrawing.

### Why does my borrow amount show lower than expected?

- Borrowing limit reached → Glow enforces borrow caps to prevent excessive leverage.
- Health Level constraint → The system ensures your margin account stays above 10% Health Level.
- Liquidity constraints → Pool conditions can prevent full borrowing.


## **Handling Positions**

### What is the Position Management Popup and how do I use it?

The **Position Management Popup** helps you view and manage how each slot in your margin account is being used—so you can avoid hitting the 24-position limit. [Learn how positions are counted](../src/03-margin-accounts/positions.md)

You can open this popup directly from the **margin account panel or the portfolio page**. It shows:

- A complete list of assets in the account
- How many positions each asset uses
- Whether it was a **deposit**, **borrow**, or **both**
- A **“Close Empty Positions”** button to remove any unused slots that occasionally are left from protocol actions (e.g. after liquidation or full repayment)

You’ll also see your current position counter (e.g., **18/24**) displayed on the **margin account selector dropdown** so you can easily check multiple accounts.

This popup makes it easy to clean up your account and free up position slots for future actions.

### What counts as a margin account position?

Each unique asset you deposit or borrow counts as a position. If you borrow an asset not currently in your account, it uses two positions (borrow + redeposit).

### How many positions can I have in a margin account?

You can use up to 24 positions. The remaining 8 are reserved for protocol-level operations like liquidation.

### Where can I see my current position count?

Glow shows position usage in:

- Margin Account Panel — Visible at the top of the screen when viewing an individual margin account (e.g., **6/24 used**).
- Margin Account Dropdown Selector – Lets you view usage across multiple accounts without switching.
- Portfolio Page (can view multiple at once) — Provides an overview of all margin accounts and their current position usage.

### What happens if I reach the limit?

You won’t be able to deposit or borrow additional assets once your margin account hits the 24-position cap. When this happens, the transaction panel will prevent you from proceeding, and a "Maximum Positions Violation" message will appear directly in the interface.

This real-time validation helps block the action before it’s submitted. The error message also provides a link to manage or reduce your open positions.

### How can I free up position slots?

To free up position slots in your margin account:

- **Withdraw an asset fully** → This removes 1 position if no borrow exists.
- **Repay** debt on an asset → Depending on whether the asset remains in your account after the action, this may free up 1 or 2 slots.
- **Use the “Close Empty Positions” button** → This lets you instantly remove any **empty slots** left over from previous actions like repaying or liquidation. These are rare, but when present, this button clears them in one click.

### Why does borrowing a new asset count as 2 positions?

When you borrow an asset not already in your account, Glow automatically deposits it into the pool, which creates one position for the borrow and one for the deposit.

### Why Is There a Limit?

The 24-position cap exists due to **on-chain memory constraints**.

Glow helps you work within this limit by surfacing usage counters, warning messages, and optimized UI feedback.


### What does "Maximum Positions Exceeded" mean when depositing?

This message means your **deposit** would push the margin account over its **24-position limit**.

Even though you're depositing a small amount, if it's a **new asset**, it still counts as **+1 position**. Glow blocks the transaction to keep you within the position cap.
<img
  src="/img/faq-17.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

### What does "Maximum Positions Exceeded" mean when borrowing?

This message appears if the **borrow action** would exceed the **24-position limit per margin account**.

🔗 [Learn how positions are counted](../src/03-margin-accounts/positions.md)

If you deposit a token, it uses up 1 position. If you borrow a token that is already deposited or borrowed in your margin account, it uses up another 1 position. If you're borrowing a token not currently in your account, it uses **2 positions** (one for the borrow, one for the redeposit into the pool). Glow prevents the transaction to maintain system limits.

<img
  src="/img/faq-166.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

## **glowSOL & Restaking**

### What is glowSOL and how does it work?

glowSOL is Glow’s Liquid Restaking Token (LRT) that allows you to:

- Earn staking rewards.
- Retain liquidity while earning.
- Use it as collateral for borrowing.

🔗 [glowSOL Overview](../src/02-LRT/overview.md)

### How do I stake SOL into glowSOL?

1. Deposit SOL into Glow’s restaking interface.
2. glowSOL will be minted automatically.
3. Your staked SOL continues to earn staking rewards.

Note: Users can also stake their Glow and deposit assets as part of more advanced strategies. For example, you can deposit wBTC, borrow SOL, and then restake it.

*In the future releases, users will also be able to restake directly from within a margin account.*

### How do I unstake glowSOL?

1. Initiate unstaking (7-day withdrawal period).
2. Wait for your SOL to be redeemed.

## **Health Level & Risk Management**

### What is the Health Level?

Health Level = (Effective Collateral / Required Collateral) x 100

- 100% = No risk (No debt).
- Below 20% = High risk (Liquidation possible).
- 0% = Liquidation begins.
    - Note that this is equivalent to when the effective collateral of an account goes below the required collateral.

🔗 [Health Level Guide](../src/03-margin-accounts/health-level.md)

### Why does my Health Level impact how much I can borrow/withdraw?

Health Level is a risk indicator that helps users monitor their collateral levels. When borrowing or withdrawing, the system prevents transactions that would immediately put the account at risk of liquidation. This ensures users maintain a buffer of collateral while still permitting high leverage, reducing the likelihood of forced liquidations right after a transaction.

- Glow enforces a minimum Health Level of 10% after borrowing/withdrawing.
- If your action would result in a Health Level below 10%, you will see an error.

🔗 [Liquidation Guide](../src/03-margin-accounts/liquidation.md).

### How do I protect my account from liquidation?

1. Monitor your Health Level—lower values increase liquidation risk.
2. Deposit more collateral.
3. Repay loans to reduce risk.
4. Reduce leverage exposure.

### What happens to liquidated assets?

Liquidated collateral is automatically sold to repay outstanding debt.

Liquidators receive a small incentive fee for executing the process.

### How is the health level affected by borrowing?

Borrowing or withdrawing from an account that already has an active borrow position will decrease the health level by an amount that depends on the current account collateral and which tokens borrowed ( have an effect on the health level of the account, you can read more details about this in [formulas page](../src/03-margin-accounts/formulas.md)).

The Glow UI provides a real-time projection of your Health Level before executing a transaction, along with the estimated impact on borrow or deposit rates. This helps users make informed decisions by understanding how their actions will affect their account’s risk and potential returns.

![](/img/faq-2.png)

### Why does Glow Finance block transactions that lower Health Level below 10%?

- Glow Finance enforces a minimum Health Level (HL) of 10% to prevent users from entering an extremely risky position that could result in liquidation.
- If a withdrawal or borrow action would bring the HL below 10%, the button to continue submitting the transaction is disabled and an error message is displayed.

Example:*"This transaction would bring your Health Level below the minimum required (10%). Please adjust your withdrawal/borrow amount to keep your account safe."*

### Why is my Health Level stuck at 0%?

- You have outstanding debt exceeding your collateral.
- Repay debt or deposit more collateral to recover.

### What happens if my Health Level reaches 0%?

Your margin account enters liquidation, where a portion of your collateral is sold to repay debt and to bring the health level back above 0%.

- 5% liquidation fee applies.
- Collateral is liquidated as minimally as possible in order to bring the health level back above 0%. Remaining collateral stays in your account.

🔗 [Liquidation Guide](../src/03-margin-accounts/liquidation.md)

## **Troubleshooting & Errors**

### What are the main transaction errors users may encounter in Glow Finance?

There are three primary transaction errors that users may face when performing borrow, withdraw, or deposit transactions:

1. Pool Limit Error (Deposit/Borrow Limit Reached)
    - Occurs when the deposit or borrow amount exceeds the set pool limits.
    - Users will see an error message indicating the maximum allowable amount for deposit or borrowing.
    - The UI will provide an underlined clickable value that, when clicked, will auto-fill the input field with the highest allowable amount.
2. Liquidity Error (Insufficient Pool Liquidity)
    - Occurs when there are insufficient funds in the pool to fulfill a withdrawal or borrow request.
    - The error message will indicate the maximum amount the user can withdraw or borrow at that moment.
    - Like the pool limit error, the UI includes a clickable input value for easy adjustment.
3. Health Level Error (Account Below Minimum Health Level)
    - Occurs when a withdrawal or borrow transaction would reduce the Health Level (HL) below the minimum threshold (10%).
    - To prevent liquidation, Glow Finance blocks any transaction that would lower HL below the required safety level.
    - Users will see an error message explaining the situation and will need to adjust their transaction amount.

### Why is my transaction failing?

- Insufficient SOL for gas fees.
- Network congestion.
- Invalid wallet connection.

### How does the UI help users avoid errors?

- Clickable fixes for easy action: Error messages include underlined values that, when clicked, auto-adjust the input to the highest valid amount.
- Clear warnings: Users see messages before executing transactions to avoid failed attempts.
- Health level preview: The slider dynamically updates to show how each action affects the account’s risk.

### Can users adjust their input directly from the error message?

Yes! The underlined value in the error message is dynamic and clickable. Clicking on it will automatically adjust the user’s input to the highest possible valid amount.

### Why is my borrow transaction failing?

- Not enough liquidity in the lending pool.
- If this was the case, you will see the following error message:

<img
  src="/img/faq-3.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

- Your borrow limit is reached.
- Your Health Level would drop below 5%, triggering a safety block. If this was the case, you will see the following error message:

<img
  src="/img/faq-4.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

### Why can’t I withdraw even though I have enough balance?

- Not enough liquidity in the pool → Deposits from other users are needed before funds can be withdrawn.
- Health Level constraint → Your withdrawal would put your account at risk.

**Solution:**

- Check the available pool liquidity.
- Lower your withdrawal amount to match available liquidity.
- Wait until other users deposit more to the pool so that you can withdraw. The lending rates for a pool with low liquidity will be high, designed to quickly attract more deposits so that users who want to withdraw will have more available liquidity to withdraw from.

🔗 [Liquidity Guide](../src/03-margin-accounts/liquidation.md)

### Why is my transaction failing due to pool liquidity or limits?

Your transaction may be blocked due to one of the following reasons:

- Insufficient Liquidity – The pool doesn’t have enough available liquidity for the requested withdrawal or borrow. More liquidity needs to be added before the transaction can proceed.
- Deposit Limit Reached – Each pool has a maximum deposit limit. If your deposit exceeds this limit, you won’t be able to proceed.
- Borrow Limit Reached – Each pool has a maximum borrow limit. If you try to borrow more than what the pool allows, the transaction will be restricted.
- Health Level Too Low – If withdrawing or borrowing would drop your Health Level below 6.0%, the transaction will be blocked to prevent immediate liquidation.

### How does Glow determine the max borrow/withdraw amount?

Glow calculates this based on:

- Your margin account's collateral.
- The pool’s available liquidity.
- Health Level requirements (minimum level after a transaction is 10%).

This ensures borrowers don’t over-leverage.

### Why can’t I deposit or borrow?

- Deposit limit exceeded.
- Borrow limit exceeded.
- Liquidity too low.

### What does the “Health level Violation” error mean?

The maximum leverage available when borrowing is equal to the amount that would leave the account's Health Level at exactly 6.0%. If a transaction would reduce the Health Level below this threshold, a "Health Level too low" error will appear at the bottom of the panel as shown below.

<img
  src="/img/faq-5.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

### What does the “Pool Deposit Limit Violation” error mean?

The Pool Deposit Limit Violation error appears when your deposit exceeds the maximum amount allowed in the pool. Each pool has a set limit on how much can be deposited at a given time. If you encounter this error:

- You can only deposit up to the remaining deposit limit shown in the error message.
- The limit may increase over time or if other users withdraw from the pool.
- Clicking the underlined amount in the error message will auto-fill the maximum allowed deposit amount.

This safeguard ensures liquidity balance and prevents overloading the pool. Clicking the underlined link in the error messaging will input the maximum allowable amount of tokens to deposit without violating the limit.

<img
  src="/img/faq-6.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

The images below show the two places in the app UI where you can check the current deposit limit for an asset, and the current amount of that asset borrowed globally across the protocol:

![](/img/faq-7.png)

![](/img/faq-8.png)

### What does the “Pool Borrow Limit Violation” error mean?

The Pool Borrow Limit Violation error appears when your borrowing request exceeds the maximum amount allowed for that pool. Each lending pool has a set borrow limit to ensure stability and liquidity.

If you encounter this error:

- You can only borrow up to the remaining borrow limit shown in the error message.
- The limit may increase over time or as other users repay their loans.
- Clicking the underlined amount in the error message will auto-fill the maximum allowed borrow amount (note that this has the same functionality as clicking the “Borrowable” field above the leverage slider).

This safeguard ensures that the protocol remains liquid and prevents excessive borrowing.

Clicking the underlined link in the error messaging will input the maximum borrowawble amount of tokens without violating the limit, just as clicking the “borrowable” field towards the top of the panel would do.

<img
  src="/img/faq-9.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

The images below show the two places in the app UI where you can check the current borrow limit for an asset, and the current amount borrowed of that asset globally across the protocol:

![](/img/faq-10.png)

![](/img/faq-11.png)

### What does the “Pool Liquidity Violation” error mean?

This error occurs when the Glow pool doesn’t have enough available liquidity to fulfill your withdrawal/borrow request.

For withdrawals/borrows: If the pool has insufficient liquidity to lend the requested amount, you won’t be able to withdraw/borrow until more liquidity is added.

You can only withdraw or borrow up to the remaining available liquidity in the pool. The error message will display the maximum amount you can transact, and clicking the underlined text will automatically adjust your input to match the available amount.

**Solutions:**

- Wait for new deposits from other users to increase pool liquidity.
- Try withdrawing/borrowing a smaller amount.

<img
  src="/img/faq-1.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

### What does the “Pool Utilization Violation" error mean?

This error appears when a borrow/withdraw action would push the utilization of the pool above 95%, which Glow prevents to ensure enough liquidity remains available for other users.

- Glow enforces a [95% utilization cap](../src/04-margin-pools/optimized-lending-pool-mechanics.md) on all pools to maintain protocol health and solvency.
- You’ll need to **reduce your input amount**, or wait until **more liquidity is added** to the pool.
- This error can appear on both borrow and withdraw panels when pool liquidity is nearly fully used.

<img
  src="/img/faq-13.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>


### Why do I see “This token cannot be borrowed”?

This error appears when a token is **not enabled for borrowing** in Glow Finance. Even if you have sufficient collateral and your Health Level is high, some tokens are **deposit-only** and cannot be borrowed through the protocol.

These tokens may still count towards account collateral, but cannot be borrowed.

<img
  src="/img/faq-14.png"
  style={{ maxWidth: "400px", width: "100%", height: "auto", display: "block", margin: "0 auto" }}
/>

### Why did my transaction fail with “your account is being liquidated”?

This error means that your **margin account is currently undergoing liquidation** due to the health level for that account reaching 0.0%.

During liquidation, all actions—like deposits, borrows, and withdrawals—are temporarily blocked until the process completes.

Since the liquidation process typically completes within a few seconds, it’s rare to encounter this message unless your account is critically unhealthy and you are online during a volatile market swing.

Glow’s protocol uses **partial liquidations** to preserve as much of your position as possible. However, in exceptional cases where prices move rapidly, multiple minimal liquidations may occur in quick succession. For full details, refer to the [Liquidation article](../src/03-margin-accounts/liquidation.md).

### What errors can occur when using the Max button?

There are three primary errors users might encounter when withdrawing or borrowing:

1. Health Level Below 10%
    - Error: The transaction is blocked if it would reduce Health Level below 10%.
    - Fix: Adjust the amount to stay above 10%.
2. Liquidity Error (Insufficient Pool Liquidity)
    - Error: The pool doesn’t have enough liquidity to fulfill the full withdrawal/borrow.
    - Fix: Click the underlined, dynamic input value in the error message to auto-adjust the amount.
3. Pool Limit Exceeded (Deposit/Borrow Limit Reached)
    - Error: The amount entered would exceed the current deposit/borrow cap of the pool.
    - Fix: Click the underlined text in the error to auto-set the valid max amount.

### How does Glow Finance ensure users don’t exceed pool limits?

- Each lending pool has a maximum deposit limit and a maximum borrow limit.
- If a user inputs a value exceeding these limits, the transaction button is disabled, and an error message is displayed.
- The message contains an underlined, dynamic input value showing the highest allowable deposit or borrow amount, making it easy to adjust the transaction.

Example:
Depositing this amount would exceed the deposit limit for this pool. Currently, this pool can only support adding up to **remaining_token_deposit_amount** tokens until the limit is raised, or other users withdraw.

### What happens when a user tries to withdraw more than what’s available in the pool?

- The withdrawal is limited by the current liquidity in the pool.
- If a user attempts to withdraw more than the available balance, the transaction is blocked, and a message informs them of the maximum withdrawable amount.

Example:
Withdrawing this amount would exceed the amount of deposited liquidity currently available in this pool. Currently, this pool can only support withdrawing up to **remaining_token_liquidity_amount** tokens until more tokens are deposited."*

## **Fees & Costs**

### What fees does Glow Finance charge?

- Borrowing Fee: 20% of interest paid by borrowers.
- Liquidation Fee: 5% of liquidated amount.
- glowSOL Restaking Fee: 0% (No staking fees!).

🔗 [Fee Structure](../src/fees.md)

### Why does my balance show less than expected after a trade?

- Slippage: The price moved between your order and execution.
- Health Level Adjustments: If borrowing occurs, your effective balance may change.

## **Advanced Topics**

### Can I use borrow against glowSOL?

Yes! You can use glowSOL as collateral and borrow against it.

### Does Glow support external integrations?

Yes! Glow integrates with DeFi protocols using Adapters to connect to:

- Solayer (Restaking).
- Jupiter (will be integrated after the first recipe release).

### What is Glow Recipes?

Glow Recipes help user execute trading strategies that combine multiple steps into one action.

### Are there plans to improve the borrowing/withdrawing experience?

Yes! Based on user feedback, Glow Finance is working on:

- Improved balance labels to clearly differentiate between:
    - Deposited Balance
    - Withdrawable Amount
    - Borrowable Amount
- Slider improvements → A mark will be added to indicate the true max amount users can withdraw/borrow safely.
- More visible warnings when an action could lower Health Level too much.
