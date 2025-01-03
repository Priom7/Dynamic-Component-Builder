
import React, { useState } from 'react';

const GeneratedNav_e50847e6_fa2c_4d17_8cc7_a573fff757b5 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "3654346",
    "label": "reyey",
    "href": "/erte/ertger/ger"
  },
  {
    "id": "ergtergre",
    "label": "ger435345",
    "href": "/erge/g/erg/reg/erg"
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

export default GeneratedNav_e50847e6_fa2c_4d17_8cc7_a573fff757b5;
