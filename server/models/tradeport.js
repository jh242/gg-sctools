const mongoose = require('mongoose');

const tradeportSchema = new mongoose.Schema({
  name: { type: String },
  system: { type: String, index: true },
  planet: { type: String, index: true },
  moon: String,
  onSurface: Boolean,
  commodities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commodities' }],
});

tradeportSchema.index({ name: 1 }, { collation: { locale: 'en', strength: 1 }, unique: true });

const tradeportModel = mongoose.model('Tradeports', tradeportSchema);

module.exports = tradeportModel;
