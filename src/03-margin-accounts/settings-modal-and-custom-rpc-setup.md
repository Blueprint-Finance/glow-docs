---
title: "Settings Modal & Custom RPC Setup"
description: "User-Configurable Settings"
sidebar_label: "Settings Modal and Custom RPC Setup"
sidebar_position: 4
---


Glow Finance provides a robust set of configurable options to enhance user experience, including operational preferences and the ability to connect to custom RPC nodes for improved performance and reliability.

### 1. Accessing the Settings Modal

The **Settings Modal** is the central hub for managing user preferences, offering control over various aspects such as time and date formats, and most importantly, the connection to RPC nodes.

![](/img/settings-1.png)

### **Key Features**:

- **Node Selection**: Choose between default and custom RPC nodes.
- **Time Display and Date Format**: Customize how time and date are displayed in the application.

![](/img/settings-2.png)

## **Default vs. Custom RPC Node Setup**

RPC nodes facilitate the communication between the application and the blockchain. Glow Finance offers pre-configured nodes but also allows users to add their own.

### **Default RPC Nodes**

- Pre-configured options, such as **Helius RPC - Mainnet** and **Helius RPC - Devnet**, are available to users. The Devnet option allows users to experiment with the application in a risk-free environment, enabling them to test features and workflows without using real money.
- Helius RPC - Mainnet, ****Automatically selected to ensure seamless blockchain interaction.

### **Custom RPC Nodes**

Custom nodes can be configured to improve performance, enhance privacy, or access specific network features.

![](/img/settings-3.png)
### **Step-by-Step Guide**:

1. **Select 'Custom RPC URL'** from the Node Selection dropdown.
2. **Enter the RPC URL** (e.g., `https://rpc.ftm.tools/`).
3. **Test the Connection**:
    - Use the **Test** button to validate the connection.
    - A green success message confirms a valid setup.

![](/img/settings-4.png)

    - If the connection fails, a red error message will appear.

![](/img/settings-5.png)

4. **Save Preferences** once the connection is successfully tested.

## **Testing and Validating Custom RPC Connections**

To ensure optimal performance:

1. **Connection Test**: After entering the custom RPC, click **Test**. A successful connection will show a confirmation message.
2. **Transaction Simulation**: Perform a simple operation (e.g., check wallet balance) to validate the connection.
3. **Status Indicator**: Visual confirmation of connection stability is provided in the modal.

## **Troubleshooting Common RPC Issues**

**Yellow Banner (Moderate Performance Issues)**:

The yellow banner indicates "degraded performance," signaling that the Solana network is experiencing moderate issues. Transactions may encounter delays or require multiple attempts to confirm but are likely to go through with some persistence.

![](/img/settings-6.png)

**Orange Banner (Severe Performance Issues)**:

The orange banner signifies "severe performance issues," warning users that the Solana network is facing critical disruptions. Transactions will likely fail to send or confirm. Users are advised to consider connecting with a different RPC node in the settings to potentially mitigate these issues.

![](/img/settings-7.png)

### 1. **Invalid URL**

- **Issue**: Connection fails due to incorrect URL formatting.
- **Solution**: Ensure the URL starts with `http://` or `https://`.

### 2. **Authentication Error**

- **Issue**: Some nodes require authentication.
- **Solution**: Double-check credentials and re-enter them.

### 3. **Connection Timeout**

- **Issue**: RPC node is slow or unresponsive.
- **Solution**: Use a different node or check your network.

### 4. **Incorrect Network**

- **Issue**: Node mismatch (Mainnet vs Devnet).
- **Solution**: Select the correct network in Node Selection.
