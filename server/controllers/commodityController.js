const commodityModel = require('../models/commodity');

exports.getAllCommodities = async (req, res) => {
  const commodityList = await commodityModel.find({});

  res.send(commodityList);
};

exports.getOneCommodity = async (req, res) => {
  const { name } = req.params;

  const commodity = await commodityModel.findOne({ name }).collation({ locale: 'en', strength: 1 });

  res.send(commodity);
};
