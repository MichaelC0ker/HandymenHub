import * as express from "express";
import { Request, Response } from "express";

import AuthMiddleware from "../middleware/auth.middleware";
import db from "../config/db";

class BookingController {
  public path = "/bookings";
  public router = express.Router();
  private authMiddleware;

  constructor() {
    this.authMiddleware = new AuthMiddleware();
    this.initRoutes();
  }

  public initRoutes() {
    this.router.use(this.authMiddleware.verifyToken);
    this.router.get("/", this.getAllBookings);
  }

  getAllBookings = async (req: Request, res: Response) => {
    try {
      const results = await db.query(`SELECT * from bookings`);
      res.status(200).send({ data: results.rows });
      res.send("All Bookings");
    } catch (err: any) {
      console.error("Error executing query", err.stack);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
}

export default BookingController;
