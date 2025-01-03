
import React, { useState } from 'react';

const GeneratedNav_1880d3a5_decd_4ab7_bee3_5abe8e6f01d9 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "gkjty",
    "label": "ktykty",
    "href": "ktyktyk"
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

export default GeneratedNav_1880d3a5_decd_4ab7_bee3_5abe8e6f01d9;
