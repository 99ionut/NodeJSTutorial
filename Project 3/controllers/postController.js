//get All posts
//get /api/posts
const db = require("../db/index");

const getPosts = async (req, res, next) => {
    //http://localhost:8000/api/posts?limit=3
    console.log("ok");
    console.log(db);
    const result = await db.query(`SELECT * FROM "TodoListDB"`, []);
    res.send(result.rows);
    //res.status(200).send("ok");
};

//get signle posts
//get /api/posts/:id
const getPost = async (req, res, next) => {
    console.log(req);
    return res.status(200);
    /* const id = parseInt(req.params.id);

    const result = await db.query(`SELECT * FROM "TodoListDB" WHERE id = $1`, [
        id,
    ]);
    const post = result.rows[0];

    if (!post) {
        const error = new Error(`post with id of ${id} wasnt found`);
        error.status = 505;
        return next(error);
    }

    return res.status(200).json(post); */
};

//create new post
const createPost = async(req, res, next) => {
    
    console.log(req.body);
    const result = await db.query(`INSERT INTO "TodoListDB" (text, isCompleted, isEditing) VALUES ($1,false,false)`, [
        req.body.value,
    ]);
    
    res.status(201).json(result);
};

//update post
const updatePost = async(req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await db.query(`UPDATE "TodoListDB" SET (text, isCompleted, isEditing) VALUES ($1,$2,$3) WHERE id = $4`, [
        req.body.text, req.body.isCompleted, req.body.isEditing,id
    ]);
    
    res.status(201).json(result);

};

//update TEXT
const updateText = async(req, res, next) => {
    const id = parseInt(req.params.id);

    const result = await db.query(`UPDATE "TodoListDB" SET text = $1 WHERE id = $2`, [
        req.body.value, id
    ]);
    
    res.status(201).json(result);
};

//update ISEDITING
const updateIsEditing = async(req, res, next) => {
    const id = parseInt(req.params.id);
    
    const result = await db.query(`UPDATE "TodoListDB" SET isediting = $1 WHERE id = $2`, [
        req.body.value, id
    ]);
    
    res.status(201).json(result);
};

//update ISCOMPLETED
const updateIsCompleted = async(req, res, next) => {
    const id = parseInt(req.params.id);
    console.log(req.body.value);
    console.log(id);
    const result = await db.query(`UPDATE "TodoListDB" SET iscompleted = $1 WHERE id = $2`, [
        req.body.value, id
    ]);
    
    res.status(201).json(result);
};

//delete DELETE
const deletePost = async(req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await db.query(`DELETE FROM "TodoListDB" WHERE id = $1`, [
        id
    ]);
    res.status(200).json(result);
};

module.exports = { createPost, updatePost, deletePost, getPost, getPosts, updateIsEditing, updateText, updateIsCompleted };
