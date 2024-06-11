const express = require('express')

const app = express();
app.use(express.json());
const personeRouter = require("./routes/persone")

app.use(express.json());

//usa personeRouter ogni volta che entri in api/persone
app.use("api/persone", personeRouter)


app.listen(3000);