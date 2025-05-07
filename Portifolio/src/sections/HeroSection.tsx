import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Twitter, ArrowDown, NewspaperIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedElement from '../components/AnimatedElement';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Associate Software Engineer at Multiplier Technologies';
  const typingSpeed = 100;
  const delayBeforeRestart = 3000;

  useEffect(() => {
    let charIndex = 0;
    let timer: NodeJS.Timeout;

    const typeText = () => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        timer = setTimeout(typeText, typingSpeed);
      } else {
        // Reset after delay
        timer = setTimeout(() => {
          setTypedText('');
          charIndex = 0;
          typeText();
        }, delayBeforeRestart);
      }
    };

    typeText();

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer hooks for scroll-triggered animations
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  const { ref: iconsRef, inView: iconsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>

      {/* Animated shapes */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <AnimatedElement>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6" ref={textRef}>
              Hi, I'm <span className="text-theme">Chandan Kumar</span>
            </h1>
          </AnimatedElement>

          <AnimatedElement delay={300}>
            <div className="h-8 md:h-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 inline-block" ref={textRef}>
                {typedText}<span className="animate-blink">|</span>
              </h2>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={600}>
            <p 
              className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
              ref={textRef}
            >
              Building scalable, efficient software solutions with a passion for clean architecture and innovation.  
              Turning complex problems into elegant code, with a global mindset and local precision.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={900}>
            <div 
              ref={iconsRef} 
              className={`flex justify-center space-x-6 mb-12 ${iconsInView ? 'animate-move-forward' : ''}`}
            >
              {/* GitHub Icon */}
              <a 
                href="https://github.com/NBSPRG" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-5 h-5" />
              </a>
              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com/in/kumarchandan20041" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              {/* Substack Icon */}
              <a 
                href="https://chandan-blog.netlify.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="Personal Blog"
              >
                <NewspaperIcon size={20} />
              </a>
              {/* LeetCode Icon */}
              <a 
                href="https://leetcode.com/u/gvvg/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="LeetCode Profile"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-5 h-5" />
              </a>
              {/* GFG Icon */}
              <a 
                href="https://www.geeksforgeeks.org/user/sprgnb/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GFG" className="w-5 h-5" />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
