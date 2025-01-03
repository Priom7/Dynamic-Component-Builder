
import React, { useState } from 'react';

const GeneratedNav_446e4ee2_7c43_4682_8374_cb08fd4f7d64 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "werfewf",
    "label": "wefwef",
    "href": "wefwefew"
  },
  {
    "id": "wefewf",
    "label": "wefwef",
    "href": "wefwef"
  },
  {
    "id": "wefwef",
    "label": "2w3r523",
    "href": "5235234"
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

export default GeneratedNav_446e4ee2_7c43_4682_8374_cb08fd4f7d64;
