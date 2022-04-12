import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div style={rootStyle}>
      <FontAwesomeIcon style={iconStyle} icon={faGithub} /> MILLIE-WY © 2022
    </div>
  );
};

const rootStyle = {
  textAlign: "center",
  padding: "10px",
  fontSize: "11px",
  color: "#eee",
};

const iconStyle = {
  paddingRight: "5px",
};

export default Footer;
