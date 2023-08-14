const db = require("../config/db");

const bookingController = {
  getAllBookings: async (req, res) => {
    try {
      const results = await db.query(`SELECT * from bookings`);
      res.status(200).send({ data: results.rows });
    } catch (err) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  },
};

module.exports = bookingController;
