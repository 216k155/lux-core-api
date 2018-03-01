var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
    name: 'livenet',
    magic: hex('f973c9a7'),
    addressVersion: 48,
    privKeyVersion: 155,
    P2SHVersion: 5,
    hkeyPublicVersion: 0x0728a24e,
    hkeyPrivateVersion: 0x03d8a1e5,
    genesisBlock: {
        hash: hex('00000759bb3da130d7c9aedae170da8335f5a0d01a9007e4c8d3ccd08ace6a42'),
        merkle_root: hex('e08ae0cfc35a1d70e6764f347fdc54355206adeb382446dd54c32cd0201000d3'),
        height: 0,
        nonce: 986946,
        version: 1,
        prev_hash: buffertools.fill(new Buffer(32), 0),
        timestamp: 1507656633,
        bits: 0x1e0fffff
    },
    dnsSeeds: [
        '209.250.254.156',
        '45.76.114.209',
        '5.189.142.181',
        '5.77.44.147'
    ],
    defaultClientPort: 26868,
    lastPoWBlock: 6000000
};


exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('546756ab'),
  addressVersion: 19,
  privKeyVersion: 139,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x3a8061a0,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1454059,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
