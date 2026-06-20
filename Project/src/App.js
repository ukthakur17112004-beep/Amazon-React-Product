import React from 'react';
import './App.css';

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">amazon</div>
        <div className="search-box">
          <input type="text" placeholder="Search Amazon" />
          <button>🔍</button>
        </div>
        <div className="menu-btn" onClick={toggleMenu}>
          ☰
        </div>
        <div className="nav-links" id="navLinks">
          <a href="#">Sign In</a>
          <a href="#">Orders</a>
          <a href="#">Cart</a>
        </div>
      </header>

      <nav className="menu">
        <div className="dropdown">
          <button className="dropbtn">Home ▼</button>
          <div className="dropdown-content">
            <a href="#">Furniture</a>
            <a href="#">Kitchen</a>
            <a href="#">Decor</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Electronics ▼</button>
          <div className="dropdown-content">
            <a href="#">Laptops</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
