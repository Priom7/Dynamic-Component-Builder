
import React, { useState } from 'react';

const GeneratedNav_67538d6d_cea6_4257_9ee4_ff24cb6017f7 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "wefwe",
    "label": "wefew",
    "href": "wefwef"
  },
  {
    "id": "wefwef",
    "label": "wef",
    "href": "wefwefwef"
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

export default GeneratedNav_67538d6d_cea6_4257_9ee4_ff24cb6017f7;
