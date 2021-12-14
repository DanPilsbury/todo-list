const Todo = require('../schemas/TodoItem');

const findOne = async function (id){
    try{
        const todo = await Todo.findOne({_id: id});
        return todo;
    } catch(err){
        return err;
    }
}

const addOne = async function (title, description){
    try {
        const todo = new Todo({title: title, description: description});
        await todo.save();
        return todo;
    } catch(err) {
        return err;
    }
}

const completeOne = async function (id){
    try {
        const todo = await Todo.findOne({_id: id});
        todo.done = true;
        await todo.save();
        return todo;
    } catch(err) {
        return err;
    }
}

const deleteOne = async function (id){
    try {
        const result = await todo.deleteOne({_id: id});
        return result;
    } catch(err) {
        return err;
    }
}

module.exports = Object.freeze({
    findOne,
    addOne,
    completeOne,
    deleteOne
});