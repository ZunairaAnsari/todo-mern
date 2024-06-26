const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const cors = require("cors")
const dbconnect = require('./db')
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).send('server is running');
});

app.use('/todo', todoRouter);

app.listen(port , async() => {
    await dbconnect();
    console.log('port is running on', port);
});
