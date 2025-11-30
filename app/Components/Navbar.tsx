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
import Image from 'next/image';
import { FaServicestack } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Services');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDesktopBottomNav, setShowDesktopBottomNav] = useState(false);

  const navItems = [
    { name: 'Home', icon: FiHome, href: '/' },
    { name: 'Services', icon: FaServicestack, href: '/services' },
    { name: 'Portfolio', icon: FiBriefcase, href: '/portfolio' },
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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show desktop bottom nav when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowDesktopBottomNav(true);
      } else if (currentScrollY < lastScrollY) {
        setShowDesktopBottomNav(false);
      }
      
      // Set scrolled state for background changes
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      {/* Desktop Top Navbar - Hidden on scroll */}
      <nav 
        className={`hidden md:flex items-center justify-around px-2 py-4 bg-white sticky top-0 z-50 transition-all duration-300 ${
          showDesktopBottomNav ? '-translate-y-full' : 'translate-y-0'
        } ${isScrolled ? '' : ''}`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors">
            <Image src="/logo.jpg" alt='' width={200} height={200} className='w-auto h-14'/>
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
                  ? 'text-primary font-semibold'
                  : 'text-textColor hover:text-primary'
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
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Desktop Bottom Navigation - Shows on scroll */}
      <nav 
        className={`hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg z-50 transition-all duration-300 ${
          showDesktopBottomNav ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center px-4 py-3 space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center p-2 transition-all duration-200 min-w-[60px] ${
                  activeSection === item.name
                    ? 'text-primary transform scale-105'
                    : 'text-textColor hover:text-primary'
                }`}
                onClick={() => handleNavClick(item.name)}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
          
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
                    ? 'text-primary'
                    : 'text-textColor'
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
      <div className={`md:hidden flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-primary transition-colors">
          <Image src="/logo.jpg" alt='' width={200} height={200} className='w-auto h-12'/>
        </Link>
        
        {/* Hamburger Menu Button */}
        {/* <button
          onClick={toggleMobileMenu}
          className="p-2 text-textColor hover:text-primary transition-colors"
        >
          <FiMenu className="w-6 h-6" />
        </button> */}
      </div>

      {/* Mobile Full-screen Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link 
              href="/" 
              className="text-xl font-bold text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image src="/logo.jpg" alt='' width={200} height={200} className='w-auto h-10'/>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-textColor hover:text-primary transition-colors"
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
                      ? 'text-primary font-semibold'
                      : 'text-textColor hover:text-primary'
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
              className="block w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium text-lg text-center transition-colors"
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
        
        @media (min-width: 768px) {
          body {
            padding-bottom: 0;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;