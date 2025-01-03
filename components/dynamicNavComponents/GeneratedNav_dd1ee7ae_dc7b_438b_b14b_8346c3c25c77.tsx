
import React, { useState } from 'react';

const GeneratedNav_dd1ee7ae_dc7b_438b_b14b_8346c3c25c77 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "dfgdfg",
    "label": "dfgdf",
    "href": "gdfgdfgdf"
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

export default GeneratedNav_dd1ee7ae_dc7b_438b_b14b_8346c3c25c77;
