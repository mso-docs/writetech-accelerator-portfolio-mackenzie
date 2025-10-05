# MetaMask User Guide (Option B — Web3 Tool Onboarding & Common Tasks)

> Scope: This hands-on guide helps new users install MetaMask, create or import a wallet safely, fund it, switch networks, send/receive assets, swap tokens, connect to dApps, and manage approvals. It also covers security best practices, troubleshooting, and a quick glossary. Written for non‑custodial wallet beginners on **Ethereum mainnet** and common **testnets** (e.g., Sepolia).

---

## Table of Contents
1. [What is MetaMask?](#what-is-metamask)
2. [Prerequisites](#prerequisites)
3. [Install MetaMask](#install-metamask)
4. [Create or Import a Wallet](#create-or-import-a-wallet)
5. [Fund Your Wallet (Mainnet & Testnets)](#fund-your-wallet-mainnet--testnets)
6. [Add/Select Networks](#addselect-networks)
7. [View & Add Tokens](#view--add-tokens)
8. [Send & Receive Crypto](#send--receive-crypto)
9. [Swap Tokens in MetaMask](#swap-tokens-in-metamask)
10. [Connect to a dApp](#connect-to-a-dapp)
11. [Manage Approvals & Permissions](#manage-approvals--permissions)
12. [Gas Fees (EIP‑1559) & Settings](#gas-fees-eip1559--settings)
13. [Troubleshooting](#troubleshooting)
14. [Security Best Practices](#security-best-practices)
15. [Glossary](#glossary)

---

## What is MetaMask?
**MetaMask** is a non‑custodial crypto wallet and gateway to Web3. It stores your **wallet keys locally** in your browser extension or mobile app, lets you **send/receive tokens**, **swap assets**, and **connect to decentralized apps (dApps)**. You control your **secret recovery phrase (SRP)**; MetaMask (and dApps) cannot recover it for you.

---

## Prerequisites
- A supported browser: **Chrome**, **Firefox**, **Brave**, or **Edge**; or the **MetaMask mobile** app (iOS/Android).
- A secure device with up‑to‑date OS and browser.
- Optional: a **hardware wallet** (Ledger/Trezor) for added key security.

---

## Install MetaMask
### Desktop (Browser Extension)
1. Visit the **official MetaMask site** and choose your browser’s extension store.
2. Install **MetaMask** and pin it to your toolbar.
3. Open the extension — you’ll see **Create a new wallet** or **Import an existing wallet**.

> ⚠️ Always verify you’re installing the official extension. Avoid links from social media or ads.

### Mobile (iOS/Android)
1. Open the **App Store** or **Google Play** and search for **MetaMask**.
2. Install the app and open it.
3. Choose **Create** or **Import**.

---

## Create or Import a Wallet
### Create a New Wallet
1. Set a **strong password** (protects local access to MetaMask on your device).
2. Securely back up your **Secret Recovery Phrase (12/24 words)**:
   - Write it down **offline**; store in two separate secure locations.
   - Never share it; no site or staff will ever ask for it.
   - Do **not** screenshot or store it in cloud notes.
3. Confirm the SRP by selecting words in order.

### Import an Existing Wallet
1. Choose **Import** and enter your **Secret Recovery Phrase**.
2. Set a new local **password** on this device.
3. (Optional) Import via **JSON/Private key** for single accounts — note: SRP is preferred since it can regenerate multiple accounts.

> 💡 You can create multiple accounts (Account 1, Account 2, …) under the same SRP. Each has a unique address.

---

## Fund Your Wallet (Mainnet & Testnets)
### Mainnet
- **From an exchange:** Withdraw **ETH** (or tokens) to your MetaMask **0x… address**.
- **Fiat on‑ramp:** Some regions can buy ETH directly inside MetaMask (fees vary).

### Testnets (Sepolia example)
- Use a **faucet** to request test ETH for development and learning. Search “**Sepolia faucet**”, sign in (if required), and paste your **0x… address**.
- Switch MetaMask to **Sepolia** first so you can see the test ETH when it arrives.

> ⏳ Transfers can take seconds to minutes depending on network conditions.

---

## Add/Select Networks
MetaMask ships with **Ethereum Mainnet** by default. To work with testnets or other EVM networks:

1. Click your **network dropdown** (top of MetaMask).
2. Select a network (e.g., **Sepolia**) or **Add a network**.
3. For custom networks, you’ll enter:
   - **Network name** (e.g., “Sepolia”)
   - **RPC URL** (HTTPS endpoint)
   - **Chain ID** (e.g., 11155111 for Sepolia)
   - **Currency symbol** (e.g., ETH)
   - **Block explorer URL** (optional)

> ✅ If a dApp supports **Add network** via EIP‑3085, MetaMask will prompt you with the correct details automatically.

---

## View & Add Tokens
By default, MetaMask shows **ETH**. To see other tokens:

- **Auto detection:** Toggle **Auto‑detect tokens** in Settings (varies by network).
- **Manual add:** Click **Import tokens**, paste the token’s **contract address** (then symbol/decimals auto‑fill), and confirm.

> 🧭 Get the contract address from the project’s official site or a trusted block explorer page. Avoid copy‑pasting from random posts.

---

## Send & Receive Crypto
### Receive
1. Click your **account name** to copy your **0x… address**.
2. Share this address with the sender (or your exchange withdrawal form).

### Send
1. Click **Send**.
2. Paste the recipient’s **0x… address** (double‑check the first/last 4 characters).
3. Select **Asset** (ETH or an ERC‑20 token) and **amount**.
4. Choose a **gas option** (MetaMask suggests a fee; you can edit).
5. Review details and **Confirm**.

> ⚠️ Transactions are **irreversible**. If you send to the wrong address or wrong network, funds may be lost.

---

## Swap Tokens in MetaMask
1. Click **Swap** in MetaMask.
2. Select **From** (e.g., ETH) and **To** (e.g., USDC).
3. MetaMask aggregates quotes; choose the best route/price.
4. Review **slippage**, **network fee**, and **route**, then **Confirm**.
5. Wait for confirmation; the swapped token appears under your assets (add it if not auto‑detected).

> 💡 For large trades, consider slippage tolerance and route transparency (DEX aggregators vs. single DEX).

---

## Connect to a dApp
1. Open a dApp (e.g., a DEX, NFT marketplace, game).
2. Click **Connect Wallet** → **MetaMask**.
3. MetaMask shows a **connection prompt** listing **accounts** and the **permissions** requested (e.g., view address, suggest transactions).
4. **Approve** connection (or **Reject**). You can disconnect later.

**Switching accounts & networks**
- Your **active account** is the one the dApp sees; switch it via MetaMask’s account menu.
- If the dApp requires a different network, MetaMask can **switch networks** on prompt; confirm to proceed.

---

## Manage Approvals & Permissions
**Token Approvals (ERC‑20 / NFT)**
- Interacting with some dApps requires an **approval** that lets a smart contract spend your tokens/NFTs.
- When prompted, review the **spender contract** and **allowance** (unlimited vs. custom amount).
- To **revoke** or **reduce** allowances later, use:
  - MetaMask’s **Connected sites** / **Permissions** panels, and/or
  - A reputable **token approval manager** dApp (search “revoke token approvals”) and follow on‑chain revoke steps.

**Site Connections**
- In MetaMask **Settings → Security & Privacy → Connected sites**, review and **disconnect** any dApps you no longer use.

> 🔐 Limiting approvals reduces risk if a dApp or contract is compromised.

---

## Gas Fees (EIP‑1559) & Settings
Ethereum uses **EIP‑1559** fee fields:
- **Max base fee** (protocol‑determined, dynamic)
- **Max priority fee** (aka “tip” to miners/validators)
- **Max fee** (ceiling you’re willing to pay)

**In MetaMask:**
- Choose **Low / Market / Aggressive** presets or **Advanced** to set custom **max fee** and **priority fee**.
- For urgent txs (e.g., NFT mint), use a higher **priority fee**; for routine transfers, default presets are fine.

**Speed Up / Cancel**
- If a tx is pending, you can **Speed Up** (send a replacement with higher fee) or **Cancel** (send a 0‑value replacement to yourself with higher fee) — success isn’t guaranteed but often works if the original hasn’t been mined.

---

## Troubleshooting
- **“Insufficient funds for gas”**: Reduce amount, increase funds, or switch to a cheaper time; ensure you have **ETH** for gas (even when sending tokens).
- **Token not showing**: Add the **token contract** via **Import tokens**.
- **Wrong network**: Switch the network to where funds exist; assets are network‑specific.
- **Stuck transaction**: Try **Speed Up** with higher fee; if needed, **Cancel** (same nonce, higher fee). Wait for block confirmation.
- **Phishing warning / scam site**: Disconnect immediately and **revoke approvals** for suspicious contracts. Never sign messages you don’t understand.
- **Ledger/Trezor connection issues**: Update firmware, enable **contract data**, and re‑connect via MetaMask’s **Connect hardware wallet** flow.

---

## Security Best Practices
- **Protect your Secret Recovery Phrase** (offline, never share).
- Prefer **hardware wallets** for large balances.
- Lock MetaMask when not in use (click **Lock**).
- Verify **URLs**; bookmark official sites. Beware of **airdrop** or **support** scams.
- Review and **limit approvals**; revoke unused allowances.
- Keep OS, browser, and MetaMask **updated**.
- Use **distinct wallets** for day‑to‑day vs. high‑value assets.
- Consider **watch‑only** wallets for monitoring without keys.

---

## Glossary
- **Account / Address**: Your public identifier starting with **0x…**; derived from your private key.
- **Secret Recovery Phrase (SRP)**: 12/24 words that can regenerate your keys. Loss = loss of funds.
- **Gas / Fees**: Payment to validators to include your transaction in a block.
- **EIP‑1559**: Fee market mechanism with base fee + priority tip, improving fee predictability.
- **Allowance / Approval**: Permission for a contract to spend your tokens.
- **Non‑custodial**: You control your keys; no third party can restore your wallet.
- **Testnet**: Practice network with valueless tokens (e.g., **Sepolia**).

---

### Quick Checklist (for Assignments)
- [ ] Installed MetaMask on desktop or mobile
- [ ] Created/imported wallet and secured the SRP
- [ ] Funded on **Sepolia** (faucet) or Mainnet (exchange/on‑ramp)
- [ ] Added/selected correct network
- [ ] Added token (manual or auto‑detect)
- [ ] Sent and received a small test amount
- [ ] Performed a token swap with modest slippage
- [ ] Connected to a dApp, reviewed permissions, and later disconnected
- [ ] Reviewed approvals and revoked any unused allowances

---

### Attribution
Prepared for **WriteTech Accelerator – Option B (Web3 User Guide)**. This guide focuses on a safe, beginner‑friendly path to using MetaMask for Ethereum mainnet and testnets.
