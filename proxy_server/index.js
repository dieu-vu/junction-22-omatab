const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { config } = require('dotenv')
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();

config();

const PORT = parseInt(process.env.PORT) || 3001;
const HOST = process.env.HOST || "localhost"
const API_SERVICE_URL = 'https://daas-public-api.development.dev.woltapi.com/merchants/';

app.use(morgan('dev'))
app.use(cors())

// Authorization
app.use('', (req, res, next) => {
    const origin = req.headers.origin;
    console.log(`Received request from ${origin}`);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

// Proxy endpoints
app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});