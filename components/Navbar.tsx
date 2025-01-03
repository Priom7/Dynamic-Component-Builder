// Add code for Navbar
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import app_logo from '../public/images/app_logo.png';

interface NavProps {
  links: Array<{ href: string; label: string }>;
}

const Navbar: React.FC<NavProps> = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <Link href="/">
        <Image src={app_logo} alt="App Logo" width={80} height={80} />
      </Link>
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
