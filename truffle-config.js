const path = require("path");
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs')
const mnemonic = fs.readFileSync(".secret").toString().trim()


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic,`https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations:2,
      timeoutBlocks:1000,
      skipDryRun:true
    }
  }
};
