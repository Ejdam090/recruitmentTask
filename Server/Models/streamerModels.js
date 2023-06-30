const mongoose = require("mongoose");

const streamerSchema = new mongoose.Schema({
  name: String,
  description: String,
  platform: String,
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Streamer", streamerSchema);
