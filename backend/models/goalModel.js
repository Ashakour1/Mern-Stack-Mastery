const mongoose = require("mongoose");

const goalsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "please add text"],
    },
  },
  {
    timestamps: true,
  }
);

// console.log(goalsSchema);

module.exports = mongoose.model("Goal", goalsSchema);
