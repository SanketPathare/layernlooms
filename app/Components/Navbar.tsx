'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome,
  FiBriefcase,
  FiDollarSign,
  FiMail,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import Image from 'next/image';
import { FaServicestack } from 'react-icons/fa';


import { ThemeToggle } from './ThemeToggle';


const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowDesktopBottomNav(y > lastScrollY && y > 100);
      setIsScrolled(y > 50);
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ─── theme tokens ─────────────────────────────────── */
  const navBg = 'bg-background/80 backdrop-blur-md';
  const navBorder = 'border-border';
  const linkMuted = 'text-textMuted';
  const linkHover = 'hover:text-primary';
  const linkActive = 'text-primary font-semibold';
  const headText = 'text-foreground';
  const ctaCls = 'bg-primary text-background hover:opacity-90';

  /* ─── Logo component that changes based on theme ──────── */
  const Logo = ({ className = "w-auto h-12" }: { className?: string }) => (
    <Image
      src="/logo.jpg"
      alt="Logo"
      width={300}
      height={300}
      className={`${className} dark:invert`}
      loading='eager'
    />
  );

  return (
    <>
      {/* ══════════════════════════════════════════════════
          DESKTOP — sticky top bar (hides on scroll down)
      ══════════════════════════════════════════════════ */}
      <nav
        className={`hidden md:flex items-center justify-around px-4 py-4 sticky top-0 z-50 transition-all duration-300
          ${navBg} border-b ${navBorder}
          ${showDesktopBottomNav ? '-translate-y-full' : 'translate-y-0'}
          ${isScrolled ? 'shadow-sm' : ''}`}
      >
        {/* Logo */}
        <Link href="/">
          <Logo className="w-auto h-14" />
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm transition-colors duration-200 ${isActive ? linkActive : `${linkMuted} ${linkHover}`
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA & Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/get-started" className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${ctaCls}`}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          DESKTOP — floating bottom nav (appears on scroll)
      ══════════════════════════════════════════════════ */}
      <nav
        className={`hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md border rounded-2xl shadow-xl z-50
          transition-all duration-300 ${navBg} ${navBorder}
          ${showDesktopBottomNav ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center px-4 py-3 space-x-4">
          {navItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={name}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex flex-col items-center p-2 min-w-[52px] rounded-xl transition-all duration-200 ${isActive
                  ? `text-primary scale-105`
                  : `${linkMuted} ${linkHover}`
                  }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          MOBILE — fixed top header
      ══════════════════════════════════════════════════ */}
      <div
        className={`md:hidden flex items-center justify-between px-4 py-3 fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ${navBg} border-b ${navBorder}
          ${isScrolled ? 'shadow-md' : ''}`}
      >
        <Link href="/">
          <Logo className="w-auto h-12" />
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={toggleMobileMenu} className={`p-2 transition-colors ${linkMuted} ${linkHover}`}>
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MOBILE — bottom tab bar
      ══════════════════════════════════════════════════ */}
      <nav
        className={`md:hidden fixed bottom-0 left-0 right-0 border-t z-50 transition-colors duration-300 ${navBg} ${navBorder}`}
      >
        <div className="flex justify-around items-center py-2">
          {navItems.map(({ name, icon: Icon, href }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={name}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex flex-col items-center p-2 transition-colors duration-200 ${isActive ? 'text-primary' : linkMuted
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs mt-1">{name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          MOBILE — full-screen overlay menu
      ══════════════════════════════════════════════════ */}
      {isMobileMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-50 flex flex-col transition-colors duration-300 ${navBg}`}>
          {/* top row */}
          <div className={`flex items-center justify-between p-4 border-b ${navBorder}`}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Logo className="w-auto h-10" />
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={toggleMobileMenu} className={`p-2 transition-colors ${linkMuted} ${linkHover}`}>
                <FiX className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* links */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-8">
            {navItems.map(({ name, icon: Icon, href }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 text-2xl transition-colors duration-200 ${isActive ? linkActive : `${linkMuted} ${linkHover}`
                    }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className={headText}>{name}</span>
                </Link>
              );
            })}
          </div>

          {/* bottom actions */}
          <div className={`p-6 border-t ${navBorder} flex flex-col gap-3`}>
            <Link
              href="/get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full py-3 rounded-xl font-medium text-lg text-center transition-colors ${ctaCls}`}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 767px) {
          body { padding-bottom: 64px; padding-top: 60px; }
        }
        @media (min-width: 768px) {
          body { padding-bottom: 0; }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
};

export default Navbar;
