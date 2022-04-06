var Layout = function Layout() {
  //const [data, setData] = useState([]);

  var loadMenu = function loadMenu() {
    console.log("click");
    fetch("http://localhost:3000/api/menu").then(function (response) {
      return response.json();
    }).then(function (jsonData) {
      return console.log(jsonData);
    }).catch(function (err) {
      return console.log(err);
    });
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "HELLO FROM REACT"
    ),
    React.createElement(
      "button",
      { onClick: loadMenu },
      "Open Menu"
    )
  );
};