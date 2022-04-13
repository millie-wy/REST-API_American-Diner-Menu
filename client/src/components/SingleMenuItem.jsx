import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeRequest } from "../helper.js";

const SingleMenuItem = () => {
  const location = useLocation();
  const id = location.state;
  const navigate = useNavigate();
  const [item, setItem] = useState([] || "");

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [putOrDeleteStatus, setPutOrDeleteStatus] = useState("");
  const [isHiddingForm, setIsHiddingForm] = useState(false);

  useEffect(() => {
    // get a specific object from the db
    const fetchData = async () => {
      let response = await makeRequest(`/api/menu/${id}`, "GET");
      setItem(response);

      setTitle(item.title);
      setPrice(item.price);
      setDescription(item.description);
      setCategory(item.category);
    };
    fetchData();
  }, [id, item.category, item.description, item.price, item.title]);

  // update details of a specific object in the db
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
    showLoadingEffect(status);
  };

  // delete a specific object from the db
  const deleteItem = async () => {
    let status = await makeRequest(`/api/menu/${id}`, "DELETE");
    showLoadingEffect(status);
  };

  // reset status and redirect user back to menu after 2s
  const showLoadingEffect = (status) => {
    setIsHiddingForm(true);
    setPutOrDeleteStatus(status);
    setTimeout(() => {
      setIsHiddingForm(false);
      setPutOrDeleteStatus("");
      navigate("/");
    }, 2000);
  };

  return (
    <div style={rootStyle}>
      <div style={headerStyle}>
        <h1 style={{ lineHeight: "25px" }}>
          <span style={{ color: "#0e2636" }}>★</span> Item Overview
          <span style={{ color: "#0e2636" }}> ★</span>
        </h1>
      </div>
      {item.length > 1 ? (
        <div style={{ height: "340px", textAlign: "center" }}>
          <h2
            style={{ marginTop: "100px", marginBottom: 0, lineHeight: "25px" }}
          >
            {item}
          </h2>
          <p>
            This may be due to an invalid link or the item has been removed.
          </p>
          <button
            style={{ ...buttonStyle, width: "120px", marginTop: "20px" }}
            type="button"
            onClick={() => navigate("/")}
          >
            Back to Menu
          </button>
        </div>
      ) : (
        <div>
          {isHiddingForm ? (
            <div
              style={{
                height: "240px",
                textAlign: "center",
              }}
            >
              <h2 style={{ marginTop: "130px", lineHeight: "25px" }}>
                {putOrDeleteStatus}
              </h2>
              <h4 style={{ fontWeight: "unset", color: "#a38764" }}>
                You will be directed to the menu...
              </h4>
            </div>
          ) : (
            <div>
              <div style={radioContainerStyle}>
                <input
                  type="radio"
                  name="category"
                  value="Burgers"
                  checked={category === "Burgers"}
                  disabled={!isEditing}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                />
                <label name="burgers">Burgers</label>

                <input
                  type="radio"
                  name="category"
                  value="Steak or Ribs"
                  checked={category === "Steak or Ribs"}
                  disabled={!isEditing}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                />
                <label name="steak">Steak or Ribs</label>
                <input
                  type="radio"
                  name="category"
                  value="Sweets"
                  checked={category === "Sweets"}
                  disabled={!isEditing}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                />
                <label name="sweets">Sweets</label>
                <input
                  type="radio"
                  name="category"
                  value="Drinks"
                  checked={category === "Drinks"}
                  disabled={!isEditing}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                />
                <label name="drinks">Drinks</label>
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
              <div
                style={{
                  ...containerStyle,
                }}
              >
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

              <div style={{ textAlign: "center" }}>
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
          )}
        </div>
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
  width: "90%",
  maxWidth: "600px",
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
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  width: "85%",
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
  margin: "0 10px 20px 10px",
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
