const express = require("express");
const db = require("../config/db");

const router = express.Router();

const { getAllBookings } = require("../controllers/advertsController");

router.get("/", getAllBookings);

module.exports = router;
