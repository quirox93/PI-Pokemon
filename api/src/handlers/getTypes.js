const { getTypes } = require("../controllers");

const handlerGetTypes = async (req, res) => {
  try {
    const types = await getTypes();
    res.status(200).json(types);
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
};

module.exports = handlerGetTypes;
