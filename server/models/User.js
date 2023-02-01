const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    restaurants: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Restaurant"
    }
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema);
module.exports = User;