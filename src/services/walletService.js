const { ethers, Wallet } = require('ethers');
const { provider } = require('../utils/providerSelector');
const { generateWallet } = require('../utils/walletGenerator');
// const crypto = require('../utils/crypto');
const { writeFileSync, readFileSync } = require('fs');
require('dotenv').config();

const createUnsafeWallet = async () => {
    const wallet = Wallet.createRandom();
    return wallet;
};

const createWallet = async () => {
    try {
        const wallet = await generateWallet();
        return JSON.stringify(wallet);
    } catch (error) {
        throw new Error('Create wallet error.');
    }
};

module.exports = {
    createUnsafeWallet,
    createWallet,
};