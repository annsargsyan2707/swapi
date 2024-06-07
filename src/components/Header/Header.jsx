import React from "react";

const Header = () => {
  return (
    <header>
      <div>StarWars</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};
export default Header;
