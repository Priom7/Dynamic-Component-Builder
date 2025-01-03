// Add code for Navbar
import React from 'react';

interface NavProps {
  links: Array<{ href: string; label: string }>;
}

const Navbar: React.FC<NavProps> = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyApp</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
