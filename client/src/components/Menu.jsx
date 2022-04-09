import { useState, useEffect } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { makeRequest } from "../helper.js";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    let response = makeRequest("/api/menu", "GET");
    response.then((jsonData) => setMenu([jsonData]));
  }, []);

  return menu.length === 0 ? (
    <h1 style={{ color: "#eee", textAlign: "center" }}>Loading...</h1>
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
                item.category === "Burgers" ? (
                  <div className="menu-item" key={item.id}>
                    <div className="menu-item-title">
                      <Link
                        className="link"
                        state={item.id}
                        to={`/menu/${item.id}`}
                      >
                        <p>{item.title}</p>
                      </Link>
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
                      <Link
                        className="link"
                        state={item.id}
                        to={`/menu/${item.id}`}
                      >
                        <p>{item.title}</p>
                      </Link>
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
                        <Link
                          className="link"
                          state={item.id}
                          to={`/menu/${item.id}`}
                        >
                          <p>{item.title}</p>
                        </Link>
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
                        <Link
                          className="link"
                          state={item.id}
                          to={`/menu/${item.id}`}
                        >
                          <p>{item.title}</p>
                        </Link>
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
    </div>
  );
}

export default App;
