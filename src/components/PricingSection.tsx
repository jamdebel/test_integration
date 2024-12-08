import { Star } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const features = [
  'Shampouinage de vos tapis',
  'Nettoyage complet de votre vaisselle', 
  'Nettoyage de vos murs',
  'Aucun frais caché',
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF8B8B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-brand-blue mb-4">
              Nos Tarifs
              <Star className="inline-block h-6 w-6 text-brand-coral ml-2" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des prix transparents pour des services exceptionnels
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FadeInSection delay={200}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="font-cursive text-4xl text-brand-blue mb-6">
                    Session Standard
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                      <span className="text-gray-600">Sans les produits d'entretien</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-brand-coral">150</span>
                        <span className="text-lg text-brand-coral">Dhs</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-gray-600">Avec les produits inclus</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-brand-coral">200</span>
                        <span className="text-lg text-brand-coral">Dhs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1000"
                      alt="Produits de nettoyage"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="font-cursive text-4xl text-brand-blue mb-6">
                    Grand Ménage
                  </h3>
                  <div className="flex items-center justify-between py-4 border-b border-gray-100 mb-6">
                    <span className="text-gray-600">Pour une journée complète</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-brand-coral">500</span>
                      <span className="text-lg text-brand-coral">Dhs</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <span className="h-2 w-2 rounded-full bg-brand-coral mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000"
                      alt="Service de nettoyage professionnel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={600}>
          <p className="text-center text-gray-500 mt-12">
            Vous savez exactement ce que vous payez. Aucune surprise.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}