
import React, { useState } from 'react';

const GeneratedNav_399b6375_6847_4774_86f0_b50f137bb30d = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "1",
    "label": "Nav1",
    "href": "/nav1"
  },
  {
    "id": "2",
    "label": "Nav2",
    "href": "/nav2"
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

export default GeneratedNav_399b6375_6847_4774_86f0_b50f137bb30d;
