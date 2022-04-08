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
              items.map((item) =>
                item.category === "Burger" ? (
                  <div className="menu-item" key={item.id}>
                    <div className="menu-item-title">
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ) : null
              )
            )}
          </div>
        </div>

        <div className="steak-section">
          <div className="section-heading">
            <h2 className="heading-text">Steaks & Ribs</h2>
          </div>
          <div className="section-content">
            {menu.map((items) =>
              items.map((item) =>
                item.category === "Steak or Ribs" ? (
                  <div className="menu-item" key={item.id}>
                    <div className="menu-item-title">
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ) : null
              )
            )}
          </div>
        </div>
        <div className="sections-right">
          <div className="sweets-section">
            <div className="section-heading">
              <h2 className="heading-text">Sweets</h2>
            </div>
            <div className="section-content">
              {menu.map((items) =>
                items.map((item) =>
                  item.category === "Sweets" ? (
                    <div className="menu-item" key={item.id}>
                      <div className="menu-item-title">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                      </div>
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                    </div>
                  ) : null
                )
              )}
            </div>
          </div>
          <div className="drinks-section">
            <div className="section-heading">
              <h2 className="heading-text">Drinks</h2>
            </div>
            <div className="section-content">
              {menu.map((items) =>
                items.map((item) =>
                  item.category === "Drinks" ? (
                    <div className="menu-item" key={item.id}>
                      <div className="menu-item-title">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                      </div>
                      <p className="menu-item-description">
                        {item.description}
                      </p>
                    </div>
                  ) : null
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={loadMenu}>Open Menu</button> */}
    </div>
  );
}

export default App;
