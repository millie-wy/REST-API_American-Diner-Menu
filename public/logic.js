/*
document.getElementById("openmenu").addEventListener("click", async (event) => {
  let menu = await loadMenu();
  console.log(menu);
});

async function loadMenu() {
  console.log("click");
  try {
    let response = await fetch("http://localhost:3000/api/menu");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
*/
