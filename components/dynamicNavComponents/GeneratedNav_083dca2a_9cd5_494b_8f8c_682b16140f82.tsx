
import React, { useState } from 'react';

const GeneratedNav_083dca2a_9cd5_494b_8f8c_682b16140f82 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "Form Builder",
    "label": "Form Builder",
    "href": "https://rpcp9gh1-3000.uks1.devtunnels.ms/form_builder"
  },
  {
    "id": "Table Builder",
    "label": "Table Builder",
    "href": "https://rpcp9gh1-3000.uks1.devtunnels.ms/table_builder"
  },
  {
    "id": "Tab Builder",
    "label": "Tab Builder",
    "href": "https://rpcp9gh1-3000.uks1.devtunnels.ms/tab_builder"
  },
  {
    "id": "Nav Builder",
    "label": "Nav Builder",
    "href": "https://rpcp9gh1-3000.uks1.devtunnels.ms/nav_builder"
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

export default GeneratedNav_083dca2a_9cd5_494b_8f8c_682b16140f82;
