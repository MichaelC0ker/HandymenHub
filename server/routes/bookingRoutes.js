const express = require("express");
const db = require("../config/db");

const router = express.Router();

const { getAllBookings } = require("../controllers/bookingController");

router.get("/", getAllBookings);

module.exports = router;
