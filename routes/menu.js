import express from "express";
import { readFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

export const menu = JSON.parse(
  await readFile(new URL("../menuData.json", import.meta.url))
);

const router = express.Router();

// get the full menu from database
router.get("/", (req, res) => res.send(menu));

// add a new item to the database
router.post("/", (req, res) => {
  const newItem = req.body;
  const newItemWithId = { ...newItem, id: uuidv4() };
  menu.push(newItemWithId);
  res.send(`${newItem.title} has been added! 👏`);
});

// update an item in the database ?
router.put("/:id", (req, res) => console.log("put"));

// delete an item from the database
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  menu = menu.filter((item) => item.id !== id);
  res.send(`${newItem.title} has been deleted! 👌`);
});

export default router;
