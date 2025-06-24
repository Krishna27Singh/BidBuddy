const Bid = require('../models/Bid');
const CompletedBid = require('../models/CompletedBid');

// Place a new bid
exports.createBid = async (req, res) => {
  try {
    const { item, currentBid, description } = req.body;
    const bid = new Bid({ item, currentBid, description });
    await bid.save();
    res.status(201).json({ message: 'Bid created successfully', bid });
  } catch (error) {
    res.status(500).json({ message: 'Error creating bid', error });
  }
};

// Update a bid
exports.updateBid = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentBid } = req.body;

    const bid = await Bid.findById(id);

    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    if (currentBid <= bid.currentBid) {
      return res.status(400).json({ message: 'New bid must be higher than the current bid' });
    }

    bid.currentBid = currentBid;
    await bid.save();

    res.status(200).json({ message: 'Bid updated successfully', bid });
  } catch (error) {
    res.status(500).json({ message: 'Error updating bid', error });
  }
};

// Complete a bid
exports.completeBid = async (req, res) => {
  try {
    const { id } = req.params;

    const bid = await Bid.findById(id);

    if (!bid) {
      return res.status(404).json({ message: 'Bid not found' });
    }

    const completedBid = new CompletedBid({
      item: bid.item,
      finalBid: bid.currentBid,
      description: bid.description,
    });

    await completedBid.save();
    await bid.remove();

    res.status(200).json({ message: 'Bid completed successfully', completedBid });
  } catch (error) {
    res.status(500).json({ message: 'Error completing bid', error });
  }
};
