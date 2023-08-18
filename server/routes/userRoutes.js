const express = require("express");
const db = require("../config/db");

const router = express.Router();

const { allUsers } = require("../controllers/userController");
const { userFavourites } = require("../controllers/userController");
const { emails } = require("../controllers/userController");
const { createUser } = require("../controllers/userController");
const { updateFavourites } = require("../controllers/userController");

router.get("/", allUsers);
router.get("/emails", emails);
router.get("/userFavourites/:userID", userFavourites);

router.post("/", createUser);

router.put("/updateFavourites",updateFavourites);


module.exports = router;
