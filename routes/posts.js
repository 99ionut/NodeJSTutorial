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
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);
    if (!post) {
        res.status(404).json({ msg: `post with id of ${id} wasnt found` });
    }

    return res.status(200).json(post);
});

module.exports = router;
