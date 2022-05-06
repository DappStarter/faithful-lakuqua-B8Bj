require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember method hidden process front segment'; 
let testAccounts = [
"0xeda028af07dd181b0504804401977c9fdae5e7e591bec4f5959712b420ebdf16",
"0x1f8d4d0b56ef6cf4f1a0418a12abb3aa601cdbd99099b6f29026b0dc1cdc10b5",
"0xed4e575cefd578a7183165313d623e9e5350a6f779b7cbd98b86a8422bff6a12",
"0x4bf0e4b32c98ffd8adaf0f33098e086d9784f614f6265d1e6ccd2ba346481f63",
"0x51c2e9246cdfeb2a027615ddc47a98b48d3a5dc5f034163b3c28ac8c4ef14357",
"0x0d63ee962066ea20486dc667f741428ad584135a9f9422116992718b24e99904",
"0x32f4d36fc36b9f920096cb4a04cfce769a5b733198c7a8b2d056c8bcdc93e630",
"0x25b08c167160dd005221423171ec12f9753ed2a737bad95b8415882d3f45df33",
"0xd3227a3a4b36804851b8edfe6e8e27c31f79a91d068c11493b00a5e06a26c4cd",
"0x3531fa1dc86ada1e843b4c30ce61b0fb6b8963ef7f4a593c449ddcddcfe1e16c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

