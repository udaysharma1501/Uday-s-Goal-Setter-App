const { timeStamp } = require("console");
const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // which model does the user type pertain to
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
