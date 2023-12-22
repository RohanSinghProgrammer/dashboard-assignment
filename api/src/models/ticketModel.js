const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    ticketNo: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date()
    },
    department: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "In Progress"
    },
    rating: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const model = new mongoose.model("Ticket", schema);

module.exports = model;
