const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

let posts = [
    {id:1, title: "post one"},
    {id:2, title: "post 2"},
    {id:3, title: "post 3"}
];
app.get("/api/posts", (req, res)=>{
    res.json(posts);
})

app.listen(port, () => console.log(`server is running on port ${port}`));