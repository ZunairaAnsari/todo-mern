const express = require('express')
const todoRouter = express.Router()
const arr = require("../data")

todoRouter.get('/', (req, res) => {res.send(arr)
})

todoRouter.post('/add' , (req, res) => {
    res.send("post todos");
})

todoRouter.delete('/', (req, res) => {
    res.send("delete todos");
})

  module.exports = todoRouter