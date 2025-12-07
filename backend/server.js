const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path")
const PORT = 8000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

// All routes
app.use(require("./controllers/feedback"));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


