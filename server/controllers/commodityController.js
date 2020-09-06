const commodityModel = require('../models/commodity');

exports.getCommodities = async (req, res) => {
  const commodityList = await commodityModel.find(req.query).collation({ locale: 'en', strength: 1 }).exec();

  res.send(commodityList);
};
