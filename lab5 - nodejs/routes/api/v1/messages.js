const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "Homepage"
        }
    });
});

router.get("/api/v1/messages", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING messages"
        }
    });
});

router.get("/api/v1/messages/:id", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING message with ID :id"
        }
    });
});

router.post("/api/v1/messages", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {
                "user": "Pikachu",
                "text": "nodejs isn’t hard, or is it?"
            }
        }
    });
});

router.put("/api/v1/messages/:id", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "UPDATING a message with id :id"
        }
    });
});

router.delete("/api/v1/messages/:id", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "DELETING a message with id :id"
        }
    });
});

router.get("/api/v1/messages?user=username", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "GETTING message for username :username"
        }
    });
});

module.exports = router;