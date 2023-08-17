const db = require("../config/db");

const userController = {
  allUsers: async (req, res) => {
    try {
      const results = await db.query(`SELECT * from Users`);
      res.status(200).send({ data: results.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  userFavourites: async (req, res) => {
    try {
      const results = await db.query("SELECT favourites from Users WHERE userid=$1;", [req.params.userID]);
      res.status(200).send({ data: results.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
};

module.exports = userController;
