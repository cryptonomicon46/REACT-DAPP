require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const URL_GOERLI = process.env.URL_GOERLI;
const GOERLI_PROJECT_ID = process.env.API_GOERLI;
const API_KEY = process.env.ETH_API_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: "https://goerli.infura.io/v3/d70d1f6a64a347ccb668f8918da99190",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      goerli: API_KEY,
    },
  },
};
