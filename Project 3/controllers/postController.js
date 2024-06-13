//get All posts
//get /api/posts
const db = require("../db/index");

const getPosts = async (req, res, next) => {
    //http://localhost:8000/api/posts?limit=3
    console.log("ok");
    console.log(db);
    const result = await db.query(`SELECT * FROM "Customers"`, []);
    res.send(result.rows);
    //res.status(200).send("ok");
};

//get signle posts
//get /api/posts/:id
const getPost = async (req, res, next) => {
    const id = parseInt(req.params.id);

    const result = await db.query(`SELECT * FROM "Customers" WHERE id = $1`, [
        id,
    ]);
    const post = result.rows[0];

    if (!post) {
        const error = new Error(`post with id of ${id} wasnt found`);
        error.status = 505;
        return next(error);
    }

    return res.status(200).json(post);
};

//create new post
const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };

    if (!newPost.title) {
        const error = new Error(`add a title `);
        error.status = 405;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
};

//update post
const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`no id found`);
        error.status = 507;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};

//delete post
const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`no id found`);
        error.status = 507;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};

module.exports = { createPost, updatePost, deletePost, getPost, getPosts };
