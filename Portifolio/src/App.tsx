import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Chandan Kumar | Portfolio';
    
    // Apply theme from localStorage if it exists
    const savedColorScheme = localStorage.getItem('colorScheme');
    const savedThemeColor = localStorage.getItem('themeColor');
    const savedCustomColor = localStorage.getItem('customColor');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply dark mode if saved or preferred
    if (savedColorScheme === 'dark' || (!savedColorScheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme color
    const themeColors = {
      blue: 'rgb(59, 130, 246)',
      green: 'rgb(34, 197, 94)',
      purple: 'rgb(147, 51, 234)',
      rose: 'rgb(225, 29, 72)',
      amber: 'rgb(245, 158, 11)',
      teal: 'rgb(20, 184, 166)'
    };
    
    const color = savedThemeColor === 'custom' ? 
      savedCustomColor : 
      themeColors[savedThemeColor as keyof typeof themeColors] || themeColors.blue;
    
    document.documentElement.style.setProperty('--theme-color', color);
    
    // Add animation-delay classes to enable staggered animations
    const style = document.createElement('style');
    style.textContent = `
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      @keyframes blink {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
      .animate-blink {
        animation: blink 1s infinite;
      }
      
      /* Theme color utility classes */
      .text-theme {
        color: var(--theme-color);
      }
      .bg-theme {
        background-color: var(--theme-color);
      }
      .border-theme {
        border-color: var(--theme-color);
      }
      .hover\:text-theme:hover {
        color: var(--theme-color);
      }
      .hover\:bg-theme:hover {
        background-color: var(--theme-color);
      }
      .hover\:border-theme:hover {
        border-color: var(--theme-color);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Theme Configuration Panel - Mobile fixed position */}
      <div className="fixed bottom-4 right-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-40 md:hidden">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;