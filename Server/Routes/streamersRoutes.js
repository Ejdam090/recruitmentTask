const {
  addStreamer,
  getStreamer,
  getId,
  putStreamer,
} = require("../Controllers/streamerController");

const router = require("express").Router();

router.post("/streamers", addStreamer);
router.get("/streamer", getStreamer);
router.get("/streamer/:streamerId", getId);
router.put("/streamer/:streamerId/vote", putStreamer);

module.exports = router;
