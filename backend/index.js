require('dotenv').config()
const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`everNote backend listening at http://localhost:${port}`);
});
