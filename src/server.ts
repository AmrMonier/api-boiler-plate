import express from "express";
export class Server {
  #instance: express.Application;
  constructor() {
    this.#instance = express();
    this.#instance.get("/", (req, res) => {
      res.status(200).send("Hello World!");
    });
  }
  getInstance(): express.Application {
    return this.#instance;
  }
  registerMiddleware(
    middleware: express.RequestHandler,
    path: string | undefined,
  ) {
    if (path) {
      this.#instance.get(path, middleware);
      return;
    }
    this.#instance.use(middleware);
  }
  registerRouter(path: string, router: express.Router) {
    this.#instance.use(path, router);
  }
  listen(port: number) {
    this.#instance.listen(port, () => {
      console.log(`Example app listening on port ${port.toString()}`);
    });
  }
}
