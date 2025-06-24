const mongoose = require('mongoose');

const CompletedBidSchema = new mongoose.Schema({
  item: { type: String, required: true },
  finalBid: { type: Number, required: true },
  description: { type: String, required: true },
  completedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CompletedBid', CompletedBidSchema);
