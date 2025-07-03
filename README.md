# Web3Wallet

## 服务启动方法：
在项目根目录
```bash
# 安装依赖
npm install

# 启动后端服务
npx nodemon src/server.js
```

此时在 `http://localhost:<port>` 应该能观察到后端服务启动，可以使用Postman测试

## 修改配置文件

复制`.env.example`文件，改名为`.env`，根据实际情况修改其中的配置项

## 生成SSL证书并启用https

在项目根目录

```bash
openssl genrsa -out key.pem

openssl req -new -key key.pem -out csr.pem

openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```

修改`src/server.js`中后端服务启动代码，使用 https 启动