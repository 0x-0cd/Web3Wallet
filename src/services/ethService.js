const { ethers } = require('ethers');
const { provider } = require('../utils/providerSelector');

// 获取ETH余额
const getBalance = async (address) => {
    try {
        const balance = await provider.getBalance(address);
        console.info(`address: ${address} balance:`, balance);
        return ethers.formatEther(balance);
    } catch (error) {
        throw new Error('Failed to fetch balance.');
    }
};

module.exports = {
    getBalance,
};