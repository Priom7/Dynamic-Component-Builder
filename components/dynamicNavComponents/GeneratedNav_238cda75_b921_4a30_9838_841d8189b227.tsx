
import React, { useState } from 'react';

const GeneratedNav_238cda75_b921_4a30_9838_841d8189b227 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "1",
    "label": "2",
    "href": "123"
  },
  {
    "id": "2",
    "label": "3",
    "href": "234"
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

export default GeneratedNav_238cda75_b921_4a30_9838_841d8189b227;
