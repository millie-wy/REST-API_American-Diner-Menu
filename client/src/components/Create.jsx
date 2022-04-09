const Create = () => {
  return (
    <div style={rootStyle}>
      <div style={headerStyle}>
        <h1 style={{ lineHeight: "20px" }}>★ Create new item ★</h1>
      </div>
      <form style={formStyle}>
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
            <input style={inputStyle} type="text" name="title" required />
          </label>
          <label style={labelStyle}>
            Price
            <br />
            <input style={inputStyle} type="number" name="price" required />
          </label>
        </div>
        <label style={labelStyle}>
          Description <br />
          <textarea
            style={inputStyle}
            type="text"
            name="description"
            required
          />
        </label>
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const rootStyle = {
  margin: "auto",
  marginTop: "80px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  border: "solid #2b5d7e 8px",
  borderRadius: "10px",
  backgroundColor: "#eddbc5",
  width: "400px",
};

const headerStyle = {
  fontFamily: "Angkor",
  textTransform: "uppercase",
  fontSize: "12px",
  background: "#2b5d7e",
  width: "100%",
  height: "55px",
  color: "#eeeeee",
};

const formStyle = {
  width: "fit-content",
  margin: "auto",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
};

const labelStyle = {
  fontSize: "20px",
  marginTop: "20px",
  fontFamily: "Bebas Neue",
};

const inputStyle = {
  fontFamily: "Dosis",
  fontSize: "15px",
  width: "100%",
  border: "none",
  borderRadius: "5px",
  minHeight: "25px",
};

const buttonStyle = {
  fontFamily: "Bebas Neue",
  margin: "20px auto",
  width: "100px",
  backgroundColor: "#aa443c",
  border: "none",
  borderRadius: "5px",
  height: "30px",
  color: "#eee",
  fontSize: "18px",
};

export default Create;
