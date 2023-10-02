const mongoose = require("../database");
const bccryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PubSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productLink: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
});

UserSchema.pre("save", async function (next){
  const hash = await bccryptjs.hash(this.password, 10);
  this.password = hash
})

const User = mongoose.model("User", UserSchema);

module.exports = User;