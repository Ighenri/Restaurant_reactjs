import React from "react";
import "./NavBar.css";
import Logo from "../../Assets/Logo.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Button } from "../Reusable/Button";

export default function NavBar() {
  const defaultStyle = {
    backgroundColor: "white",
    color: "black",
    fontSize: "1.2rem",
    padding: "0.6rem 2.4rem",
    borderRadius: "1.5rem",
    marginLeft: "1rem",
    border: "none",
    fontWeight: "600",
  };
  const menuPage = [
    {
      text: "Home",
      Icon: <HomeIcon />,
    },
    {
      text: "About",
      Icon: <InfoIcon />,
    },
    {
      text: "Testimonial",
      Icon: <ChatBubbleRoundedIcon />,
    },
    {
      text: "Contact",
      Icon: <ContactPageIcon />,
    },
  ];

  return (
    <nav className="Navbar-container">
      <img className="logo" src={Logo} alt="" />
      <ul className="Navbar-wrapper">
        <li className="Navbar-list">
          <a href="">Home</a>
        </li>
        <li className="Navbar-list">
          <a href="">About</a>
        </li>
        <li className="Navbar-list">
          <a href="">Testimonial</a>
        </li>
        <li className="Navbar-list">
          <a href="">Contact</a>
        </li>
      </ul>
      <ShoppingCartIcon className="cart" />
      <Button style={defaultStyle} children="Book Now" />

      <div className="mobilePage">
        <ul>
          {menuPage.map((menu) => (
            <li key={menu.text}>
              {menu.Icon}
              <a href="">{menu.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
