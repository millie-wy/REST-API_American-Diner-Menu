import fs from "fs";

// get the full db
export function getMenu() {
  let menuData = fs.readFileSync("./menuData.json");
  let menu = JSON.parse(menuData);
  return menu;
}

// save an item to the db
export function saveMenu(updatedMenu) {
  fs.writeFileSync(
    "./menuData.json",
    JSON.stringify(updatedMenu, null, 2),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
}

// check if the item exists in the db
export function doesMenuExist(id) {
  let currentMenu = getMenu();
  return currentMenu.some((item) => item.id === id);
}
