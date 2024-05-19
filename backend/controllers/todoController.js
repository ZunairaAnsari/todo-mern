const arr = require("../data");

function getTodo(req, res){
    res.send(arr);
}

function createTodo(req, res){
    res.send(arr);
}

function deleteTodo(req, res){
    res.send(arr);
}

function updateTodo(req, res){
    res.send(arr);
}

module.exports = {getTodo, createTodo, deleteTodo, updateTodo}