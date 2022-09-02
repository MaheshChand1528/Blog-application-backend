import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routess";
import router from "./routes/user-routes";
import cors from "cors";

var app = express();
app.get("/", (req, res) => {
  res.send("server start");
});
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(
    app.listen(PORT, () => {
      console.log(`connected and listening on http://localhost:${PORT}`);
    })
  )
  .catch((err) => {
    console.log("err");
  });