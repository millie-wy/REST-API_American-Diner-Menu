import express from "express";
import { getMenu, saveMenu, doesMenuExist } from "../helperFunctions/helper.js";
import { v4 as uuidv4 } from "uuid";

// export const menu = JSON.parse(
//   await readFile(new URL("../menuData.json", import.meta.url))
// );

const router = express.Router();

// get the full menu from database
router.get("/", (req, res) => res.send(getMenu()));

// add a new item to the database
router.post("/", (req, res) => {
  let menuTobeUpdated = getMenu();
  const newItem = req.body;
  const newItemWithId = { ...newItem, id: uuidv4() };
  menuTobeUpdated.push(newItemWithId);
  saveMenu(menuTobeUpdated);
  res.send(`${newItem.title} has been added! 👏`);
});

/*
// retrieve an specific item from the database
router.get("/:id", (req, res) => {
  const { id } = req.params;
  //find
  const item = menu.filter((item) => item.id === id);
  res.send(item);
});
*/

// update an item in the database ?
router.put("/:id", (req, res) => {
  const { id } = req.params;
  let menuToBeAdjusted = getMenu().map((item) => {
    if (item.id == id) {
      return req.body;
    }
  });
  saveMenu(menuToBeAdjusted);
  // req.body;
  // req.params.id;
});

/*
// delete an item from the database  *** "error": "Assignment to constant variable."
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let currentMenu = getMenu();
  if (!doesMenuExist(id)) {
    res.status(404).send("does not exists.");
  }
  /* Delete the menu with ID from currentMenu */
//saveMenu();

/* const { id } = req.params;
  menu = menu.filter((item) => item.id !== id);
  res.send(`${newItem.title} has been deleted! 👌`); */

//});

export default router;
