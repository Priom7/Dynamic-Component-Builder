
import React, { useState } from 'react';

const GeneratedNav_256b4521_daaa_4e9e_b110_064dc0ba26d2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "eryetry",
    "label": "rtyrty",
    "href": "rtyrty"
  },
  {
    "id": "676",
    "label": "6767",
    "href": "6767"
  }
];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={menuOpen ? 'navbar-links open' : 'navbar-links'}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default GeneratedNav_256b4521_daaa_4e9e_b110_064dc0ba26d2;
