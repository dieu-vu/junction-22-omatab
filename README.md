# Junction2022 Wolt challenge - _omatab_

Demo product for Hackathon [Junction 2022 Wolt's challenge](https://www.junction2022.com/challenges-new/wolt)

Team _**omatab**_: [Huy Mai](https://github.com/mquhuy), [Dieu Vu](https://github.com/dieu-vu), [Giang Nguyen](https://github.com/GiangNguyen1207)

_(Challenge was done from scratch within 17 hours)_

### Demo video:
[![demo recording](http://img.youtube.com/vi/zgXKeac_Ygc/0.jpg)](https://youtu.be/zgXKeac_Ygc)
      

## API Example

```bash
export MERCHANT_ID=<merchant-id>
export API_TOKEN_KEY=<api-token-key>

# Get delivery order request
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${API_TOKEN_KEY}" -d @example_delivery_order_request.json https://daas-public-api.development.dev.woltapi.com/merchants/$MERCHANT_ID/delivery-order | python3 -mjson.tool

# Get Delivery fee
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${API_TOKEN_KEY}" -d @example_delivery_fee_request.json https://daas-public-api.development.dev.woltapi.com/merchants/$MERCHANT_ID/delivery-fee | python3 -mjson.tool
```

## Local test:


### Start the proxy server
```bash
cd proxy-server
npm install
npm start
```


### Start the client
```bash
cd client-app
```
- Add the `.env` to client-app folder
```txt
REACT_APP_MERCHANT_ID=<YOUR_MERCHANT_ID>
REACT_APP_API_KEY=<YOUR_API_KEY>
```
- Start the application
```bash
npm install
npm start
```

## Production site: http://65.108.221.181/ (deployment server has been closed after the competition)
