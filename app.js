import express from "express";
import { fileRouter } from "./src/routes/file.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/file", fileRouter);
app.get("/", (req, res) => {
  res.send("Working");
});

app.listen("3000", (req, res) => {
  console.log(`API ejecutánse en puerto ${PORT}`);
});
