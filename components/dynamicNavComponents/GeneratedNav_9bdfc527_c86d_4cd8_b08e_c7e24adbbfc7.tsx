
import React, { useState } from 'react';

const GeneratedNav_9bdfc527_c86d_4cd8_b08e_c7e24adbbfc7 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "fgerer",
    "label": "greger",
    "href": "gerg"
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

export default GeneratedNav_9bdfc527_c86d_4cd8_b08e_c7e24adbbfc7;
