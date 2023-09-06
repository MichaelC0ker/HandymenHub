import * as express from "express";
import { Request, Response } from "express";

import AuthMiddleware from "../middleware/auth.middleware";
import db from "../config/db";

class UserController {
    public path= "/users";
    public router = express.Router();
    private authMiddleware;

    constructor() {
      this.authMiddleware = new AuthMiddleware();
      this.initRoutes();
    }

    public initRoutes() {
        this.router.use(this.authMiddleware.verifyToken);
        this.router.get("/", this.allUsers);
        this.router.get("/emails", this.emails);
        this.router.get("/:guid", this.getUserID);
        this.router.get("/userFavourites/:userID", this.userFavourites);

        this.router.post("/", this.createUser);

        this.router.put("/updateFavourites", this.updateFavourites);
    }

    allUsers =  async (req: Request, res: Response) => {
        try {
          const results = await db.query(`SELECT * from users`);
          res.status(200).send({ data: results.rows });
        } catch (err: any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };

      emails = async (req: Request, res: Response) => {
        try {
          const results = await db.query(`SELECT email from users`);
          res.status(200).send({ data: results.rows });
        } catch (err: any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };

      getUserID = async (req: Request, res: Response) => {
        try {
          const results = await db.query("SELECT user_id from users where guid=$1;",[req.params.guid]);
          res.status(200).send({ data: results.rows });
        } catch (err: any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
    
      createUser = async (req: Request, res: Response) => {
        try {
          const { email, guid } = req.body;
          const results = await db.query("INSERT INTO users(email,guid) VALUES($1,$2) RETURNING *;", [email,guid]);
          res.status(201).send(`User added with ID: ${results.rows[0].user_id}`);
    
        } catch (err: any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
    
      userFavourites = async (req: Request, res: Response) => {
        try {
          const results = await db.query("SELECT favourites from users WHERE user_id=$1;", [req.params.userID]);
          res.status(200).send({ data: results.rows });
        } catch (err: any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
    
      //TODO check if this logic is correct
      //No referential integrity so frontend needs to make sure advert_id is correct
      updateFavourites = async (req: Request, res: Response) => {
        try {
          const { user_id, advert_id,add } = req.body;
          const oldFavourites = await db.query("SELECT favourites from users WHERE user_id=$1;", [user_id]);
          const favouritesArray = oldFavourites.rows[0]["favourites"];
          if(add)
          {
            if (!favouritesArray.includes(advert_id)) {
                favouritesArray.push(advert_id);
              }
          }
          else
          {
            const index = favouritesArray.indexOf(advert_id);
            if (index > -1) { // only splice array when item is found
                favouritesArray.splice(index, 1); // 2nd parameter means remove one item only
            }
          }
          const jsonData = JSON.stringify(favouritesArray);
          const results = await db.query("UPDATE users set favourites=$1 WHERE user_id=$2;", [jsonData,user_id]);
          res.status(201).send(`Updated successfully`);
        } catch (err: any) {
          console.error("Error executing query", err.stack);
          res.status(500).json({ error: "Something went wrong" });
        }
      };
    
}

export default UserController;
