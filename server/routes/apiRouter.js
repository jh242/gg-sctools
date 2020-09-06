const express = require('express');
const commodityController = require('../controllers/commodityController');
const tradeportController = require('../controllers/tradeportController');

const apiRouter = express.Router();

apiRouter.get('/commodities', commodityController.getCommodities);
apiRouter.get('/tradeports', tradeportController.getTradeports);

module.exports = apiRouter;
