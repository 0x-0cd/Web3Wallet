/**
 * 该模块提供了钱包相关操作的路由，包括创建钱包、导入钱包、获取钱包信息等功能。
 * 
 */

const express = require('express');
const router = express.Router();
const walletService = require('../services/walletService');
const { readFileSync } = require('fs');

// 创建新钱包(不安全)
router.post('/createUnsafe', async (req, res) => {
    try {
        const wallet = await walletService.createUnsafeWallet();
        res.json(wallet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 创建新钱包
router.post('/create', async (req, res) => {
    try {
        const wallet = await walletService.createWallet();
        res.json(wallet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;