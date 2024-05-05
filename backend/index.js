const express = require('express');
const todoRouter = require('./routes/todo');
const app = express();
const port = 5000;
const cors = require("cors")

app.use(cors());

app.get('/', (req, res) => {
    return res.send('server is running');
});

app.use('/todo', todoRouter);

app.listen(port, () => {
    console.log('port is running on', port);
});
