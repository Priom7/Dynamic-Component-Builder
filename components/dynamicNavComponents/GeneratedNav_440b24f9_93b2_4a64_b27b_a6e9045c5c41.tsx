
import React, { useState } from 'react';

const GeneratedNav_440b24f9_93b2_4a64_b27b_a6e9045c5c41 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "1",
    "label": "1",
    "href": "1"
  },
  {
    "id": "2",
    "label": "2",
    "href": "2"
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

export default GeneratedNav_440b24f9_93b2_4a64_b27b_a6e9045c5c41;
