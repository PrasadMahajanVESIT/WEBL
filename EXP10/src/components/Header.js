import React from 'react';

function Header() {
  return (
    <header className="header">
      <h2>My Website</h2>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;