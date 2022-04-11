import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeRequest } from "../helper.js";

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

  useEffect(() => {
    let response = makeRequest(`/api/menu/${id}`, "GET");
    response.then((jsonData) => setItem(jsonData));

    setTitle(item.title);
    setPrice(item.price);
    setDescription(item.description);
    setCategory(item.category);
  }, [id, item.category, item.description, item.price, item.title]);

  const updateItem = async () => {
    setIsEditing(false);
    let body = {
      category: category,
      title: title,
      description: description,
      price: Number(price),
      id: id,
    };

    let status = await makeRequest("/api/menu/", "PUT", body);
    alert(status);
    setTimeout(() => navigate("/"), 2000);
  };

  const deleteItem = async () => {
    let status = await makeRequest(`/api/menu/${id}`, "DELETE");
    alert(status);
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
      <div style={radioContainerStyle}>
        <input
          type="radio"
          name="category"
          value="Burgers"
          checked={category === "Burgers"}
          disabled={!isEditing}
          onChange={(e) => setCategory(e.currentTarget.value)}
        />
        <label style={radioLabelStyle} name="burgers">
          Burgers
        </label>

        <input
          type="radio"
          name="category"
          value="Steak or Ribs"
          checked={category === "Steak or Ribs"}
          disabled={!isEditing}
          onChange={(e) => setCategory(e.currentTarget.value)}
        />
        <label style={radioLabelStyle} name="steak">
          Steak or Ribs
        </label>
        <input
          type="radio"
          name="category"
          value="Sweets"
          checked={category === "Sweets"}
          disabled={!isEditing}
          onChange={(e) => setCategory(e.currentTarget.value)}
        />
        <label style={radioLabelStyle} name="sweets">
          Sweets
        </label>
        <input
          type="radio"
          name="category"
          value="Drinks"
          checked={category === "Drinks"}
          disabled={!isEditing}
          onChange={(e) => setCategory(e.currentTarget.value)}
        />
        <label style={radioLabelStyle} name="drinks">
          Drinks
        </label>
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
          onClick={() => deleteItem()}
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

const radioContainerStyle = {
  fontFamily: "Bebas Neue",
  fontSize: "20px",
  margin: "20px auto 10px auto",
  textAlign: "left",
  display: "flex",
  justifyContent: "center",
};

const radioLabelStyle = {
  margin: "0 10px 0 5px",
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
