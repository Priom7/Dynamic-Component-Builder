
import React, { useState } from 'react';

const GeneratedNav_ded5b1d3_b8dd_4767_b8ff_675215a80f22 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "sdvsd",
    "label": "vdsvsd",
    "href": "vsdv"
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

export default GeneratedNav_ded5b1d3_b8dd_4767_b8ff_675215a80f22;
