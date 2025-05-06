import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';


interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Portfolio<span style={{ color: 'var(--theme-color)' }}>.</span>
          </a>

          {/* // In your navigation section, add the ThemeToggle component */}
<nav className="hidden md:flex items-center space-x-8">
  <ul className="flex items-center space-x-6">
    {navItems.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          className="text-gray-700 hover:text-theme dark:text-gray-300 dark:hover:text-theme transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href);
          }}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
  <ThemeToggle />
</nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 py-4 border-t dark:border-gray-800">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.label} className="w-full text-center">
                <a
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
                  style={{ 
                    ':hover': { color: 'var(--theme-color)' }
                  } as React.CSSProperties}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;