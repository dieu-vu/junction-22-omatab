# junction-oma-tab

## API Example

```bash
export MERCHANT_ID=<merchant-id>
export API_TOKEN_KEY=<api-token-key>

# Get delivery order request
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${API_TOKEN_KEY}" -d @example_delivery_order_request.json https://daas-public-api.development.dev.woltapi.com/merchants/$MERCHANT_ID/delivery-order | python3 -mjson.tool

# Get Delivery fee
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${API_TOKEN_KEY}" -d @example_delivery_fee_request.json https://daas-public-api.development.dev.woltapi.com/merchants/$MERCHANT_ID/delivery-fee | python3 -mjson.tool
```

## How to start the client

```bash
cd client-app
npm install
npm start
```

Production site: http://65.108.221.181/