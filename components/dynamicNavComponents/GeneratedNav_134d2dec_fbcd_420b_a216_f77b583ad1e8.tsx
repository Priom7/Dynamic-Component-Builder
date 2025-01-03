
import React, { useState } from 'react';

const GeneratedNav_134d2dec_fbcd_420b_a216_f77b583ad1e8 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "dfgfdg",
    "label": "dfgdfg",
    "href": "dgfdf"
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

export default GeneratedNav_134d2dec_fbcd_420b_a216_f77b583ad1e8;
