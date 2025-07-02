/**
 * 该模块提供了一些获取区块信息的路由
 * `number` - 获取当前区块高度
 * `latest` - 获取最新区块信息
 */

const express = require('express');
const router = express.Router();
const blockService = require('../services/blockService');

// 获取当前区块高度
router.get('/number', async (req, res) => {
    try {
        const blockNumber = await blockService.getBlockNumber();
        res.json({ blockNumber });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 获取最新区块信息
router.get('/latest', async (req, res) => {
    try {
        const latestBlock = await blockService.getLatestBlock();
        res.json({ latestBlock });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;