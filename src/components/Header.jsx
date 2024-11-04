import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'ACCUEIL', path: '/' },
    { name: "NOS CIRCUITS", path: '/circuits' },
    { name: 'QUI SOMMES NOUS', path: '/about' },
    { name: 'CONTACT', path: '/contact' } 
  ];

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-2">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-black"> <Link to="/">KADABA ETHIOPIA TOUR</Link></h1>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-black"
          >
            {isMenuOpen ? (
              <span className="block text-2xl">×</span>
            ) : (
              <span className="block">
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </span>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-black">
              {menuItems.map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-gray-600">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden">
            <ul className="flex flex-col space-y-4 pb-6 text-black">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className="cursor-pointer hover:text-gray-600 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
