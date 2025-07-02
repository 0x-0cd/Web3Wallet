const { provider } = require('../utils/providerSelector');

const getBlockNumber = async () => {
    try {
        const blockNumber = await provider.getBlockNumber();
        console.log('Current Block Number:', blockNumber);
        return blockNumber;
    } catch (error) {
        throw new Error('Get block number failed.');
    }
};

const getLatestBlock = async () => {
    try {
        const latestBlock = await provider.getBlock('latest');
        return latestBlock;
    } catch (error) {
        throw new Error('Get latest block failed.');
    }
};

module.exports = {
    getBlockNumber,
    getLatestBlock,
};