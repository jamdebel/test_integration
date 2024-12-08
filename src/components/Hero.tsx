import { Star } from 'lucide-react';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react';
import { BookingModal } from './BookingModal';
import { cn } from '../lib/utils';

const textLines = [
  { text: 'LIBÉREZ-VOUS', isBold: true },
  { text: 'DU', hasHighlight: 'TEMPS' },
  { text: 'NOUS PRENONS' },
  { text: 'SOIN DE', isBold: true },
  { text: 'VOTRE', hasHighlight: 'MAISON' },
];

export function Hero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [visibleHighlights, setVisibleHighlights] = useState<string[]>([]);

  useEffect(() => {
    const showLine = (index: number) => {
      setVisibleLines(prev => [...prev, index]);
      
      // If this line has a highlight, show it after a short delay
      const line = textLines[index];
      if (line.hasHighlight) {
        setTimeout(() => {
          setVisibleHighlights(prev => [...prev, line.hasHighlight as string]);
        }, 300);
      }
    };

    // Show lines one by one with delays
    textLines.forEach((_, index) => {
      setTimeout(() => showLine(index), 500 * (index + 1));
    });
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1597212618440-806262de4f6b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnJha2VjaHxlbnwwfHwwfHx8MA%3D%3D')`,
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <div className="flex flex-col items-start mb-12">
              <div className="relative">
                <h1 className="font-cursive text-6xl md:text-7xl text-white">
                  maid
                  <Star className="absolute -top-3 -right-6 h-4 w-4 text-brand-coral" />
                </h1>
                <span className="text-white text-sm uppercase tracking-wider">
                  — Marrakech —
                </span>
              </div>
            </div>
            
            {/* Animated Text Block */}
            <div className="space-y-2 text-white mb-12">
              {textLines.map((line, index) => (
                <p 
                  key={index}
                  className={cn(
                    'text-3xl md:text-4xl opacity-0 transform translate-y-4 transition-all duration-500',
                    line.isBold && 'font-bold tracking-wide',
                    visibleLines.includes(index) && 'opacity-100 translate-y-0'
                  )}
                >
                  {line.hasHighlight ? (
                    <>
                      {line.text.split(line.hasHighlight)[0]}
                      <span 
                        className={cn(
                          'transition-all duration-300 delay-300',
                          visibleHighlights.includes(line.hasHighlight)
                            ? 'bg-brand-coral px-2'
                            : 'bg-transparent'
                        )}
                      >
                        {line.hasHighlight}
                      </span>
                      {line.text.split(line.hasHighlight)[1]}
                    </>
                  ) : (
                    line.text
                  )}
                </p>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => setIsBookingModalOpen(true)} variant="primary">
                Réserver
              </Button>
              <Button as="a" href="#pricing" variant="secondary">
                Nos Tarifs
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block w-1/2 h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
              alt="Professional cleaning service"
              className="absolute right-0 top-1/2 -translate-y-1/2 max-w-2xl rounded-l-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}