const express = require("express");

const router = express.Router();

const Todo = require("../controllers/todo-controller.js");

/**
 * Create a new Todo
 * 
 * @name POST /todo
 * 
 * @param {String} title the title of todo item
 * @param {String} description the description of todo item
 */
router.post('/', async (req, res) => {
    console.log('post todo', req.body);
    const todo = await Todo.addOne(req.body.title, req.body.description);
    res.status(200).json(todo).end();
});

module.exports = router;