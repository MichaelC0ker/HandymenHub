const db = require("../config/db");

const advertController = {
  getAllAdverts: async (req, res) => {
    try {
      const results = await db.query(`SELECT * from adverts`);
      res.status(200).send({ data: results.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  getAllAdvertIDs: async (req, res) => {
    try {
      const results = await db.query(`SELECT advert_id from adverts`);
      res.status(200).send({ data: results.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  getSpecificAdvert: async (req, res) => {
    try {
      const results = await db.query("SELECT * from adverts where advert_id=$1;", [req.params.advertID]);
      res.status(200).send({ data: results.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },

  createAdvert: async (req, res) => {
    try {
      const { owner, advert_data } = req.body;
      const jsonData = JSON.stringify(advert_data);
      const results = await db.query("INSERT INTO adverts(owner,advert_data) VALUES($1,$2);", [owner,jsonData]);
      res.status(201).send(`Advert added`);
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
};

module.exports = advertController;
