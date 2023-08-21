const mongoose = require("mongoose");
const db = require("../Connections/Db");

// schema

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

// model

const TodoModel = mongoose.model("TodoModel", todoSchema);

module.exports = TodoModel;
