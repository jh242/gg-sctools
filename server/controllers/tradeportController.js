const tradeportModel = require('../models/tradeport');

exports.getTradeports = async (req, res) => {
  const tradeportList = await tradeportModel.find(req.query).collation({ locale: 'en', strength: 1 }).exec();

  res.send(tradeportList);
};
