const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
  name: String,
  type: String,
  buyLocations: [{
    price: Number,
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Tradeports' },
  }],
  sellLocations: [{
    price: Number,
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Tradeports' },
  }],
  records: [{
    transaction: String,
    price: Number,
    location: { type: mongoose.Schema.Types.ObjectId, ref: 'Tradeports' },
  }],
  updated: Date,
});

commoditySchema.index({ name: 1 }, { collation: { locale: 'en', strength: 1 }, unique: true });

const commodityModel = mongoose.model('Commodities', commoditySchema);

module.exports = commodityModel;
