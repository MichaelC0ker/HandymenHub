const express = require("express");
const db = require("../config/db");

const router = express.Router();

const { allUsers } = require("../controllers/userController");
const { userFavourites } = require("../controllers/userController");

router.get("/", allUsers);
router.get("/userFavourites/:userID", userFavourites);

router.post("/:userID",)


module.exports = router;
