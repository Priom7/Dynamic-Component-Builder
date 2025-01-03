
import React, { useState } from 'react';

const GeneratedNav_90a15229_93c2_40c1_8fe5_7f1b1899dfbe = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "123",
    "label": "qwer",
    "href": "https://rpcp9gh1-3000.uks1.devtunnels.ms/generated-tab-nav"
  },
  {
    "id": "wt",
    "label": "fvw",
    "href": "https://rpcp9gh1-3000.uks1.devtunnels.ms/table_builder"
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

export default GeneratedNav_90a15229_93c2_40c1_8fe5_7f1b1899dfbe;
