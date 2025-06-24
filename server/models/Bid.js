const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  item: { type: String, required: true },
  currentBid: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "active" }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bid', BidSchema);
