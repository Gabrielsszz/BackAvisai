const mongoose = require("../database");

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
  

const Publi = mongoose.model(PubSchema);

module.exports = Publi