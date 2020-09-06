const express = require('express');
const commodityController = require('../controllers/commodityController');

const apiRouter = express.Router();

apiRouter.get('/commodities', commodityController.getAllCommodities);
apiRouter.get('/commodity', commodityController.getOneCommodity);

module.exports = apiRouter;
