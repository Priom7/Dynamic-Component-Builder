
import React, { useState } from 'react';

const GeneratedNav_3ad1dd04_8671_4191_9958_09bba7169bac = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "wefewf",
    "label": "wefewf",
    "href": "wefwef"
  },
  {
    "id": "wer2435432",
    "label": "5345435",
    "href": "34534"
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

export default GeneratedNav_3ad1dd04_8671_4191_9958_09bba7169bac;
