const Router = require("express").Router();
const {
  AddTodo,
  GetAllTodo,
  EditTodo,
  DeleteTodo,
} = require("../Controller/Controller");

Router.post("/add", AddTodo);
Router.get("/get-todo", GetAllTodo);
Router.put("/edit", EditTodo);
Router.delete("/delete", DeleteTodo);

module.exports = Router;
