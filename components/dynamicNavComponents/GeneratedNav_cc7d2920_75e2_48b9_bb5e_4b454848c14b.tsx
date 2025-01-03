
import React, { useState } from 'react';

const GeneratedNav_cc7d2920_75e2_48b9_bb5e_4b454848c14b = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "tyutu",
    "label": "tyuty",
    "href": "utyutu"
  },
  {
    "id": "tyutyu",
    "label": "tuyt",
    "href": "tyutyu"
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

export default GeneratedNav_cc7d2920_75e2_48b9_bb5e_4b454848c14b;
