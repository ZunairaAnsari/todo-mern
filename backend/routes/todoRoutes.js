const express = require('express')
const todoRouter = express.Router()
const arr = require("../data")
const { createTodo, getTodo, deleteTodo } = require('../controllers/todoController')

todoRouter
     .get('/' , getTodo)
     .post('/add', createTodo)
     .delete('/', deleteTodo)

   


  module.exports = todoRouter