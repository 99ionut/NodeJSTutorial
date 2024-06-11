const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const posts = require("./routes/posts");

const app = express();

//Body parser middelware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/api/posts", posts);




app.listen(port, () => console.log(`server is running on port ${port}`));



