const express = require("express");
const router = express.Router();
const posts = require('../controllers/postController');

router.get("/", posts.getPosts);


router.get("/:id", posts.getPost);

//post
router.post("/", posts.createPost);

//put
router.put("/:id/text/", posts.updateText);

//put
router.put("/:id/isEditing/", posts.updateIsEditing);

//put
router.put("/:id/isCompleted/", posts.updateIsCompleted);


//put
router.put("/:id", posts.updatePost);

//delete
router.delete("/:id", posts.deletePost);

module.exports = router;
