const express = require("express");
const db = require("../config/db");

const router = express.Router();

const { getAllAdverts } = require("../controllers/advertsController");
const { getSpecificAdvert } = require("../controllers/advertsController");
const { getAllAdvertIDs } = require("../controllers/advertsController");
const { createAdvert } = require("../controllers/advertsController");

router.get("/", getAllAdverts);
router.get("/ids", getAllAdvertIDs);
router.get("/:advertID", getSpecificAdvert);

router.post("/", createAdvert);



module.exports = router;
