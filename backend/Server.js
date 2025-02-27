const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const routes = require("./routes/ToDoRoute");

require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
const PORT = process.env.port || 5000;



mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err));
app.listen(PORT, () => console.log(`Listen on : ${PORT}`));
