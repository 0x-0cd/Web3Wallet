const app = require('./app');
const https = require('https');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// http
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// https
// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };

// https.createServer(options, app).listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });