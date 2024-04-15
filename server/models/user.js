const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async (next) => {
  const salt = await bcrypt.genSalt();
  this.password = bcrypt.hash(this.password, salt);
  console.log("Password is being hashed!");
  next();
});

userSchema.statics.login

module.exports = mongoose.model("User", userSchema);
