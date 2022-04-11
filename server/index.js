import express from "express";
import menuRoutes from "./routes/menu.js";

const app = express();
const PORT = 8080;

// app.use("/", express.static("../client/public"));
app.use(express.json());

app.use("/api/menu", menuRoutes);

// global error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send({
    error: err.message,
  });
});

app.listen(PORT, () =>
  console.log(`App is running on port: http://localhost:${PORT}.`)
);
