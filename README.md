# Coffee Maker

## Based On
- ExpressJS
- MongoDB


## Setup

#### Manual
1. run `npm i`
2. run `npm run seed`
3. run `npm start`

#### By Docker
1. run `./docker-setup.sh`

## APIs

- GET /machines (with params: productType (filter by product Type), waterLine (filter By waterline))
- GET /pods (with params: productType (filter by product Type), coffeeFlavor (filter By flavor), packSize (filter by pack size))