const { Type } = require("./../db");
const getTypes = async () => {
  const types = await Type.findAll();
  return types;
};

module.exports = { getTypes };
