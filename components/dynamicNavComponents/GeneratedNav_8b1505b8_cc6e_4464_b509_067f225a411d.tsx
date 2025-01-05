
import React, { useState } from 'react';

const GeneratedNav_8b1505b8_cc6e_4464_b509_067f225a411d = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "1",
    "label": "Home",
    "href": "/home"
  },
  {
    "id": "2",
    "label": "Timeline",
    "href": "/timeline"
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

export default GeneratedNav_8b1505b8_cc6e_4464_b509_067f225a411d;
