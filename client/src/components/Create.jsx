import { useState } from "react";
import { makeRequest } from "../helper";

const Create = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  const [postStatus, setPostStatus] = useState("");

  const addItem = async (e) => {
    setIsAdded(true);
    e.preventDefault();
    let newItem = {
      category: category,
      title: title,
      description: description,
      price: price,
    };

    let status = await makeRequest("/api/menu", "POST", newItem);
    setPostStatus(status);
    setTimeout(() => {
      setIsAdded(false);
      setPostStatus("");
    }, 2000);
  };

  return (
    <div style={rootStyle}>
      <div style={headerStyle}>
        <h1 style={{ lineHeight: "25px" }}>
          <span style={{ color: "#0e2636" }}>★</span> Add new item
          <span style={{ color: "#0e2636" }}> ★</span>
        </h1>
      </div>
      {isAdded ? (
        <div style={{ height: "340px", textAlign: "center" }}>
          <h2 style={{ lineHeight: "280px" }}>{postStatus}</h2>
        </div>
      ) : (
        <form style={formStyle} onSubmit={addItem}>
          <div style={radioContainerStyle}>
            <input
              type="radio"
              name="category"
              value="Burgers"
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <label style={radioLabelStyle} name="burgers">
              Burgers
            </label>

            <input
              type="radio"
              name="category"
              value="Steak or Ribs"
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <label style={radioLabelStyle} name="steak">
              Steak or Ribs
            </label>
            <input
              type="radio"
              name="category"
              value="Sweets"
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <label style={radioLabelStyle} name="sweets">
              Sweets
            </label>
            <input
              type="radio"
              name="category"
              value="Drinks"
              required
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
            <label style={radioLabelStyle} name="drinks">
              Drinks
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "left",
              gap: "20px",
            }}
          >
            <label style={labelStyle}>
              Title <br />
              <input
                style={inputStyle}
                type="text"
                name="title"
                required
                onChange={(e) => setTitle(e.currentTarget.value)}
              />
            </label>
            <label style={labelStyle}>
              Price
              <br />
              <input
                style={inputStyle}
                type="number"
                name="price"
                required
                onChange={(e) => setPrice(e.currentTarget.value)}
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <label style={labelStyle}>
              Description <br />
              <textarea
                rows="4"
                style={{ ...inputStyle, width: "300px" }}
                type="text"
                name="description"
                required
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </label>
          </div>
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </form>
      )}
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

const formStyle = {
  width: "fit-content",
  margin: "auto",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  minHeight: "340px",
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

export default Create;
