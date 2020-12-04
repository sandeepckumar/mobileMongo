const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var mobilePhone = new Schema({
  company: {
    type: String,
  },
  model: {
    type: String,
  },
});

module.exports = mongoose.model("Mobile", mobilePhone);
