import React, { useEffect, useState, useRef } from 'react';
import { Moon, Sun, Palette, ChevronDown } from 'lucide-react';

export type ThemeColor = 'blue' | 'green' | 'purple' | 'rose' | 'amber' | 'teal' | 'custom';
type ColorScheme = 'light' | 'dark';

const themeColors: { [key in Exclude<ThemeColor, 'custom'>]: string } = {
  blue: 'rgb(59, 130, 246)',
  green: 'rgb(34, 197, 94)',
  purple: 'rgb(147, 51, 234)',
  rose: 'rgb(225, 29, 72)',
  amber: 'rgb(245, 158, 11)',
  teal: 'rgb(20, 184, 166)'
};

const ThemeToggle: React.FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');
  const [customColor, setCustomColor] = useState<string>('#3b82f6');
  const [showColorSliders, setShowColorSliders] = useState(false);
  
  const [hue, setHue] = useState(210); // Default blue hue
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  
  const themeMenuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    const savedThemeColor = localStorage.getItem('themeColor') as ThemeColor | null;
    const savedCustomColor = localStorage.getItem('customColor');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    } else if (prefersDark) {
      setColorScheme('dark');
    }
    
    if (savedThemeColor) {
      setThemeColor(savedThemeColor);
    }
    
    if (savedCustomColor) {
      setCustomColor(savedCustomColor);
      if (savedThemeColor === 'custom') {
        // Parse the HSL values from the saved custom color
        const hslMatch = savedCustomColor.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
        if (hslMatch) {
          setHue(parseInt(hslMatch[1]));
          setSaturation(parseInt(hslMatch[2]));
          setLightness(parseInt(hslMatch[3]));
        }
      }
    }
  }, []);

  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('colorScheme', colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    const color = themeColor === 'custom' ? customColor : themeColors[themeColor as Exclude<ThemeColor, 'custom'>];
    document.documentElement.style.setProperty('--theme-color', color);
    localStorage.setItem('themeColor', themeColor);
    if (themeColor === 'custom') {
      localStorage.setItem('customColor', customColor);
    }
  }, [themeColor, customColor]);

  useEffect(() => {
    if (themeColor === 'custom') {
      const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      setCustomColor(newColor);
    }
  }, [hue, saturation, lightness, themeColor]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setShowThemeOptions(false);
        setShowColorSliders(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative" ref={themeMenuRef}>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleColorScheme}
          aria-label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} mode`}
          className="p-2 text-gray-600 transition-colors duration-300 rounded-full hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          {colorScheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowThemeOptions(!showThemeOptions);
            setShowColorSliders(false);
          }}
          aria-label="Change theme color"
          className="flex items-center gap-1 px-2 py-1 text-gray-600 transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          style={{ 
            color: themeColor === 'custom' 
              ? customColor 
              : themeColors[themeColor as Exclude<ThemeColor, 'custom'>] 
          }}
        >
          <Palette size={16} />
          <span className="text-xs md:text-sm capitalize hidden xs:inline">
            {themeColor === 'custom' ? 'Custom' : themeColor}
          </span>
          <ChevronDown size={14} />
        </button>
      </div>

      {showThemeOptions && (
        <div 
          className="absolute right-0 mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50 w-48"
        >
          <div className="mb-2 font-medium text-sm text-gray-800 dark:text-gray-200">Theme Colors</div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {(Object.keys(themeColors) as Array<Exclude<ThemeColor, 'custom'>>).map((color) => (
              <button
                key={color}
                onClick={() => {
                  setThemeColor(color);
                  setShowThemeOptions(false);
                }}
                className="flex flex-col items-center gap-1 p-1 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div 
                  className="w-6 h-6 rounded-full transition-transform hover:scale-110"
                  style={{ backgroundColor: themeColors[color] }}
                />
                <span className="text-xs capitalize text-gray-700 dark:text-gray-300">{color}</span>
              </button>
            ))}
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setThemeColor('custom');
                setShowColorSliders(true);
              }}
              className="w-full flex items-center justify-between p-2 text-xs text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: customColor }}
                />
                <span>Custom Color</span>
              </div>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      )}
      
      {showColorSliders && themeColor === 'custom' && (
        <div 
          className="absolute right-0 mt-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 w-56 z-50"
        >
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <label className="text-xs text-gray-700 dark:text-gray-300">Hue</label>
              <span className="text-xs text-gray-500 dark:text-gray-400">{hue}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-red-500"
            />
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <label className="text-xs text-gray-700 dark:text-gray-300">Saturation</label>
              <span className="text-xs text-gray-500 dark:text-gray-400">{saturation}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(${hue}, 0%, ${lightness}%), 
                  hsl(${hue}, 100%, ${lightness}%))`
              }}
            />
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <label className="text-xs text-gray-700 dark:text-gray-300">Lightness</label>
              <span className="text-xs text-gray-500 dark:text-gray-400">{lightness}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={lightness}
              onChange={(e) => setLightness(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(${hue}, ${saturation}%, 10%), 
                  hsl(${hue}, ${saturation}%, 50%), 
                  hsl(${hue}, ${saturation}%, 90%))`
              }}
            />
          </div>
          
          <div 
            className="h-8 w-full rounded-lg mb-3"
            style={{ backgroundColor: customColor }}
          />
          
          <button
            onClick={() => {
              setShowColorSliders(false);
              setShowThemeOptions(false);
            }}
            className="w-full py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm rounded-md transition-colors"
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;