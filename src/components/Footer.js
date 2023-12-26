import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaUser,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="d-flex container">
        <Link to="" type="conect">
          <FaLinkedin />
        </Link>
        <Link to="" type="conect">
          <FaFacebookSquare />
        </Link>
        <Link to="" type="conect" id="a">
          <FaTwitterSquare />
        </Link>
        <Link to="" type="conect">
          <FaUser />
        </Link>
        <Link to="" type="conect">
          <FaInstagramSquare />
        </Link>
        <Link to="" type="conect">
          <FaWhatsappSquare />
        </Link>
      </div>
      <p>جميع الحقوق محفوظة &copy; 2023 - {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
