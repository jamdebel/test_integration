import { Menu, Star, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { navigation } from '../config/navigation';
import { ConceptModal } from './ConceptModal';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isConceptModalOpen, setIsConceptModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    if (href === '#discover') {
      setIsConceptModalOpen(true);
    } else if (href.startsWith('https://')) {
      window.open(href, '_blank');
    }
    setIsOpen(false);
  };

  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span className={cn(
                  'font-cursive text-2xl transition-colors relative',
                  isScrolled ? 'text-brand-blue' : 'text-white'
                )}>
                  maid
                  <Star className="absolute -top-2 -right-4 h-3 w-3 text-brand-coral" />
                </span>
              </div>
              <span className={cn(
                'text-[0.65rem] uppercase tracking-wider -mt-1 font-medium',
                isScrolled ? 'text-gray-600' : 'text-white'
              )}>
                — Marrakech —
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex space-x-6">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'font-cursive text-lg transition-colors hover:scale-105 transform inline-block',
                        isScrolled 
                          ? 'text-gray-600 hover:text-brand-blue' 
                          : 'text-white hover:text-brand-coral'
                      )}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={cn(
                  'h-5 w-5 transition-colors',
                  isScrolled && !isOpen ? 'text-gray-600' : 'text-white'
                )} />
              ) : (
                <Menu className={cn(
                  'h-5 w-5 transition-colors',
                  isScrolled ? 'text-gray-600' : 'text-white'
                )} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              'fixed inset-0 bg-brand-blue bg-opacity-95 transition-transform duration-300 ease-in-out md:hidden',
              'flex items-center justify-center',
              isOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <ul className="space-y-6 text-center">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="font-cursive text-2xl text-white hover:text-brand-coral transition-colors block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <ConceptModal 
        isOpen={isConceptModalOpen} 
        onClose={() => setIsConceptModalOpen(false)} 
      />
    </>
  );
}