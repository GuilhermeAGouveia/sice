const express = require('express');
const cors = require('cors')
const route = require("./routerMAIN")

var app = express()
app.use(cors())
app.use(express.json())
app.use(route)


app.listen(3333)

