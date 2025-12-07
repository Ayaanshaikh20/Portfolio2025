const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path")
const { rateLimit } = require("express-rate-limit")
const PORT = 8000;
require("dotenv").config();

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 5 minutes
    limit: 15, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
    // store: ... , // Redis, Memcached, etc. See below.
});

app.use(cors());
app.use(express.json());
app.use(limiter);

// All routes
app.use(require("./controllers/feedback"));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


