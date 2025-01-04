import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import app_logo from '../public/images/app_logo.png';

interface NavProps {
  links: Array<{ href: string; label: string; icon?: JSX.Element }>;
}

const Navbar: React.FC<NavProps> = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <Image src={app_logo} alt="App Logo" width={80} height={80} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link href={link.href} legacyBehavior>
                  <a className="nav-link">
                    {link.icon}
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
