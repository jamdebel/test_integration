import { Star, Home, Clock, Brush } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { FadeInSection } from './FadeInSection';
import { ServiceCard } from './ServiceCard';

export function Sections() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section 
      id="services" 
      className="relative py-32 bg-brand-light overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237CD5F3' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="container relative mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-wide">
                LIBÉREZ-VOUS
              </h2>
              <p className="text-4xl">
                DU <span className="bg-brand-coral text-white px-2">TEMPS</span> !
              </p>
              <p className="text-4xl">
                NOUS PRENONS
              </p>
              <h3 className="text-4xl font-bold tracking-wide">
                SOIN DE
              </h3>
              <p className="text-4xl">
                VOTRE <span className="bg-brand-coral text-white px-2">MAISON</span>
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeInSection delay={200}>
            <ServiceCard
              icon={Brush}
              title="Nettoyage Standard"
              description="Nettoyage complet de votre appartement ou maison jusqu'à 150m²"
              imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
              details={{
                duration: "3 à 4 heures",
                schedule: "Matin (8h-13h) ou Après-midi (14h-18h)",
                frequency: "Une ou plusieurs fois par semaine"
              }}
            />
          </FadeInSection>

          <FadeInSection delay={400}>
            <ServiceCard
              icon={Home}
              title="Grands Espaces"
              description="Service dédié aux grandes surfaces avec des besoins spécifiques. Un ou deux agents disponibles pour service complet ou demi-journée."
              imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
              details={{
                duration: "Journée complète ou demi-journée",
                schedule: "Horaires flexibles",
                frequency: "Selon vos besoins"
              }}
            />
          </FadeInSection>

          <FadeInSection delay={600}>
            <ServiceCard
              icon={Clock}
              title="Horaires Flexibles"
              description="Réservez nos services selon votre convenance avec plusieurs options de planification"
              imageSrc="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800"
              details={{
                schedule: "Matin (8h-13h) ou Après-midi (14h-18h)",
                frequency: "Réservations hebdomadaires ou mensuelles disponibles"
              }}
            />
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}