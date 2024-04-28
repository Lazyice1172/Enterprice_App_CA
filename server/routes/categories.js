import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the categories.
router.get('/', async (req, res) => {
    let collection = await db.collection("categories")
    let results = await collection.find({}).toArray()
    res.status(200).send(results);
})

// This section will help you get a single categories by id
router.get("/:id", async (req, res) => {
    try {
        let collection = await db.collection("categories");
        let id = { _id: new ObjectId(req.params.id) };
        let result = await collection.findOne(id);

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send("Not found");
        }
    } catch (error) {
        console.error("Invalid ID format or other error:", error);
        res.status(400).send("Invalid ID format or other error");
    }

});

// This section will help you create a new categories.
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            id: req.body.id,
            name: req.body.name,
            path: req.body.path || [],
            subCategories: req.body.subCategories || [],
        };
        let collection = await db.collection("categories");
        let result = await collection.insertOne(newDocument);
        //   res.status(200).send(result);
        res.status(204).send(result);

    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding categories");
    }
});

router.put("/:id", async (req, res) => {
    try {
        let id = { _id: new ObjectId(req.params.id) };
        let updatedDocument = {
            $set: {
                id: req.body.id,
                name: req.body.name,
            },
        };

        let collection = await db.collection("categories");
        let result = await collection.updateOne(id, updatedDocument);

        // res.status(201).send(result);
        res.status(204).send(result);


    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding categories");
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let id = { _id: new ObjectId(req.params.id) };
        let collection = await db.collection("categories");
        let result = await collection.deleteOne(id);
        res.status(204).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting categories");
    }
})

export default router;