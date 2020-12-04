const express = require("express");
const router = express.Router();
const Mobile = require("../models/Mobile");

router.post("/addMobile", (res, req) => {
  const { company, model } = req.body;
  docToSave = "";
});

module.exports = router;
