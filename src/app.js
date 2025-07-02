const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const blockRoutes = require('./routes/block');
const walletRoutes = require('./routes/wallet');
const ethRoutes = require('./routes/eth');
const erc20Routes = require('./routes/erc20');

/**
 * 中间件配置
 * 
 * `cors` - 允许跨域请求
 * `bodyParser.json` - 解析 JSON 数据
 * `bodyParser.urlencoded` - 解析 URL 编码数据
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 路由配置
app.use('/api/block', blockRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/eth', ethRoutes);
// app.use('/api/erc20', erc20Routes);

// 根路由
app.get('/', (req, res) => {
    res.send('Web3 Wallet Backend is running');
});

module.exports = app;
