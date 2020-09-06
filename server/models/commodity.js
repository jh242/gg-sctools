const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
  name: String,
  buyLocations: [{
    price: Number,
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Tradeports' },
  }],
  sellLocations: [{
    price: Number,
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Tradeports' },
  }],
  updated: Date,
});

const commodityModel = mongoose.model('Commodities', commoditySchema);

module.exports = commodityModel;
