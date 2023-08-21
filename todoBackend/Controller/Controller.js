const TodoModel = require("../Models/Model");

const AddTodo = (req, res) => {
  const [title, description] = req.body;

  const NewTodoModel = new TodoModel({
    title: title,
    description: description,
  });
  NewTodoModel.save().then((ress, err) => {
    if (err) {
      console.log(err);
    } else res.send(ress);
  });
};

const GetAllTodo = (req, res) => {};

const EditTodo = (req, res) => {};

const DeleteTodo = (req, res) => {};

module.exports = { AddTodo, GetAllTodo, EditTodo, DeleteTodo };
