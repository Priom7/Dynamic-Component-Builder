
import React, { useState } from 'react';
import Link from 'next/link';

const GeneratedNav_7d60e93a_ab87_4331_af2f_88d8c39604cd = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
  {
    "id": "1",
    "label": "Home",
    "href": "/home"
  },
  {
    "id": "2",
    "label": "Timeline ",
    "href": "/timeline"
  },
  {
    "id": "2",
    "label": "Profile",
    "href": "/profile/{id}"
  }
];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <ul className={menuOpen ? 'navbar-links open' : 'navbar-links'}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default GeneratedNav_7d60e93a_ab87_4331_af2f_88d8c39604cd;
