import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the categories.
// router.get('/', async (req, res) => {
//     let collection = await db.collection("categories")
//     let results = await collection.find({}).toArray()
//     res.status(200).send(results);
// })

router.get('/', async (req, res) => {
    const { name } = req.query; // Get the search query from request parameters

    try {
        const collection = await db.collection("categories");

        // If a name query is provided, use it to filter categories
        let query = {}; // Default to an empty query

        if (name) {
            query.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
        }

        const results = await collection.find(query).toArray(); // Fetch matching results
        res.status(200).send(results); // Send the results back
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Error fetching categories");
    }
});

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