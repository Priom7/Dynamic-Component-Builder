
import React, { useState } from 'react';

const GeneratedNav_5c0518ad_4503_419a_a2db_c6f7b2a870da = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "fdhfgh",
    "label": "fhfgh",
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

export default GeneratedNav_5c0518ad_4503_419a_a2db_c6f7b2a870da;
