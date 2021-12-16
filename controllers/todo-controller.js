const Todo = require("../schemas/TodoItem");

const findOne = async function (id) {
  try {
    const todo = await Todo.findOne({ _id: id });
    return todo;
  } catch (err) {
    return err;
  }
};

const findAll = async function () {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (err) {
    return err;
  }
};

const addOne = async function (title, description, project) {
  try {
    const todo = new Todo({
      title: title,
      description: description,
      project: project,
    });
    await todo.save();
    return todo;
  } catch (err) {
    return err;
  }
};

const completeOne = async function (id) {
  try {
    const todo = await Todo.findOne({ _id: id });
    todo.done = true;
    await todo.save();
    return todo;
  } catch (err) {
    return err;
  }
};

const toggleDone = async function (id) {
  try {
    const todo = await Todo.findOne({ _id: id });
    todo.done = !todo.done;
    await todo.save();
    return todo.done;
  } catch (err) {
    return err;
  }
};

const deleteOne = async function (id) {
  try {
    const result = await Todo.deleteOne({ _id: id });
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = Object.freeze({
  findOne,
  findAll,
  addOne,
  completeOne,
  toggleDone,
  deleteOne,
});
