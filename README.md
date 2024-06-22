# Decentralized Crowdfunding Platform

## Overview

This project is an intuitive web3 application for crowdfunding projects using Ethereum. It allows users to create, contribute to, and monitor crowdfunding campaigns securely and transparently. Built with React, Solidity smart contracts, and Ethers.js, it leverages MetaMask for wallet interactions.

## DESCRIPTION

This decentralized crowdfunding platform is built on the Ethereum blockchain. It empowers entrepreneurs, creators, and backers by providing a transparent and secure environment for fundraising.contributors can participate using Ethereum (ETH) or other supported cryptocurrencies. Smart contracts handle fund management, ensuring trust and accountability. The user-friendly interface integrates with MetaMask, allowing seamless wallet interactions.

## Technologies Used

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white) ![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white) ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![Metamask](https://avatars.githubusercontent.com/u/11744586?s=48&v=4) ![Hardhat](https://hardhat.org/_next/static/media/hardhat-logo.5c5f687b.svg)

- **Solidity**: Programming language for Ethereum smart contracts.
- **Ethers.js**: JavaScript library for Ethereum interactions.
- **MetaMask**: Browser extension for Ethereum wallet management.
- **Hardhat**: Development environment for Ethereum smart contracts.

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MetaMask browser extension

### Steps

1. Clone the repository:git clone https://github.com/amandeep-sharmaa/EthAvaxModule2
2. Install dependencies: `npm i`
3. Start the local blockchain (Hardhat): `npx hardhat node` 
4. Deploy the smart contracts (Hardhat): `npx hardhat run --network localhost scripts/deploy.js`
5. Start the development server: `npm run dev`


### Configuring MetaMask

1. Open MetaMask and go to Settings.
2. Add a custom network:
   - Network Name: Hardhat Localhost
   - New RPC URL: http://127.0.0.1:8545/
   - Chain ID: 31337
   - Currency Symbol: ETH
3. Import accounts using private keys provided by Hardhat for testing.

## Usage

1. Connect MetaMask to the Hardhat local network.
2. Create a crowdfunding campaign.
3. Share the campaign link with potential contributors.
4. Contributors can fund the campaign by entering the amount of Ether and clicking "Contribute".
5. Campaign creators can monitor funds raised and withdraw funds when the goal is met.

## Contract Details

The smart contracts manage crowdfunding campaigns, including contributions and funds withdrawal upon completion.

## Configuration

The `hardhat.config.js` file configures the development environment for deploying and testing smart contracts. It specifies the Solidity version and required libraries.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your improvements.

## Authors

Amandeep Sharma

inspireamandeep1@gmail.com

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

Feel free to customize this README to match your project’s specifics. Happy crowdfunding! 🚀🌟

