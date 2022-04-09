import { makeRequest } from "../helper.js";
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleMenuItem = () => {
  const location = useLocation();
  const id = location.state;
  const navigate = useNavigate();
  const [item, setItem] = useState([]);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [isBurgers, setIsBurgers] = useState(false);
  const [isSteaks, setIsSteaks] = useState(false);
  const [isSweets, setIsSweets] = useState(false);
  const [isDrinks, setIsDrinks] = useState(false);

  useEffect(() => {
    let response = makeRequest(`/api/menu/${id}`, "GET");
    response.then((jsonData) => setItem(jsonData));

    setTitle(item.title);
    setPrice(item.price);
    setDescription(item.description);
    setCategory(item.category);

    if (category === "Burgers") {
      setIsBurgers(true);
    } else if (category === "Steak or Ribs") {
      setIsSteaks(true);
    } else if (category === "Sweets") {
      setIsSweets(true);
    } else if (category === "Drinks") {
      setIsDrinks(true);
    }
  }, [category, id, item.category, item.description, item.price, item.title]);
  //console.log(category);

  const selectedBurgers = (e) => {
    setCategory("Burgers");
    setIsBurgers(true);
    setIsSteaks(false);
    setIsDrinks(false);
    setIsSweets(false);
  };

  const selectedSteaks = (e) => {
    setCategory("Steak or Ribs");
    setIsBurgers(false);
    setIsSteaks(true);
    setIsDrinks(false);
    setIsSweets(false);
  };

  const selectedSweets = (e) => {
    setCategory("Sweets");
    setIsBurgers(false);
    setIsSteaks(false);
    setIsDrinks(false);
    setIsSweets(true);
  };
  const selectedDrinks = (e) => {
    setCategory("Drinks");
    setIsBurgers(false);
    setIsSteaks(false);
    setIsDrinks(true);
    setIsSweets(false);
  };

  const updateItem = () => {
    setIsEditing(false);
    let edit = {
      category: category,
      title: title,
      description: description,
      price: Number(price),
      id: id,
    };
    console.log(edit);
    makeRequest(`/api/menu/`, "PUT", edit);

    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div style={rootStyle}>
      <div style={headerStyle}>
        <h1 style={{ lineHeight: "25px" }}>
          <span style={{ color: "#0e2636" }}>★</span> Item Overview
          <span style={{ color: "#0e2636" }}> ★</span>
        </h1>
      </div>
      <div style={{ ...containerStyle, height: "80px" }}>
        <div>
          <input
            type="radio"
            name="burgers"
            value="Burgers"
            checked={isBurgers}
            onChange={(e) => selectedBurgers()}
          />
          <label name="burgers">Burgers</label>
        </div>
        <div>
          <input
            type="radio"
            name="steaks-or-ribs"
            value="Steak or Ribs"
            checked={isSteaks}
            onChange={(e) => selectedSteaks()}
          />
          <label name="burgers">Steak or Ribs</label>
        </div>
        <div>
          <input
            type="radio"
            name="sweets"
            value="Sweets"
            checked={isSweets}
            onChange={(e) => selectedSweets()}
          />
          <label name="burgers">Sweets</label>
        </div>
        <div>
          <input
            type="radio"
            name="drinks"
            value="Drinks"
            checked={isDrinks}
            onChange={(e) => selectedDrinks()}
          />
          <label name="burgers">Drinks</label>
        </div>
      </div>
      <div style={{ ...containerStyle, height: "80px" }}>
        <h6 style={labelStyle}>
          Title <br />
          <input
            style={inputStyle}
            type="text"
            name="title"
            disabled={!isEditing}
            value={title || ""}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h6>

        <h6 style={labelStyle}>
          Price
          <br />
          <input
            style={inputStyle}
            type="number"
            name="price"
            disabled={!isEditing}
            value={price || ""}
            onChange={(e) => setPrice(e.currentTarget.value)}
          />
        </h6>
      </div>
      <div style={{ ...containerStyle, height: "140px" }}>
        <h6 style={labelStyle}>
          Description <br />
          <textarea
            rows="4"
            style={{ ...inputStyle, width: "300px" }}
            type="text"
            name="description"
            disabled={!isEditing}
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
        </h6>
      </div>

      <div style={containerStyle}>
        {!isEditing ? (
          <button
            style={buttonStyle}
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          <button
            style={{ ...buttonStyle, backgroundColor: "#1d7155" }}
            type="button"
            onClick={() => updateItem()}
          >
            Save
          </button>
        )}
        <button
          style={{ ...buttonStyle, backgroundColor: "#aa443c" }}
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const rootStyle = {
  margin: "auto",
  marginTop: "80px",
  display: "flex",
  flexDirection: "column",
  border: "solid #2b5d7e 8px",
  borderRadius: "10px",
  backgroundColor: "#eddbc5",
  width: "600px",
};

const headerStyle = {
  fontFamily: "Angkor",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "12px",
  background: "#aa443c",
  width: "100%",
  height: "55px",
  color: "#eeeeee",
};

const containerStyle = {
  margin: "auto",
  textAlign: "left",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const labelStyle = {
  fontSize: "20px",
  marginTop: "20px",
  fontFamily: "Bebas Neue",
  fontWeight: "unset",
};

const inputStyle = {
  fontFamily: "Dosis",
  fontSize: "15px",
  width: "135px",
  border: "none",
  borderRadius: "5px",
  minHeight: "25px",
  padding: "5px",
};

const buttonStyle = {
  fontFamily: "Bebas Neue",
  margin: "20px auto",
  width: "100px",
  backgroundColor: "#2b5d7e",
  border: "none",
  borderRadius: "5px",
  height: "30px",
  color: "#eee",
  fontSize: "18px",
  cursor: "pointer",
};

export default SingleMenuItem;
