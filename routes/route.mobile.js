const express = require("express");
const router = express.Router();
const Mobile = require("../models/Mobile");
const Company = require("../models/Mobile");
const Mobile = require("../models/Mobile");

router.post("/addMobile", (res, req) => {
  const { company, model } = req.body;
  const docToSave = new Mobile({ company, model });
  docToSave.save((err) => {
    if (err) throw err;
    console.log("DB UPDATED");
    res.status(201).json({ status: "saved" });
  });
});

module.exports = router;
