import { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../../assets/image/logo.jpg";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<div className="sticky top-0 z-50 bg-bodyColor shadow-md">
  {/* Top Notice */}
  <div className="flex p-2 justify-center">
    <p className="text-red-600">This website is under construction</p>
  </div>

  {/* Main Navbar */}
  <div className="flex items-center justify-between px-4 py-3 md:px-8">
    {/* LEFT SIDE: Logo + Name (always left on all screens) */}
    <div className="flex items-center gap-2">
      <img className="w-10 h-10 rounded-full cursor-pointer" src={logo} alt="Logo" />
      <h1 className="text-green-400 font-titleFont font-bold hover:text-green-600 cursor-pointer">
        SAIFUL ISLAM
      </h1>
    </div>

    {/* RIGHT SIDE (Mobile = toggle; Desktop = menu + buttons) */}
    <div className="flex items-center gap-4">
      {/* Desktop Menu + Buttons (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-6">
        {/* Menu Items */}
        <ul className="flex gap-4 text-slate-300 font-titleFont items-center">
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/">Home</Link></li>
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/features">Features</Link></li>
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/portfolio">Portfolio</Link></li>
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/resume">Resume</Link></li>
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/clients">Clients</Link></li>
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-green-400 duration-300 uppercase"><Link to="/contact">Contact</Link></li>
        </ul>
        {/* Buttons */}
        <div className="flex gap-2 ml-4">
          <Link className="py-2 px-6 rounded font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600 hover:bg-[#1c1e26] transition">
            DOWNLOAD CV
          </Link>
          <Link className="py-2 px-6 rounded font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600 hover:bg-[#1c1e26] transition">
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Toggle Button (only visible on mobile) */}
      <div className="md:hidden text-white">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  <div className={`w-full ${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
    <ul className="flex flex-col gap-4 text-slate-300 font-titleFont items-center">
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/">Home</Link></li>
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/features">Features</Link></li>
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/portfolio">Portfolio</Link></li>
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/resume">Resume</Link></li>
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/clients">Clients</Link></li>
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/blog">Blog</Link></li>
      <li className="hover:text-green-400 duration-300 uppercase"><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="flex flex-col gap-2 mt-4 items-center">
      <Link className="py-2 px-6 rounded font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600 hover:bg-[#1c1e26] transition">
        DOWNLOAD CV
      </Link>
      <Link className="py-2 px-6 rounded font-semibold text-green-400 bg-bodyColor shadow-shadowOne hover:text-green-600 hover:bg-[#1c1e26] transition">
        Login
      </Link>
    </div>
  </div>
</div>

  );
}

export default Navbar;
