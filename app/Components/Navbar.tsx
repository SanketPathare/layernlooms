// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiHome, 
  FiBriefcase, 
  FiGrid, 
  FiDollarSign, 
  FiMail,
  FiMenu,
  FiX
} from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Services');

  const navItems = [
    { name: 'Services', icon: FiHome, href: '/services' },
    { name: 'Portfolio', icon: FiBriefcase, href: '/portfolio' },
    { name: 'Process', icon: FiGrid, href: '/process' },
    { name: 'Pricing', icon: FiDollarSign, href: '/pricing' },
    { name: 'Contact', icon: FiMail, href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (itemName: string) => {
    setActiveSection(itemName);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Desktop Navbar - Text Only */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-white shadow-lg sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            LayerNLooms
          </Link>
        </div>

        {/* Desktop Navigation Links - Text Only */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-200 ${
                activeSection === item.name
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <div>
          <Link 
            href="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Tab Navigation - Icons + Text */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center p-2 transition-colors duration-200 ${
                  activeSection === item.name
                    ? 'text-blue-600'
                    : 'text-gray-600'
                }`}
                onClick={() => handleNavClick(item.name)}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Header (Top Bar) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-40">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          LayerNLooms
        </Link>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Full-screen Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LayerNLooms
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 text-2xl ${
                    activeSection === item.name
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                  onClick={() => handleNavClick(item.name)}
                >
                  <Icon className="w-6 h-6" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Get Started Button */}
          <div className="p-6 border-t border-gray-200">
            <Link 
              href="/get-started"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-lg text-center transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      {/* Add padding to main content for mobile bottom nav */}
      <style jsx global>{`
        @media (max-width: 767px) {
          body {
            padding-bottom: 64px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;