import React from "react";

function Navigation() {
  return (
    <nav className="navBar">
      <a href="/">Hem</a>
      <a href="/">Nyheter</a>
      <a href="/">Styrelsen</a>
      <a href="/">Om föreningen</a>
      <button className="navBtn">Kontakta oss</button>
    </nav>
  );
}

export default Navigation;
