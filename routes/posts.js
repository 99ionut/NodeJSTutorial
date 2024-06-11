const express = require("express");
const router = express.Router();

let posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
    { id: 4, title: "post 4" },
    { id: 5, title: "post 5" },
];


//get posts http://localhost:8000/api/posts/
router.get("/", (req, res) => {
    //http://localhost:8000/api/posts?limit=3
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }

    res.status(200).json(posts);
});

//get a single posts http://localhost:8000/api/posts/1
router.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);
    if (!post) {
        const error = new Error(`post with id of ${id} wasnt found`);
        error.status = 505;
        return next(error);
    }

    return res.status(200).json(post);
});

//post
router.post("/", (req,res, next)=>{
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if(!newPost.title){
        const error = new Error(`add a title `);
        error.status = 405;
        return next(error);
    }

    posts.push(newPost)
    res.status(201).json(posts);
});

//put
router.put("/:id", (req,res, next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`no id found`);
        error.status = 507;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});


//delete
router.delete("/:id", (req,res, next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`no id found`);
        error.status = 507;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

module.exports = router;
