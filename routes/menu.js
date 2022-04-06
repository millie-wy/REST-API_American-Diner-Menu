import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.send("hi"));
router.post("/", (req, res) => console.log("post"));
router.put("/:id", (req, res) => console.log("put"));
router.post("/:id", (req, res) => console.log("delete"));

export default router;
