import express from "express";
import { readFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

export const menu = JSON.parse(
  await readFile(new URL("../menuData.json", import.meta.url))
);

const router = express.Router();

router.get("/", (req, res) => res.send(menu));

router.post("/", (req, res) => {
  const newItem = req.body;
  const newItemWithId = { ...newItem, id: uuidv4() };
  menu.push(newItemWithId);
  res.send(`${newItem.title} has been added!`);
});

router.put("/:id", (req, res) => console.log("put"));
router.post("/:id", (req, res) => console.log("delete"));

export default router;
