const express = require('express');
const app = express();
const cors = require('cors');
const cron = require('node-cron');
const PORT = 8000;
require("dotenv").config();

app.use(cors());
app.use(express.json());


cron.schedule('*/10 * * * *', () => {
  console.log('running a task every 10 minute');
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


