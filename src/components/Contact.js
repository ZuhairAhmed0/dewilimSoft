import React from "react";
import { FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="contact">
      <div className="container d-flex">
        <div>
          <FaPhoneAlt />
          <h3>اتصال مباشر</h3>
          <Link to="#">249908236266+</Link>
          <br />
          <Link to="#">249968771940+</Link>
        </div>
        <div>
          <FaWhatsapp />
          <h3>مراسلة عبر الواتساب</h3>
          <Link to="#">249126179070+</Link>
        </div>
        <div className="email">
          <FaMailBulk />
          <h3>البريد الالكتروني</h3>
          <Link to="#">dewilimsoftware@gmail.com</Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
