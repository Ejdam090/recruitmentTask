const Streamer = require("../Models/streamerModels");

/// endpoint to receive new streamer submission and store them in the DB
module.exports.addStreamer = async (req, res, next) => {
  try {
    const { name, description, platform } = req.body;
    const newStreamer = await Streamer.create({
      name,
      description,
      platform,
    });
    return res.json({ status: true, newStreamer });
  } catch (ex) {
    next(ex);
  }
};

///endpoint to return all stored streamers
module.exports.getStreamer = async (req, res, next) => {
  try {
    const streamers = await Streamer.find({});
    return res.json(streamers);
  } catch (ex) {
    next(ex);
  }
};

/// endpoint to return data with a specific id
module.exports.getId = async (req, res, next) => {
  try {
    const streamerId = req.params.streamerId;
    const streamer = await Streamer.findById(streamerId);
    res.json(streamer);
  } catch (ex) {
    next(ex);
  }
};

/// endpoint to receive a vote for a specific streamer and update it
module.exports.putStreamer = async (req, res, next) => {
  try {
    const streamerId = req.params.streamerId;
    const { voteType } = req.body;
    let updated;
    if (voteType === "upvotes") {
      updated = "upvotes";
    } else if (voteType === "downvotes") {
      updated = "downvotes";
    }
    const streamer = await Streamer.findByIdAndUpdate(
      streamerId,
      { $inc: { [updated]: 1 } },
      { new: true }
    );

    res.json(streamer);
  } catch (ex) {
    next(ex);
  }
};
