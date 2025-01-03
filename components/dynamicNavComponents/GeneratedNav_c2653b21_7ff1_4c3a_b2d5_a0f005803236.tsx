
import React, { useState } from 'react';

const GeneratedNav_c2653b21_7ff1_4c3a_b2d5_a0f005803236 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "fdhfgh",
    "label": "fhfgh",
    "href": "fghgfh"
  },
  {
    "id": "dhgdh",
    "label": "dghfgdfh",
    "href": "fghgfh"
  },
  {
    "id": "dbhdhethye",
    "label": "y45y45",
    "href": "y4545y45y"
  },
  {
    "id": "456456",
    "label": "456456",
    "href": "456456456"
  },
  {
    "id": "45645645",
    "label": "456456",
    "href": "456456"
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

export default GeneratedNav_c2653b21_7ff1_4c3a_b2d5_a0f005803236;
