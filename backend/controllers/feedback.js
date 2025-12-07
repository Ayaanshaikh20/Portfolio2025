const { Router } = require("express");
const pool = require("../config/db");

const router = Router();

//submit feedback
const submitFeedback = async (req, res, next) => {
    let con, sqlQuery;
    try {
        const { shop_name, owner_name, address, rating, desc } = req.body;

        con = await pool.connect();

        sqlQuery = `INSERT INTO feedback (shop_name, owner_name, address, rating, description) 
        VALUES ('${shop_name}', '${owner_name}', '${address}', '${rating}', '${desc}')`

        await pool.query(sqlQuery);

        next();
    } catch (error) {
        res.status(500).json({
            message: "Error submitting feedback",
            error: error.message
        });
    }
};

//fetch feedbacks
const fetchFeedback = async (req, res, next) => {
    let con, sqlQuery;
    try {
        con = await pool.connect();

        sqlQuery = `SELECT * FROM feedback`

        let result = await pool.query(sqlQuery);

        res.locals.feedbacks = result.rows;

        next();
    } catch (error) {
        res.status(500).json({
            message: "Error fetching feedback",
            error: error.message
        });
    }
};

// Fetch all Feedback
router.get("/api/feedback", fetchFeedback, async (req, res) => {
    const { feedbacks } = res.locals;
    res.status(200).json({
        message: "Feedback fetched successfully",
        feedbacks
    })
});

// Submit feedback
router.post("/api/feedback", submitFeedback, async (req, res) => {
    res.status(200).json({
        message: "Feedback received"
    })
});

module.exports = router;