require("dotenv").config();
// const { urlencoded } = require("express");
const express = require("express");
const db = require("./db");
const invenRouter = require("./routes/route.mobile");
db(process.env.ATLAS_DB);

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.listen(process.env.PORT, () => {
  console.log("Server started on Port 5000.");
});
