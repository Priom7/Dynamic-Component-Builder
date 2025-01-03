
import React, { useState } from 'react';

const GeneratedNav_5a6212f9_b64a_4baf_955f_6ad58b8da6a1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "eryetry",
    "label": "rtyrty",
    "href": "rtyrty"
  },
  {
    "id": "676",
    "label": "6767",
    "href": "6767"
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

export default GeneratedNav_5a6212f9_b64a_4baf_955f_6ad58b8da6a1;
