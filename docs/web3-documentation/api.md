# Alchemy Node API Walkthrough (Ethereum Mainnet & Testnets)

> Scope: This guide focuses on **Ethereum mainnet and Ethereum testnets (Sepolia, Holesky)** using Alchemy’s **Node API** (JSON‑RPC). It provides a step‑by‑step workflow: environment setup → reading data → inspecting blocks → sending transactions → troubleshooting. Optional multi‑chain notes are included at the end for context.

## References

- Alchemy **Node API Overview**.
- Alchemy **Ethereum API Quickstart** (project setup, getting an API key).
- Alchemy **eth_getBalance** reference (method signature, examples).
- Alchemy **RPC URLs & network pages** (copy‑paste endpoints, chain IDs).
- ``JSON‑RPC 2.0`` specification (request/response shape & error codes).

---

## 1) Prerequisites & Environment

### 1.1 Create an Alchemy app & get your API key

1. Sign in and create an app from the **Alchemy Dashboard**.
2. Choose a **network** (Mainnet, Sepolia, or Holesky) — you can switch networks any time by changing the base URL.

### 1.2 Base JSON‑RPC URLs (HTTP)

Replace `YOUR_API_KEY` with your actual key.

```text
Mainnet  : https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY
Sepolia  : https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY
Holesky  : https://eth-holesky.g.alchemy.com/v2/YOUR_API_KEY
```
(See Alchemy’s network pages for current endpoints and chain IDs.)

### 1.3 Minimal request shape (JSON‑RPC 2.0)

All calls are `POST` requests with a JSON body:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_blockNumber",
  "params": []
}
```

(JSON‑RPC 2.0 requires `jsonrpc`, `id`, `method`, and `params`.)

### 1.4 Recommended tooling

- **curl** for quick checks
- **JavaScript** (Node 18+): `ethers` v6 or raw `fetch`
- **Python**: `web3` (web3.py)

---

## 2) Quick Connectivity Check

Use `eth_blockNumber` to confirm your URL + key work:

### curl

```bash
curl -s https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY   -H "Content-Type: application/json" -X POST   -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```

#### Expected response example

```json
{"jsonrpc":"2.0","id":1,"result":"0x13b6c2"}   // hex block number
```

---

## 3) Read Balances with `eth_getBalance`

### 3.1 What it does

Returns the account balance (in **Wei**) for a given address at a specified block tag/number.

### 3.2 Parameters

- `address` (string) — the 20‑byte hex address (0x‑prefixed)
- `block` (string | hex) — `"latest"`, `"earliest"`, `"pending"`, or a **hex block number**

### 3.3 Example A — Latest balance (Sepolia)

#### curl

```bash
curl -s https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY   -H "Content-Type: application/json" -X POST   -d '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"eth_getBalance",
    "params":["0x00000000219ab540356cBB839Cbe05303d7705Fa","latest"]
  }'
```

#### Sample Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x38d7ea4c68000"  // 0.01 ETH in Wei
}
```

### Convert to ETH

```
1 ETH = 10^18 Wei
```

### 3.4 Example B — Historical balance at a specific block (Mainnet)

Pass a **hex block number** (e.g., `0x10d4f`):

```bash
curl -s https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY   -H "Content-Type: application/json" -X POST   -d '{
    "jsonrpc":"2.0",
    "id":2,
    "method":"eth_getBalance",
    "params":["0x742d35Cc6634C0532925a3b844Bc454e4438f44e","0x10d4f"]
  }'
```

### 3.5 JS Example (ethers v6)

```js
import { JsonRpcProvider, formatEther } from "ethers";

const provider = new JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY");
const addr = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

const wei = await provider.send("eth_getBalance", [addr, "latest"]);
console.log("Balance (ETH):", formatEther(BigInt(wei)));
```

### 3.6 Python Example (web3.py)

```python
from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"))
addr = Web3.to_checksum_address("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")
wei = w3.eth.get_balance(addr)  # latest by default
eth = w3.from_wei(wei, "ether")
print("Balance (ETH):", eth)
```

> **Tip:** Alchemy’s `eth_getBalance` reference shows canonical request/response structure.

---

## 4) Inspect Blocks with `eth_getBlockByNumber`

### 4.1 What it does

Fetches a block by number. You can choose **full transactions** (`true`) or **only tx hashes** (`false`). (Standard JSON‑RPC behavior.)

### 4.2 Example A — Light block (tx hashes only), Sepolia

```bash
curl -s https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY   -H "Content-Type: application/json" -X POST   -d '{
    "jsonrpc":"2.0",
    "id":3,
    "method":"eth_getBlockByNumber",
    "params":["latest", false]
  }'
```

## Sample response (truncated example)

```json
{
  "jsonrpc":"2.0",
  "id":3,
  "result": {
    "number": "0x13b6c5",
    "hash": "0x...",
    "parentHash": "0x...",
    "miner": "0x...",
    "timestamp": "0x66f...",
    "transactions": ["0xabc...", "0xdef...", "0x..."]
  }
}
```

### 4.3 Example B — Full transactions, Mainnet

```bash
curl -s https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY   -H "Content-Type: application/json" -X POST   -d '{
    "jsonrpc":"2.0",
    "id":4,
    "method":"eth_getBlockByNumber",
    "params":["0x10d4f", true]
  }'
```

#### JS (ethers v6)

```js
import { JsonRpcProvider } from "ethers";
const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY");
const block = await provider.send("eth_getBlockByNumber", ["latest", true]);
console.log(block.number, block.transactions.length);
```

#### Python (web3.py)

```python
from web3 import Web3
w3 = Web3(Web3.HTTPProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"))
block = w3.eth.get_block("latest", full_transactions=True)
print(block.number, len(block.transactions))
```

---

## 5) Send Transactions with `eth_sendRawTransaction`

>**NOTE:** You **must** sign locally; the Node API will **not** sign for you. The method broadcasts a raw, already‑signed transaction (hex string). (Standard ``JSON‑RPC``.)

### 5.1 Workflow Summary

1) Build the tx (`to`, `value`, `gas`, `gasPrice`/`maxFee`, `maxPriorityFee`, `nonce`, `chainId`)  
2) **Sign locally** with your wallet key (remember to never share your private keys)  
3) Send via `eth_sendRawTransaction`  
4) Poll `eth_getTransactionReceipt` until confirmed

### 5.2 JS end‑to‑end (ethers v6, Sepolia)

```js
import { Wallet, JsonRpcProvider, parseEther } from "ethers";

const provider = new JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY");
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

const to = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
const nonce = await provider.getTransactionCount(wallet.address, "latest");

const tx = {
  to,
  value: parseEther("0.001"),
  nonce,
  // Either legacy:
  // gasPrice: (await provider.getFeeData()).gasPrice,
  // Or EIP-1559:
  ...await provider.getFeeData(), // sets maxFeePerGas & maxPriorityFeePerGas
  gasLimit: 21000,
  chainId: 11155111 // Sepolia
};

const sent = await wallet.sendTransaction(tx);
console.log("tx hash:", sent.hash);
const receipt = await sent.wait();
console.log("mined in block:", receipt.blockNumber);
```

### 5.3 Raw JSON‑RPC (curl)

```bash
SIGNED="0xf86b808504a817c80082520894..."
curl -s https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY   -H "Content-Type: application/json" -X POST   -d '{
    "jsonrpc":"2.0",
    "id":5,
    "method":"eth_sendRawTransaction",
    "params":["'"$SIGNED"'"]
  }'
```

#### Response Example

```json
{"jsonrpc":"2.0","id":5,"result":"0x5e1d3a76fbf824220e..."}
```

### 5.4 Python (web3.py, EIP‑1559 example)

```python
import os
from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"))
acct = w3.eth.account.from_key(os.environ["PRIVATE_KEY"])

tx = {
  "to": "0x00000000219ab540356cBB839Cbe05303d7705Fa",
  "value": w3.to_wei(0.001, "ether"),
  "nonce": w3.eth.get_transaction_count(acct.address),
  "chainId": 11155111,  # Sepolia
  "gas": 21000,
  "maxFeePerGas": w3.to_wei(30, "gwei"),
  "maxPriorityFeePerGas": w3.to_wei(1.5, "gwei"),
  "type": 2
}
signed = w3.eth.account.sign_transaction(tx, private_key=os.environ["PRIVATE_KEY"])
tx_hash = w3.eth.send_raw_transaction(signed.rawTransaction)
print("tx hash:", tx_hash.hex())
```

---

## 6) Common Errors & Troubleshooting

Node API follows `JSON‑RPC 2.0` error semantics.

Below, you'll find the typical error object you may encounter when using Node API:

```json
{
  "jsonrpc":"2.0",
  "id":1,
  "error": {"code": -32602, "message": "Invalid params"}
}
```

(Error codes are defined by `JSON‑RPC 2.0`; `-32000..-32099` are server‑defined.) 

## Frequent issues when writing transactions

Below, you'll find issues you may encounter when writing transactions:

- **Insufficient funds** (account lacks ETH for value + gas) — fund your testnet account via a faucet; lower `value` or adjust fees.
- **Nonce too low / already used** — query `getTransactionCount(address,"latest"|"pending")` and set the correct nonce.
- **Replacement transaction underpriced** — when replacing, increase fee parameters sufficiently.
(General JSON‑RPC/Ethereum behavior; see spec for error structure.)

## Request shape problems

Below, you'll find some common request shape problems:

- `-32700 Parse error` — invalid JSON body
- `-32600 Invalid Request` — malformed JSON‑RPC envelope
- `-32601 Method not found` — typo in `method` name
- `-32602 Invalid params` — wrong param types/order
(Defined by JSON‑RPC 2.0.) 

---

## 7) Best Practices

- **Protect your API key** — keep it server‑side or in secure env vars; never expose keys in public frontends. See [Alchemy Quickstart](https://www.alchemy.com/docs/wallets/low-level-infra/quickstart) and [RPC setup](https://www.alchemy.com/docs/how-to-read-data-with-json-rpc) guidance.
- Prefer **EIP‑1559** fee fields (`maxFeePerGas`, `maxPriorityFeePerGas`); fall back to legacy `gasPrice` only if needed.
- Use **hex strings** for quantities (e.g., block numbers) and addresses with `0x` prefix (JSON‑RPC convention). 
- Test first on **Sepolia/Holesky**, then switch the **base URL** to Mainnet for production. 

---

## 8) Optional: Multi‑Chain Notes (Where Supported by Alchemy)

While this guide centers on Ethereum networks, the Node API is used across chains. You can adapt the same JSON‑RPC request pattern to other EVM chains by swapping the **base URL** to the target chain’s RPC and using the correct **chainId**. See Alchemy’s Chain APIs overview for supported chains. 

---

## 9) Appendix: Handy Snippets

**Fetch latest N blocks (JS)**
```js
import { JsonRpcProvider } from "ethers";
const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY");

const latest = await provider.send("eth_blockNumber", []);
let n = Number(latest);
const blocks = [];
for (let i = 0; i < 5; i++) {
  blocks.push(await provider.send("eth_getBlockByNumber", ["0x"+n.toString(16), false]));
  n--;
}
console.log(blocks.map(b => b.number));
```

**Get receipt & status (Python)**
```python
from web3 import Web3
w3 = Web3(Web3.HTTPProvider("https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"))
h = "0x5e1d3a76fbf824220e..."  # tx hash
rcpt = w3.eth.get_transaction_receipt(h)
print(rcpt.status)  # 1 = success, 0 = reverted
```

---

## 10) What You’ve Learned

- How to authenticate and connect to **Ethereum mainnet/testnets** via Alchemy Node API  
- How to **read** balances and blocks with `eth_getBalance` and `eth_getBlockByNumber`  
- How to **write** transactions using `eth_sendRawTransaction` with safe signing patterns  
- How to debug JSON‑RPC errors and avoid common pitfalls

For deeper reference and up‑to‑date endpoints, consult Alchemy’s Node API pages and network quickstarts. 