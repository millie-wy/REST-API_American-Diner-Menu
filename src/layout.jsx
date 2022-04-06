const { useState, useEffect } = React;

const Layout = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((response) => response.json())
      .then((jsonData) => {
        setMenu([...menu, jsonData]);
      })
      .catch((err) => console.log(err));
  }, []);

  return menu.length === 0 ? (
    <h1>nothing to show ????</h1>
  ) : (
    <div
      style={{
        background: "yellow",
        height: "200px",
        width: "600px",
      }}
    >
      <h1>HELLO FROM REACT</h1>
      {/* <button onClick={loadMenu}>Open Menu</button> */}
      {menu.map((items) =>
        items.map((item) => {
          if (item.category === "Burger") {
            console.log(item.title, item.description, item.price);
            <div
              key={item.id}
              style={{
                height: "200px",
                width: "200px",
                background: "skyblue",
              }}
            >
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>;
          } else {
            console.log("ELSE: " + item.title, item.description, item.price);
          }
        })
      )}
      <p>End?</p>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Layout />);

// ReactDOM.render(<Layout />, document.querySelector("#root"));
