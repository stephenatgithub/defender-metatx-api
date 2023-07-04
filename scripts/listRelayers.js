require('dotenv').config();
const { RelayClient } = require('defender-relay-client');
const { appendFileSync, writeFileSync} = require('fs');

const { TEAM_API_KEY: apiKey, TEAM_API_SECRET: apiSecret } = process.env;
const client = new RelayClient({ apiKey, apiSecret });

async function main() {
    const relayer = await client.list();

    // store relayer info in file - ID is all you need if sending tx via autotask
    writeFileSync('relay.json', JSON.stringify({relayer}, null, 2));
    console.log('Relayer ID: ', relayer.relayerId);

};


main();


