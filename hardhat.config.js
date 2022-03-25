require("@nomiclabs/hardhat-waffle");

const API_KEY = "api of alchemyapi";

const PRIVATE_KEY = "private key of your account";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
