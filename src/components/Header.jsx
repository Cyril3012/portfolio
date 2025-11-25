import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const base = import.meta.env.BASE_URL;   // 👈 IMPORTANT

  const navLinks = [
    { path: "", name: "Home" },
    { path: "about", name: "About" },
    { path: "skills", name: "Skills" },
    { path: "experience", name: "Experience" },
    { path: "projects", name: "Projects" },
    { path: "contact", name: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cyril <span className="text-blue-600">P</span>
          </h1>
          <span className="text-sm text-gray-600 dark:text-gray-400 -mt-1">
            DevOps Engineer & Java Developer
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={`${base}${link.path}`}     // 👈 IMPORTANT
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <FaTimes onClick={toggleMenu} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={`${base}${link.path}`}     // 👈 IMPORTANT
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "block text-blue-600 font-semibold" : "block"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
