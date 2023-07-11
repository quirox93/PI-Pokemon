const handlerGetTypes = require("../handlers/getTypes");

const router = require("express").Router();

router.get("/", handlerGetTypes);

module.exports = router;
