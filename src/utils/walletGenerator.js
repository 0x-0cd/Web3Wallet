const {
    generateMnemonic,
    mnemonicToEntropy,
} = require('ethereum-cryptography/bip39');
const { HDKey } = require('ethereum-cryptography/hdkey');
const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { keccak256 } = require('ethereum-cryptography/keccak');
const { bytesToHex } = require('ethereum-cryptography/utils');
const { wordlist } = require('ethereum-cryptography/bip39/wordlists/czech');

/**
 * 下面这些加密相关的函数涉及到一系列钱包生成算法和原则，初次学习不必深究其原理
 * 详情参考https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
 */

// 由wordlist生成一组助记词，并计算其熵
function _generateMnemonic() {
    const strength = 256;
    const mnemonic = generateMnemonic(wordlist, strength);
    const entropy = mnemonicToEntropy(mnemonic, wordlist);
    return { mnemonic, entropy };
}

// 根据熵计算出HD钱包的root key
function _getHdRootKey(_mnemonic) {
    return HDKey.fromMasterSeed(_mnemonic);
}

// 生成HD钱包的所有必要信息
function _generateHDWalletMeta(_hdRootKey, _accountIndex) {
    const _privateKey = _hdRootKey.deriveChild(_accountIndex).privateKey;
    const _publicKey = secp256k1.getPublicKey(_privateKey);
    const _address = keccak256(_publicKey).slice(-20);
    return { _privateKey, _publicKey, _address };
}

/**
 * 生成新钱包的算法，使用BIP39提案的算法生成HD钱包，并计算出钱包0的公私钥和以太坊主网地址
 * @returns {Object} 包含助记词、地址、公钥和私钥的对象
 */
async function generateWallet() {
    const { mnemonic, entropy } = _generateMnemonic();
    const hdRootKey = _getHdRootKey(entropy);

    // 钱包0的公私钥和以太坊主网地址
    const walletMeta = _generateHDWalletMeta(hdRootKey, 0);

    console.log(`Account One Wallet Address: 0x${bytesToHex(walletMeta._address)}`);
    return {
        mnemonic: mnemonic,
        address: `0x${bytesToHex(walletMeta._address)}`,
        publicKey: bytesToHex(walletMeta._publicKey),
        privateKey: bytesToHex(walletMeta._privateKey)
    };
}

module.exports = {
    generateWallet,
    // importMnemonic
};