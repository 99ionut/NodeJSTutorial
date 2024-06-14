const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.get("/", async (req, res, next) => {
    
    const result = await db.query(`SELECT * FROM "TodoListDB" ORDER BY id ASC`, []);
    res.status(200).send(result.rows);
});


//post
router.post("/", async(req, res, next) => {
    
    let result = await db.query(`INSERT INTO "TodoListDB" (text, isCompleted, isEditing) VALUES ($1,false,false) RETURNING *`, [
        req.body.value
    ]);
    //return the id
    console.log(result.rows[0]);

    res.json(result.rows[0].id);
});

//put
router.put("/:id/text/", async(req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await db.query(`UPDATE "TodoListDB" SET text = $1 WHERE id = $2`, [
    req.body.value, id
    ]);

    res.status(200).json(result);
});

//put
router.put("/:id/isediting/", async(req, res, next) => {
    const id = parseInt(req.params.id);   
    const result = await db.query(`UPDATE "TodoListDB" SET isediting = $1 WHERE id = $2`, [
        req.body.value, id
    ]);
    
    res.status(200).json(result);
});

//put
router.put("/:id/iscompleted/", async(req, res, next) => {
    const id = parseInt(req.params.id);   
    const result = await db.query(`UPDATE "TodoListDB" SET iscompleted = $1 WHERE id = $2`, [
        req.body.value, id
    ]);
    
    res.status(200).json(result);
});


//delete
router.delete("/:id", async(req, res, next) => {
    const id = parseInt(req.params.id);
    const result = await db.query(`DELETE FROM "TodoListDB" WHERE id = $1`, [
        id
    ]);

    res.status(200).json(result);
});

module.exports = router;
