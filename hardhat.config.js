require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    localHost: {
      url: 'http://127.0.0.1:8545/',
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cvEAmq2UoNygB8DnnPITtxJ2ZuvgLrdM',
      accounts: ['a0d736eb6fbe67b9e5778bbf2124f9908cbddfe1ee066ebcc52e29f47d08d947'],
      chainId: 4,
    }
  },
  etherscan: {
    apiKey: 'ZAXFSZWTJQET98UBWVTBNEQ7118Y58JB8H',
  }
};
