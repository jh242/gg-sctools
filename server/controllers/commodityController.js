const commodityModel = require('../models/commodity');

exports.getAllCommodities = async (req, res) => {
  const commodityList = await commodityModel.find({});

  res.send(commodityList);
};

exports.getOneCommodity = async (req, res) => {
  const { name } = req.params;

  const commodity = await commodityModel.find({ name });

  res.send(commodity);
};
