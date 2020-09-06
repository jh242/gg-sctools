const mongoose = require('mongoose');

const tradeportSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  system: { type: String, index: true },
  planet: { type: String, index: true },
  moon: String,
  onSurface: Boolean,
  commodities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commodities' }],
});

const tradeportModel = mongoose.model('Tradeports', tradeportSchema);

export default tradeportModel;
