---
title: "FAQ"
description: "FAQ"
sidebar_label: "FAQ"
sidebar_position: 8
---

- [General Questions](#general-questions)
- [Portfolio Management](#portfolio-management)
- [glowSOL & Restaking](#glowsol--restaking)
- [Health Level & Risk Management](#health-level--risk-management)
- [Troubleshooting & Errors](#troubleshooting--errors)
- [Fees & Costs](#fees--costs)
- [Advanced Topics](#advanced-topics)

## **General Questions**

### What is Glow Finance?

Glow Finance is a DeFi protocol on Solana offering margin accounts, leverage swaps, lending pools, and automated trading strategies to maximize capital efficiency.

### How does Glow Finance benefit users?

- One account for everything → Deposit, borrow, swap, and trade from a single margin account.
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

### What is the difference between "Withdrawable Amount" and "Borrowable Amount"?

These three terms are displayed in the transaction panel depending on the type of action and refer to different concepts in Glow Finance:

1. Withdrawable Amount → The amount you can safely withdraw without dropping your Health Level below 10%. You may click this field to input it to the panel.
2. Borrowable Amount → The maximum amount you can borrow while keeping your Health Level above 10% and considering pool liquidity constraints. You may click this field to input it to the panel.

### Why does the "Withdraw" tab show more than I can actually withdraw?

Clicking the "Max" button inputs the total amount of the asset deposited in your margin account. However, your actual withdrawable amount may be limited by your borrowed assets, as withdrawing too much could lower your Health Level below 10%, which is not allowed.

**Solutions:**

- Use the slider to adjust your withdrawal amount.
- Check the Withdrawable Balance field for the actual max amount.

### What does the Max button do?

The Max button inputs the highest amount the user can borrow or withdraw without lowering their Health Level below 10%. This ensures that users never accidentally enter liquidation risk.

For borrowing, clicking Max will set the input field to the largest amount that keeps the account’s Health Level at or above 10%.

### What is the difference between “Max,” “Withdrawable,” and “Borrowable” amounts?

- The "Max" button inputs the highest amount the user can withdraw or borrow based on their Health Level (without considering pool liquidity).
- The “Withdrawable” field dynamically displays the actual amount that can be withdrawn, factoring in pool liquidity and account health. This field is clickable, allowing users to set the input to a valid amount automatically.
- The “Borrowable” field shows the maximum amount that can be borrowed while maintaining a safe Health Level and within available pool liquidity. This field is also clickable, ensuring the input is set to an amount that won’t trigger an error.

![](/img/faq-1.png)

Example Scenarios:

- User clicks “Max”: The input field is filled with the full amount available based on account health, but an error may appear if pool liquidity is insufficient.
- User clicks “Withdrawable” field: The input field is updated with the actual amount that is safe to withdraw, ensuring the transaction can proceed.
- User clicks “Borrowable” field: The input field is updated with the maximum borrowable amount that won’t trigger a Health Level error or exceed the borrow limit.

### Why does the "Max" button for borrowing/withdrawing not select my full balance?

The Max button considers pool liquidity (ensuring there is enough available capital to withdraw or borrow).

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

![](/img/faq-3.png)

- Your borrow limit is reached.
- Your Health Level would drop below 5%, triggering a safety block. If this was the case, you will see the following error message:

![](/img/faq-4.png)

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

### What does the “Health level too low” error mean?

The maximum leverage available when borrowing is equal to the amount that would leave the account's Health Level at exactly 6.0%. If a transaction would reduce the Health Level below this threshold, a "Health Level too low" error will appear at the bottom of the panel as shown below.

![](/img/faq-5.png)

### What does the “Deposit Limit Violation” error mean?

The Deposit Limit Violation error appears when your deposit exceeds the maximum amount allowed in the pool. Each pool has a set limit on how much can be deposited at a given time. If you encounter this error:

- You can only deposit up to the remaining deposit limit shown in the error message.
- The limit may increase over time or if other users withdraw from the pool.
- Clicking the underlined amount in the error message will auto-fill the maximum allowed deposit amount.

This safeguard ensures liquidity balance and prevents overloading the pool. Clicking the underlined link in the error messaging will input the maximum allowable amount of tokens to deposit without violating the limit.

![](/img/faq-6.png)

The images below show the two places in the app UI where you can check the current deposit limit for an asset, and the current amount of that asset borrowed globally across the protocol:

![](/img/faq-7.png)

![](/img/faq-8.png)

### What does the “Borrow Limit Violation” error mean?

The Borrow Limit Violation error appears when your borrowing request exceeds the maximum amount allowed for that pool. Each lending pool has a set borrow limit to ensure stability and liquidity.

If you encounter this error:

- You can only borrow up to the remaining borrow limit shown in the error message.
- The limit may increase over time or as other users repay their loans.
- Clicking the underlined amount in the error message will auto-fill the maximum allowed borrow amount (note that this has the same functionality as clicking the “Borrowable” field above the leverage slider).

This safeguard ensures that the protocol remains liquid and prevents excessive borrowing.

Clicking the underlined link in the error messaging will input the maximum borrowawble amount of tokens without violating the limit, just as clicking the “borrowable” field towards the top of the panel would do.

![](/img/faq-9.png)

The images below show the two places in the app UI where you can check the current borrow limit for an asset, and the current amount borrowed of that asset globally across the protocol:

![](/img/faq-10.png)

![](/img/faq-11.png)

### What does the “Not enough available liquidity” error mean?

This error occurs when the Glow pool doesn’t have enough available liquidity to fulfill your withdrawal/borrow request.

For withdrawals/borrows: If the pool has insufficient liquidity to lend the requested amount, you won’t be able to withdraw/borrow until more liquidity is added.

You can only withdraw or borrow up to the remaining available liquidity in the pool. The error message will display the maximum amount you can transact, and clicking the underlined text will automatically adjust your input to match the available amount.

**Solutions:**

- Wait for new deposits from other users to increase pool liquidity.
- Try withdrawing/borrowing a smaller amount.

![](/img/faq-1.png)

### What does the “Pool Utilization Too High” error mean?

This error appears when a borrow/withdraw action would push the utilization of the pool above 95%, which Glow prevents to ensure enough liquidity remains available for other users.

- Glow enforces a [95% utilization cap](../src/03-margin-accounts/optimized-lending-pool-mechanics.md) on all pools to maintain protocol health and solvency.
- You’ll need to **reduce your input amount**, or wait until **more liquidity is added** to the pool.
- This error can appear on both borrow and withdraw panels when pool liquidity is nearly fully used.

Clicking the **“Borrowable”** or **“Withdrawable”** value will automatically input the **maximum amount** that stays within the safe limits—ensuring the transaction won’t trigger this error.

![](/img/faq-13.png)


### Why do I see “This token cannot be borrowed”?

This error appears when a token is **not enabled for borrowing** in Glow Finance. Even if you have sufficient collateral and your Health Level is high, some tokens are **deposit-only** and cannot be borrowed through the protocol.

These tokens may still count towards account collateral, but cannot be borrowed.

If you need exposure to this asset, consider **swapping into it** after borrowing another token that is borrowable.

![](/img/faq-14.png)

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
- Trading Fees: Swap fees apply when using leverage swaps.
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
