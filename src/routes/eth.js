const express = require('express');
const router = express.Router();
const ethService = require('../services/ethService');

// 获取ETH余额
router.get('/balance/:address', async (req, res) => {
    try {
        const balance = await ethService.getBalance(req.params.address);
        res.json({ balance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;