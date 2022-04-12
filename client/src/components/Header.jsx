import { faUtensils, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={headerStyle}>
      <Link style={linkStyle} to="/">
        <FontAwesomeIcon style={iconStyle} icon={faUtensils} />
        MENU
      </Link>
      <Link style={linkStyle} to="/create">
        <FontAwesomeIcon style={iconStyle} icon={faPlus} />
        ADD
      </Link>
    </div>
  );
};

const headerStyle = {
  margin: "20px",
  textAlign: "center",
};

const linkStyle = {
  padding: "20px",
  fontSize: "20px",
  fontWeight: "bold",
  textDecoration: "none",
  color: "#eee",
};

const iconStyle = {
  paddingRight: "10px",
};

export default Header;
