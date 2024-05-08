const http = require('http');
const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors');
const hostname = '127.0.0.1';

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
// parse application/json
app.use(bodyParser.json())
// sequelize.sync({force: true});
const userRoutes = require("./routes/userRoutes");
app.get("/", (req, res) => {
    return res.json("server is running")
})
app.use("/api/user", userRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))