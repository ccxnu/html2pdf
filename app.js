import path from "path";
import express from "express";
import { fileRouter } from "./src/routes/file.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/file", fileRouter);
app.get("/", (_, res) => {
  res.sendFile("index.html", { root: path.join(process.cwd(), "./src/views") });
});

app.listen("3000", () => {
  console.log(`API ejecutánse en puerto ${PORT}`);
});
