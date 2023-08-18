import dotenv from "dotenv";

import App from "./app";

import HomeController from "./controller/home.controller";
import ProtectedController from "./controller/protected.controller";
import BookingController from "./controller/booking.controller";

import bodyParser from "body-parser";

import cors from "cors";

dotenv.config();
const port = process.env.PORT;

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = new App({
  port: Number(port),
  controllers: [
    new HomeController(),
    new ProtectedController(),
    new BookingController(),
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(corsOptions),
  ],
});

app.listen();
