const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

let posts = [
    {id:1, title: "post 1"},
    {id:2, title: "post 2"},
    {id:3, title: "post 3"},
    {id:4, title: "post 4"},
    {id:5, title: "post 5"}
];

//get posts http://localhost:8000/api/posts/
app.get("/api/posts", (req, res)=>{

    //http://localhost:8000/api/posts?limit=3
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.status(200).json(posts.slice(0,limit));
    }else{
        res.status(200).json(posts);
    }
})


//get a single posts http://localhost:8000/api/posts/1
app.get("/api/posts/:id", (req, res)=>{
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);
    if(!post){
        res.status(404).json({msg: `post with id of ${id} wasnt found`});
    }else{
        res.status(200).json(post);
    }
})


app.listen(port, () => console.log(`server is running on port ${port}`));



