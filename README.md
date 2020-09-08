# MetaTransactions with Biconomy

This is a simple Dapp to perform meta transactions on Matic testnet(Mumbai) network using Biconomy.

Meta Transactions are Gasless transactions which allow users to interact with Decentralized applications having only their public/private keys pair.

Biconomy is a scalable transaction layer infrastructure which can pay blockchain transaction's gas fee for a Dapp User

1. Deploy a sample contract to matic testnet. 

   Congfiguration for matic testnet is given in truffle-config.js
   
2. Register your Dapp in Biconomy Dashboard.

   Here is the link on how to register the Dapp in Biconomy Dashboard.
   https://docs.biconomy.io/biconomy-dashboard
   i) Register Dapp and choose the network
   ii) Add smart contracts details with deployed address and abi
   iii) Configure api. These are the methods for which you need gasless transactions.
   
3. Integrate your Dapp with Bicnomy

    Here is the link on how to use Biconomy SDK with your Dapp.
    https://docs.matic.network/docs/develop/metatransactions/metatransactions-biconomy
    It is just a three step process:
    i) Install SDK
    ii) Initialize Biconomy
    iii) Initialize Dapp
    
4. Run the applications
   npm start
   
   The application tries to invoke the transaction i.e., calls contract method. But you dont need to pay the gas fee.
   
   
   


   
