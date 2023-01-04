require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space struggle cost spice protect half end army ghost'; 
let testAccounts = [
"0x6886e172c036d837ed5448aa473801b8597459f06f4cd030e43dd53ed264b7be",
"0xfc64cd322e620704197938bc888b7ddf535501eeac67e8b59d6786682ab0861a",
"0xf9b98a38fb4e7d95eaf367e0aace4d0fcf1547e2614bebb612b37bf57c9ae5de",
"0xefa77b3f026422d100aaf3c0cdbb8b40aa42aed780757db2674717d770d79579",
"0x349a2e98d943b38edb321cc199b34d99fb809bb54e69a8b8a1c1d11bdf49e5da",
"0x0482316311adb9bf3b2e9527d93600a7000ef7d56f666085be4f7f46a8f15c81",
"0x844bbd5ead2fd670262b9653c1df4046779f5f2052ecd65f2ac3b0f4ebbdd197",
"0x8858e51ed11ea073a04fdbe0296a0755c225979d7d3e50561e6917085ad5b38e",
"0x19ed80456d1b26e179fc86d720a12799830a8a303e144312c8e9fcc5e8981333",
"0x9e81a0941a4f91891292ddc208f3672addcac91b3fb79e29d4bbe936e06b1c00"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

