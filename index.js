import express from "express";
import menuRoutes from "./routes/menu.js";

const app = express();
const PORT = 3000;

app.use("/", express.static("public"));
app.use(express.json());

app.use("/api/menu", menuRoutes);

// handling error...?
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send({
    error: err.message,
  });
});

app.listen(PORT, () =>
  console.log(`App is running on port: http://localhost:${PORT}.`)
);
