const { ethers } = require('ethers');
require('dotenv').config();

/**
 * `localProvider` - 本地以太坊节点，由Hardhat启动，默认端口为8545
 * `mainnetProvider` - 主网节点
 * `testnetProvider` - 测试网节点
 */
const localProvider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');

const mainnetProvider = new ethers.AlchemyProvider(
    'mainnet',
    process.env.ALCHEMY_API_KEY
);

const testnetProvider = new ethers.AlchemyProvider(
    'sepolia',
    process.env.ALCHEMY_API_KEY
);


// 当前使用中的provider
const provider = localProvider;

module.exports = {
    localProvider,
    mainnetProvider,
    testnetProvider,
    provider
}