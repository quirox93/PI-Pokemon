const { getTypes } = require("../controllers/getTypes");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const types = await getTypes();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
