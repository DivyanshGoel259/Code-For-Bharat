import React, { useState, useEffect } from 'react';
import { Home, Info, Gift, Calendar, Trophy, Users, HelpCircle } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems: NavItem[] = React.useMemo(() => [
    { id: 'hero', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <Info className="w-5 h-5" /> },
    { id: 'swag', label: 'Digital Swag', icon: <Gift className="w-5 h-5" /> },
    { id: 'timeline', label: 'Timeline', icon: <Calendar className="w-5 h-5" /> },
    { id: 'prizes', label: 'Prize Pool', icon: <Trophy className="w-5 h-5" /> },
    { id: 'team', label: 'Team', icon: <Users className="w-5 h-5" /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      // Find which section is currently in view
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(current);
    };

    // Show navigation after a delay to match loading screen
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only show on desktop and after loading screen
  return (
    <div className={`
      fixed left-6 top-1/2 transform -translate-y-1/2 z-40 
      hidden md:block transition-all duration-500
      ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
    `}>
      <div className="relative">
        {/* Orange border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-500/20 to-orange-600/20 blur-sm"></div>
        
        {/* Main navigation container */}
        <nav className="relative bg-gray-800/70 rounded-full py-6 px-3 border-2 border-orange-500 border-solid">
          <ul className="space-y-6">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative w-10 h-10 flex items-center justify-center group"
                  title={item.label}
                >
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full"></div>
                  )}
                  
                  {/* Icon */}
                  <div className={`
                    relative z-10 transition-colors duration-200
                    ${activeSection === item.id ? 'text-orange-500' : 'text-gray-400 group-hover:text-white'}
                  `}>
                    {item.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`
                    absolute left-full ml-2 px-3 py-1 bg-slate-800 text-white text-sm
                    rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100
                    group-hover:visible transition-all duration-200 translate-x-2
                    group-hover:translate-x-0
                  `}>
                    {item.label}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation;