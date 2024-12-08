import { Star } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

const team = [
  {
    name: 'Fatima',
    role: 'Chef d\'équipe',
    experience: '8 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1586297098710-0382a496c814?auto=format&fit=crop&q=80&w=800',
    speciality: 'Experte en nettoyage écologique',
  },
  {
    name: 'Sarah',
    role: 'Spécialiste Grands Espaces',
    experience: '5 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=800',
    speciality: 'Spécialiste des surfaces délicates',
  },
  {
    name: 'Amal',
    role: 'Responsable Formation',
    experience: '6 ans d\'expérience',
    image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=800',
    speciality: 'Formation et contrôle qualité',
  },
];

export function TeamSection() {
  return (
    <section className="py-32 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-brand-blue mb-4">
              Notre Équipe
              <Star className="inline-block h-6 w-6 text-brand-coral ml-2" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des professionnelles dévouées à votre satisfaction
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <FadeInSection key={member.name} delay={200 * (index + 1)}>
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-cursive text-3xl mb-2">{member.name}</h3>
                  <p className="text-brand-coral font-medium mb-2">{member.role}</p>
                  <div className="space-y-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-sm">{member.experience}</p>
                    <p className="text-sm text-brand-blue">{member.speciality}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}