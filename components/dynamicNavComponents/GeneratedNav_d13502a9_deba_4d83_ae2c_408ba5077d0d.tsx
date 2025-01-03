
import React, { useState } from 'react';

const GeneratedNav_d13502a9_deba_4d83_ae2c_408ba5077d0d = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "tyjtj",
    "label": "tyjtyj",
    "href": "tjtyj/tyj/tyj/tyj/tj/tyjt"
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

export default GeneratedNav_d13502a9_deba_4d83_ae2c_408ba5077d0d;
