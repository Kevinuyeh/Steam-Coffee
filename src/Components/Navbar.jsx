// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import imglogo from "../assets/logobg.png";

// function Navbar() {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div>
//       <nav className="bg-almond shadow-md flex items-center justify-between fixed top-0 w-full z-50 h-24 p-3">
//         {/* Logo and title aligned to the left */}
//         <div className="flex items-center mx-8">
//           <Link to="/" className="flex items-center">
//             <img src={imglogo} alt="/img" className="h-[50px]" />
//             <span className="text-gray-800 font-medium font-galada text-lg md:text-xl">
//               Steam Coffee
//             </span>
//           </Link>
//         </div>

//         {/* Hamburger Icon for mobile */}
//         <span onClick={handleNav} className="md:hidden block cursor-pointer">
//           {nav ? (
//             <AiOutlineClose size={25} color="white" />
//           ) : (
//             <AiOutlineMenu size={25} color="white" />
//           )}
//         </span>

//         {/* Navigation items */}
//         <ul
//           className={`${
//             nav ? "left-0 bg-lbrown" : "-left-full"
//           } md:static absolute md:mx-8 top-0 md:top-12 md:flex md:items-center w-[75%] md:w-auto h-screen md:h-auto p-5 md:p-0 transition-all duration-500 ease-in-out md:ml-auto`}
//         >
//           <li className="text-gray-800 font-medium text-xl p-2">
//             <Link to="/" onClick={() => setNav(false)}>
//               Home
//             </Link>
//           </li>
//           <li className="text-gray-800 font-medium text-xl p-2">
//             <Link to="/about" onClick={() => setNav(false)}>
//               About
//             </Link>
//           </li>
//           <li className="text-gray-800 font-medium text-xl p-2">
//             <Link to="/" onClick={() => setNav(false)}>
//               Blog
//             </Link>
//           </li>
//           <li className="text-gray-800 font-medium text-xl p-2">
//             <Link to="/contact" onClick={() => setNav(false)}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



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
    <nav className="bg-almond shadow-md fixed top-0 w-full z-50 h-24 px-3 flex items-center relative">
      
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
          <Link to="/">Blog</Link>
        </li>
        <li className="text-chocolate font-medium text-xl hover:bg-lbrown transition p-3 rounded-xl">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* HAMBURGER - RIGHT (Mobile only) */}
      <div className="ml-auto mr-6 md:hidden cursor-pointer" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`${
          nav ? "left-0" : "-left-full"
        } fixed top-0 h-screen w-[75%] bg-lbrown p-6 transition-all duration-500 md:hidden`}
      >
        <li className="text-gray-800 font-medium text-xl py-4">
          <Link to="/" onClick={() => setNav(false)}>Home</Link>
        </li>
        <li className="text-gray-800 font-medium text-xl py-4">
          <Link to="/about" onClick={() => setNav(false)}>About</Link>
        </li>
        <li className="text-gray-800 font-medium text-xl py-4">
          <Link to="/" onClick={() => setNav(false)}>Blog</Link>
        </li>
        <li className="text-gray-800 font-medium text-xl py-4">
          <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
