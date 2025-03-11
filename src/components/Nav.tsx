import {useNavigate, useLocation} from "react-router-dom";
import { CSSProperties } from "react";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav style={navStyle}>
      <ul style={navListStyle}>
        <li>
          <button
            onClick={() => handleNavigation("/")}
            style={location.pathname === "/potential" ? activeLinkStyle : linkStyle}
          >
            Potential Matches
          </button>
        </li>
      </ul>
    </nav>
    );
  };

  const navStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "0",
    listStyle: "none",
    backgroundColor: "transparent",


  };

  const navListStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    margin: "0",
    padding: "0",
    listStyle: "none",
  };

  const linkStyle: CSSProperties = {
    display: "block",
    padding: "10px",
    color: "white",
    textDecoration: "none",
  };  

  const activeLinkStyle: CSSProperties = { 
    ...linkStyle,
    color: "red",
  };




export default Nav;


// TODO: Add necessary code to display the navigation bar and link between the pages
