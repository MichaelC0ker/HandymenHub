require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const advertsRouter = require("./routes/advertsRoutes");
const userRouter = require("./routes/userRoutes");


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

app.use("/adverts", advertsRouter);
app.use("/users", userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
