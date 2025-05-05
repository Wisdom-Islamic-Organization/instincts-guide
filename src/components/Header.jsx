import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-animation">
        <img 
          src="/logo1.png" 
          alt="Left Logo" 
          className="header-logo" 
        />
        <h1>Your Instincts</h1>
        <img 
          src="/logo2.png" 
          alt="Right Logo" 
          className="header-logo" 
        />
      </div>
      <h2>A Vital Guide to Your Career Path</h2>
    </header>
  );
}

export default Header; 