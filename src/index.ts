import express from "express";
import { config as loadEnv } from "dotenv";
import { middleware } from "./middlewares/middlewares";
loadEnv();
const app = express();
const port = process.env.PORT ?? "3000";
app.get("/", middleware);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

