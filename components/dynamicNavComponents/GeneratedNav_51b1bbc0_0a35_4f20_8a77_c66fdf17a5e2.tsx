
import React, { useState } from 'react';

const GeneratedNav_51b1bbc0_0a35_4f20_8a77_c66fdf17a5e2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "fdhfgh",
    "label": "fhfgh",
    "href": "fghgfh"
  },
  {
    "id": "dhgdh",
    "label": "dghfgdfh",
    "href": "fghgfh"
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

export default GeneratedNav_51b1bbc0_0a35_4f20_8a77_c66fdf17a5e2;
