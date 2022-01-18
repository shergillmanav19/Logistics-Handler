const mongoose = require("mongoose");

const logisticsSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  orderDescription: {
    type: String,
    required: true,
  },
});

const Logistics = mongoose.model("logisticdata", logisticsSchema);

module.exports = Logistics;
