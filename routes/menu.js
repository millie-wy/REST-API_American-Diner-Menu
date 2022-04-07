import express from "express";
import { getMenu, saveMenu, doesMenuExist } from "../helperFunctions/helper.js";
import { nanoid } from "nanoid";

const router = express.Router();

// get the full menu from database
router.get("/", (req, res) => res.send(getMenu()));

// add a new item to the database
router.post("/", (req, res) => {
  let menuTobeUpdated = getMenu();
  const newItem = req.body;
  const newItemWithId = {
    ...newItem,
    id: nanoid(5),
  };
  menuTobeUpdated.push(newItemWithId);
  saveMenu(menuTobeUpdated);
  res.send(`${newItem.title} has been added! 👏`);
});

// retrieve an specific item from the database
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let currentMenu = getMenu();
  if (!doesMenuExist(id)) {
    res
      .status(404)
      .send(
        "The item does not exist... 💔 \nDouble check the ID and try again?"
      );
  }
  let item = currentMenu.find((item) => item.id === id);
  res.send(item);
});

// update an item in the database
router.put("/", (req, res) => {
  const { id } = req.body;
  let currentMenu = getMenu();
  if (!doesMenuExist(id)) {
    res
      .status(404)
      .send(
        "The item does not exist... 💔 \nDouble check the ID and try again?"
      );
    return;
  }
  let adjustedMenu = currentMenu.map((item) => {
    if (item.id === id) {
      return req.body;
    }
    return item;
  });
  saveMenu(adjustedMenu);
  res.send(`it is being updated! ✨`);
});

// delete an item from the database
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let currentMenu = getMenu();
  if (!doesMenuExist(id)) {
    res
      .status(404)
      .send(
        "The item does not exist... 💔 \nDouble check the ID and try again?"
      );
  }
  let itemToBeDeleted = currentMenu.find((item) => item.id === id);
  let adjustMenu = currentMenu.filter((item) => item.id != id);
  saveMenu(adjustMenu);
  res.send(`${itemToBeDeleted.title} has been deleted! 👌`);
});

export default router;
