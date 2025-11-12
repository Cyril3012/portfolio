import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/experience", name: "Experience" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name + Role */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cyril <span className="text-blue-600">P</span>
          </h1>
          <span className="text-sm text-gray-600 dark:text-gray-400 -mt-1">
            DevOps Engineer & Java Developer
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-2xl text-gray-800 dark:text-gray-100 cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-2xl text-gray-800 dark:text-gray-100 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6 space-y-4 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-semibold"
                  : "block hover:text-blue-600"
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
