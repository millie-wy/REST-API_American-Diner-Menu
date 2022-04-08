import { useState, useEffect } from "react";
import "./app.css";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((response) => response.json())
      .then((jsonData) => {
        setMenu([...menu, jsonData]);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return menu.length === 0 ? (
    <h1>Loading</h1>
  ) : (
    <div id="menu">
      <div className="stripe s-top" />
      <div className="stripe s-bottom" />
      <div className="logo">
        <h1 className="brand">
          American
          <br />
          <span className="star">
            ★<span className="diner">Diner</span>★
          </span>
        </h1>
      </div>

      <div className="menu-content">
        <div className="burger-section">
          <div className="section-heading">
            <h2 className="heading-text">Burgers</h2>
          </div>
          <div className="section-content">
            {menu.map((items) =>
              items.map((item) => {
                if (item.category === "Burger")
                  return (
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
                    </div>
                  );
              })
            )}
          </div>
        </div>

        <div className="steak-section">
          <div className="section-heading">
            <h2 className="heading-text">Steaks & Ribs</h2>
          </div>
          <div></div>
        </div>
        <div className="sections-right">
          <div className="sweets-section">
            <div className="section-heading">
              <h2 className="heading-text">Sweets</h2>
            </div>
            <div></div>
          </div>
          <div className="drinks-section">
            <div className="section-heading">
              <h2 className="heading-text">Drinks</h2>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <button onClick={loadMenu}>Open Menu</button> */}
      {menu.map((items) =>
        items.map((item) => (
          // if (item.category === "Burger") {
          //   console.log(item.title, item.description, item.price);
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
          </div>
          // } else {
          //   console.log("ELSE: " + item.title, item.description, item.price);
          // }
        ))
      )}
    </div>
  );
}

export default App;
