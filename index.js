const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require("mongoose");

const getToken = require("./routes/Auth/getToken")

const adminAndCreate = require("./routes/Admin/create")
const adminAndUpdate = require("./routes/Admin/update")
const adminAndDelete = require("./routes/Admin/delete")

const order = require("./routes/User/placeOrder")
const isAlreadyGamePurchased = require("./routes/User/isAlreadyGamePurchased")
const findUserOrders = require("./routes/User/getUserOrders")
const gamesList = require("./routes/User/getAllGames")
const findSingleGame = require("./routes/User/findSingleGame")


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("database connected successfully"))
  .catch(err => console.log(err));


app.use("/auth", getToken)
app.use("/user", order)
app.use("/user", findUserOrders)
app.use("/user", isAlreadyGamePurchased)
app.use("/user", gamesList)
app.use("/user", findSingleGame)

app.use("/admin", adminAndCreate)
app.use("/admin", adminAndUpdate)
app.use("/admin", adminAndDelete)


app.listen(process.env.PORT || 5000);