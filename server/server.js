const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const logisticsModel = require("./models/Logistics");
const app = express();

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

mongoose.connect(
  `mongodb+srv://admin:${process.env.PASSWORD}@shopify-crud.b9e4q.mongodb.net/logistics?retryWrites=true&w=majority`
);

app.use(express.json());
app.use(cors());

app.post("/create-order", async (req, res) => {
  const customerName = req.body.customerName;
  const orderNumber = req.body.orderNumber;
  const orderDescription = req.body.orderDescription;

  const newOrder = new logisticsModel({
    customerName: customerName,
    orderNumber: orderNumber,
    orderDescription: orderDescription,
  });

  try {
    await newOrder.save();
    res.send("Success");
  } catch (e) {
    res.send(e);
  }
});
app.get("/orders", (req, res) => {
  logisticsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    await logisticsModel.findByIdAndRemove(id).exec();
    res.send("Success");
  } catch (e) {
    res.send(e);
  }
});

app.put("/update",  (req, res) => {
  console.log("in update");
  const id = req.body.id;
  const customerName = req.body.customerName;
  const orderNumber = req.body.orderNumber;

  console.log(customerName);
  console.log(orderNumber);
  try {
    logisticsModel.findByIdAndUpdate(id, { customerName: customerName, orderNumber: orderNumber, orderDescription: "Hello" },
    function (err, entry) {
    if (err){
      console.log(err)
      res.send("An error occured. Order number already exists or database is having issues")
    }
    else{
        console.log("Updated entry : ", entry);
        res.send("Success")
    }
});

  } catch (e) {
    console.log(e);
    res.send("Error")
  }
});

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));
