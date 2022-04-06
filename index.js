import express from "express";
import bodyParser from "body-parser";
import menuRoutes from "./routes/menu.js";

const app = express();
const PORT = 3000;

app.use("/", express.static("public"));
// app.use(express.json());
app.use(bodyParser.json());
app.use("/menu", menuRoutes);

app.get("/", (req, res) => res.send("Hello from hommmmmme"));

app.listen(PORT, () =>
  console.log(`App is running on port: http://localhost:${PORT}.`)
);
