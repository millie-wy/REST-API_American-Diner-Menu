import fs from "fs";

export function getMenu() {
  let menuData = fs.readFileSync("./menuData.json");
  let menu = JSON.parse(menuData);
  return menu;
}

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

export function doesMenuExist(id) {
  let currentMenu = getMenu();
  let item = currentMenu.find((item) => {
    return item.id === id;
  });
  if (item) {
    return true;
  } else {
    return false;
  }
}
