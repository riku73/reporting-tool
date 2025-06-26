'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

const navigationItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'SEO Technique IA', href: '/services/seo-technique' },
      { label: 'SEO Local (GEO)', href: '/services/seo-local' },
      { label: 'AEO (Answer Engine)', href: '/services/aeo' },
      { label: 'SEO International', href: '/services/seo-international' },
    ]
  },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Cas d\'Études', href: '/cas-etudes' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={clsx(
      'navbar transition-all duration-300',
      isScrolled && 'bg-dark-bg/98 backdrop-blur-md shadow-lg'
    )}>
      <div className="container-wide mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S4L</span>
            </div>
            <span className="text-xl font-display font-bold text-white">
              SEO4Life
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={clsx(
                    'nav-link px-3 py-2 rounded-lg transition-colors duration-200',
                    isActiveLink(item.href) && 'active text-primary-orange'
                  )}
                >
                  <span className="flex items-center">
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </span>
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card-bg border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-text-secondary hover:text-primary-orange hover:bg-primary-orange/10 transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              size="md"
              className="hidden md:flex"
              asChild
            >
              <Link href="/contact">
                Audit Gratuit
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-text-secondary hover:text-primary-orange transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={clsx(
          'lg:hidden transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <div className="py-4 space-y-2 border-t border-border">
            {navigationItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'block px-4 py-3 rounded-lg transition-colors duration-200',
                    isActiveLink(item.href) 
                      ? 'text-primary-orange bg-primary-orange/10' 
                      : 'text-text-secondary hover:text-primary-orange hover:bg-primary-orange/5'
                  )}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-primary-orange transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button
                size="md"
                className="w-full"
                asChild
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Audit Gratuit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}