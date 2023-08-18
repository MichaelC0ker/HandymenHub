import express, { Request, Response } from "express";

class HomeController {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/", this.home);
  }

  home(req: Request, res: Response) {
    res.status(200).json({ message: "Welcome to Handymen Hub API" });
  }
}

export default HomeController;
