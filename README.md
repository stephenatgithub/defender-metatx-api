### Create Relayer

Create a relayer using [Defender Relay Client](https://docs.openzeppelin.com/defender/relay-api-reference)

```js
$ yarn create-relay
```

This runs a script that creates a relayer and stores the relayer API key and API secret in the projects `.env` file.


### Send token to the Relayer

```json
{
  response: {
    status: 400,
    statusText: 'Bad Request',
    data: {
      message: 'Insufficient funds: 0.03656211019499792 MATIC required but 0.0 MATIC are available for usage on the account.'
    }
  },
  message: 'Request failed with status code 400',
  request: { path: '/txs', method: 'POST' }
}
```

### Deploy contracts

Use the newly created Relayer to deploy the MinimalForwarder and Registry contracts to Goerli

```js
$ yarn deploy
```

### Verify contracts

```js
$ npx hardhat verify "0x19F8814B7ecd1bdc6550614c9EB454bD3D10fC91" "0x5e2BeE56F7BA2FE6AADBf21Fa574ffb0535B2934" --show-stack-traces
```

Successfully submitted source code for contract
contracts/Registry.sol:Registry at 0x19F8814B7ecd1bdc6550614c9EB454bD3D10fC91
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Registry on the block explorer.
https://mumbai.polygonscan.com/address/0x19F8814B7ecd1bdc6550614c9EB454bD3D10fC91#code



### Sign Using Relayer

Sign a request to register a name, this will create a request in `request.json` that we can then view

```js
$ NAME=alice yarn sign
$ cat request.json
```

We can then use the script to send the request to our relayer, and [view the transaction on Etherscan](https://goerli.etherscan.io/).  We can also view the name registrations.

```js
$ yarn relay
$ yarn events
```

### Create Autotask

Create an [Autotask using Defender Client](https://docs.openzeppelin.com/defender/autotasks-api-reference), with a webhook trigger and connected to our Goerli relayer.

```js
$ yarn create-autotask
```

This creates the autotask, saves the Autotask ID to the .env file [AUTO_TASK_ID]), and uploads the autotask code.

Grab the Autotask webhook from the web app and store in the apps `.env` file (in the `app` directory).

### Run app

We can then install dependencies using `yarn` and run the app.

```js
$ cd app
$ yarn
$ yarn start
```

1. Open app: [http://localhost:3000/](http://localhost:3000/)
2. Change to Goerli network in Metamask
3. Enter a name to register and sign the metatransaction in MetaMask
4. Your name will be registered, showing the address that created the metatransaction and the name.





### Mumbai Testnet

MetaTX relay server (Address)
0x72109B149f6701a9a7F69b5376BD3Bc29393fCB9

Implementation (ERC2771Recipient)
0x19F8814B7ecd1bdc6550614c9EB454bD3D10fC91

MinimalForwarder 
0x5e2BeE56F7BA2FE6AADBf21Fa574ffb0535B2934

