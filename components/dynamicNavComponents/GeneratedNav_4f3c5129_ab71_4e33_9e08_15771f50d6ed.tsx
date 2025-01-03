
import React, { useState } from 'react';

const GeneratedNav_4f3c5129_ab71_4e33_9e08_15771f50d6ed = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "wefewf",
    "label": "wefwef",
    "href": "wefwef"
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

export default GeneratedNav_4f3c5129_ab71_4e33_9e08_15771f50d6ed;
