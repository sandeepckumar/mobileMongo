const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Company = new Schema({
  name: {
    type: String,
  },
  models: {
    type: Array,
  },
});

module.exports = mongoose.model("Company", Company);
