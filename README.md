# 🏗 Scaffold-ETH 2 (Bun Edition)

<h4 align="center">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>

🧪 An open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain. This is the Bun-based version of Scaffold-ETH 2, offering faster performance and better developer experience.

⚙️ Built using NextJS, RainbowKit, Foundry/Hardhat, Wagmi, Viem, Typescript, and Bun.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

![Debug Contracts tab](https://github.com/scaffold-eth/scaffold-eth-2/assets/55535804/b237af0c-5027-4849-a5c1-2e31495cccb1)

## Requirements

Before you begin, you need to install the following tools:

- [Bun (>= v1.2.4)](https://bun.sh)
- [Node (>= v20.18.3)](https://nodejs.org/en/download/) (required for some dependencies)
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2 (Bun Edition), follow the steps below:

1. Clone this repository:

```bash
git clone https://github.com/scaffold-eth/scaffold-eth-2-Bun.git
cd scaffold-eth-2-Bun
```

2. Install dependencies:

```bash
bun install
```

3. Run a local network in the first terminal:

```bash
bun chain
```

This command starts a local Ethereum network that runs on your local machine and can be used for testing and development. Learn how to [customize your network configuration](https://docs.scaffoldeth.io/quick-start/environment#1-initialize-a-local-blockchain).

4. On a second terminal, deploy the test contract:

```bash
bun run deploy
```

This command deploys a test smart contract to the local network. You can find more information about how to customize your contract and deployment script in our [documentation](https://docs.scaffoldeth.io/quick-start/environment#2-deploy-your-smart-contract).

5. On a third terminal, start your NextJS app:

```bash
bun start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

Visit the [What's next section of our docs](https://docs.scaffoldeth.io/quick-start/environment#whats-next) to learn how to:

- Edit your smart contracts
- Edit your deployment scripts
- Customize your frontend
- Edit the app config
- Writing and running tests
- [Setting up external services and API keys](https://docs.scaffoldeth.io/deploying/deploy-smart-contracts#configuration-of-third-party-services-for-production-grade-apps)

## Available Scripts

- `bun chain` - Start a local blockchain
- `bun deploy` - Deploy contracts
- `bun start` - Start the NextJS app
- `bun test` - Run tests
- `bun compile` - Compile contracts
- `bun format` - Format code
- `bun lint` - Lint code
- `bun account` - Generate or import accounts
- `bun verify` - Verify contracts on Etherscan

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn all the technical details and guides of Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
