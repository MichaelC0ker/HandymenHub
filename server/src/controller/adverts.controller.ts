import * as express from "express";
import { Request, Response } from "express";

import AuthMiddleware from "../middleware/auth.middleware";
import db from "../config/db";

class AdvertController {
    public path= "/adverts";
    public router = express.Router();
    private authMiddleware;

    constructor() {
      this.authMiddleware = new AuthMiddleware();
      this.initRoutes();
    }

    public initRoutes() {
        this.router.use(this.authMiddleware.verifyToken);
        this.router.get("/", this.getAllAdverts);
        this.router.get("/:ids", this.getAllAdvertIDs);
        this.router.get("/:advertID", this.getSpecificAdvert);

        this.router.post("/", this.createAdvert);
    }

    getAllAdverts = async (req: Request, res: Response) => {
        try {
          const results = await db.query(`SELECT * from adverts`);
          res.status(200).send({ data: results.rows });
        } catch (err:any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };

      getAllAdvertIDs= async (req: Request, res: Response) => {
        try {
          const results = await db.query(`SELECT advert_id from adverts`);
          res.status(200).send({ data: results.rows });
        } catch (err:any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
    
      getSpecificAdvert= async (req: Request, res: Response) => {
        try {
          const results = await db.query("SELECT * from adverts where advert_id=$1;", [req.params.advertID]);
          res.status(200).send({ data: results.rows });
        } catch (err:any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
    
      createAdvert= async (req: Request, res: Response) => {
        try {
          const { owner, advert_data } = req.body;
          const jsonData = JSON.stringify(advert_data);
          const results = await db.query("INSERT INTO adverts(owner,advert_data) VALUES($1,$2);", [owner,jsonData]);
          res.status(201).send(`Advert added`);
        } catch (err:any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
}

export default AdvertController;
