var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _React = React,
    useState = _React.useState,
    useEffect = _React.useEffect;


var Layout = function Layout() {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      menu = _useState2[0],
      setMenu = _useState2[1];

  useEffect(function () {
    fetch("http://localhost:3000/api/menu").then(function (response) {
      return response.json();
    }).then(function (jsonData) {
      setMenu([].concat(_toConsumableArray(menu), [jsonData]));
    }).catch(function (err) {
      return console.log(err);
    });
  }, []);

  return menu.length === 0 ? React.createElement(
    "h1",
    null,
    "nothing to show ????"
  ) : React.createElement(
    "div",
    {
      style: {
        background: "yellow",
        height: "200px",
        width: "500px"
      }
    },
    React.createElement(
      "h1",
      null,
      "HELLO FROM REACT"
    ),
    menu.map(function (items) {
      return items.map(function (item) {
        return (
          // if (item.category === "Burger") {
          //   console.log(item.title, item.description, item.price);
          React.createElement(
            "div",
            {
              key: item.id,
              style: {
                height: "200px",
                width: "200px",
                background: "skyblue"
              }
            },
            React.createElement(
              "p",
              null,
              item.title
            ),
            React.createElement(
              "p",
              null,
              item.description
            ),
            React.createElement(
              "p",
              null,
              item.price
            )
          )
          // } else {
          //   console.log("ELSE: " + item.title, item.description, item.price);
          // }

        );
      });
    }),
    React.createElement(
      "p",
      null,
      "End?"
    )
  );
};

ReactDOM.render(React.createElement(Layout, null), document.querySelector("#root"));

// const root = createRoot(document.getElementById("root"));
// root.render(<Layout />);