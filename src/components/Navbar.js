import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showNavber, setShowNavber] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img alt="" src="image/dewilim.png" width="130px" height="45px" />
          <h4 className="logobar">&#8826;Dewilim&#8725;&#8827;</h4>
        </Link>
        {showNavber ? (
          <FaTimes
            className="show-navbar"
            onClick={() => setShowNavber((show) => !show)}
          />
        ) : (
          <FaBars
            className="show-navbar"
            onClick={() => setShowNavber((show) => !show)}
          />
        )}

        <ul
          className="d-flex"
          style={{
            height: showNavber ? "91vh" : "0",
          }}
        >
          <li className="#home">
            <Link to="/">الرئيسية</Link>
          </li>
          {/* <li>
            <Link to="about">معلومات عنا</Link>
          </li>
          <li>
            <Link to="services">الخدمات</Link>
          </li> */}
          <li>
            <Link to="projects">الاعمال السابقة</Link>
          </li>
          <li>
            <Link to="order-service">طلب خدمة</Link>
          </li>
          <li>
            <Link to="blogs">المدونات</Link>
          </li>
          <li>
            <Link to="contact">اتصل بنا</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
