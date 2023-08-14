require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bookingRouter = require("./routes/bookingRoutes");

const app = express();

const corsOptions = {
  origin: "http://localhost:5500",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Handymen Hub API" });
});

const PORT = process.env.PORT;

app.use("/bookings", bookingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
