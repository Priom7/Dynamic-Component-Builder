
import React, { useState } from 'react';

const GeneratedNav_d4c35ea4_794a_4288_813c_859f5458f523 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "erfwf",
    "label": "wefewf",
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

export default GeneratedNav_d4c35ea4_794a_4288_813c_859f5458f523;
