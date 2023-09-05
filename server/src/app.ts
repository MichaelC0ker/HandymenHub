import express, { Application } from "express";

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; controllers: any; middleWares: any }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  private middlewares(middleWares: any) {
    middleWares.forEach((middleWare: any) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use(controller.path, controller.router);
    });
  }
}

export default App;
