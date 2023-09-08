import dotenv from "dotenv";

import App from "./app";
import UsersController from "./controller/users.controller";
import AdvertsController from "./controller/adverts.controller";

import bodyParser from "body-parser";

import cors from "cors";

dotenv.config();
const port = process.env.PORT;

const corsOptions = {
  origin: "https://d2lw6hatpihvdj.cloudfront.net",
};

const app = new App({
  port: Number(port),
  controllers: [new UsersController(), new AdvertsController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors(corsOptions),
  ],
});

app.listen();
