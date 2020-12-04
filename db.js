const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_DB, { useNewUrlParser: true });
    console.log("DB CONNECTED");
  } catch (err) {
    console.log(err);
  }
};

module.exports = db;
