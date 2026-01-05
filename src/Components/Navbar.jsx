import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import imglogo from "../assets/logobg.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-cream shadow-md fixed top-0 w-full z-50 h-24 px-3 flex items-center relative">
      
      {/* Logo - LEFT */}
      <div className="flex items-center ml-8">
        <Link to="/" className="flex items-center">
          <img src={imglogo} alt="logo" className="h-[50px]" />
          <span className="text-chocolate font-medium font-galada text-lg md:text-xl">
            Steam Coffee
          </span>
        </Link>
      </div>

      {/* CENTER NAV (Desktop) */}
      <ul
        className={`
          hidden md:flex items-center space-x-6
          absolute left-1/2 -translate-x-1/2
        `}
      >
        <li className="text-chocolate hover:bg-lbrown transition p-3 rounded-xl  font-medium text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="text-chocolate font-medium text-xl hover:bg-lbrown transition p-3 rounded-xl">
          <Link to="/about">About</Link>
        </li>
        <li className="text-chocolate font-medium text-xl hover:bg-lbrown transition p-3 rounded-xl">
          <Link to="/">Menu</Link>
        </li>
        <li className="text-cream font-medium text-xl bg-dbrown transition p-3 rounded-xl">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* HAMBURGER - RIGHT (Mobile only) */}
      <div className="ml-auto mr-6 md:hidden cursor-pointer" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      

    {/* MOBILE MENU */}
<ul
  className={`
    ${nav ? "left-0" : "-left-full"}
    fixed top-0 h-screen w-[75%]
    bg-cream p-6
    transition-all duration-500
    md:hidden
    flex flex-col
  `}
>
  {/* Mobile Logo */}
  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brown">
    <img src={imglogo} alt="logo" className="h-[45px]" />
    <span className="text-dbrown font-galada text-xl">
      Steam Coffee
    </span>
  </div>

  {/* Nav Items */}
  <li className="border-b border-brown py-4 text-dbrown text-lg font-medium">
    <Link to="/" onClick={() => setNav(false)}>Home</Link>
  </li>

  <li className="border-b border-brown py-4 text-dbrown text-lg font-medium">
    <Link to="/about" onClick={() => setNav(false)}>About</Link>
  </li>

  <li className="border-b border-brown py-4 text-dbrown text-lg font-medium">
    <Link to="/" onClick={() => setNav(false)}>Menu</Link>
  </li>

  <li className="py-4 text-dbrown text-lg font-medium">
    <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
  </li>
</ul>

    </nav>
  );
}

export default Navbar;
