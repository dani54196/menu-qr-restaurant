import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="d-flex justify-content-around">
      <Link to="contact">Contacto</Link>
      <p>
        By <a href="https://softwareofsouth.xyz">Software of South</a>
      </p>
    </div>
  );
}

export default Footer;
