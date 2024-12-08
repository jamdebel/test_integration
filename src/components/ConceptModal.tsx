import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { X } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConceptModal({ isOpen, onClose }: ConceptModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(0.3);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-white rounded-2xl shadow-xl">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>

                <div ref={scrollContainerRef} className="relative">
                  <div className="relative h-[40vh] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2000)',
                        transform: `translateY(${parallaxOffset}px)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                    <div className="relative h-full flex items-center justify-center text-center px-6">
                      <h2 className="font-cursive text-5xl text-white text-shadow">
                        Notre Histoire
                      </h2>
                    </div>
                  </div>

                  <div className="px-6 py-12 space-y-24">
                    <section className="max-w-2xl mx-auto space-y-6">
                      <h3 className="font-cursive text-3xl text-brand-blue">Le Début</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Fondé en 2020, MAID est né d'une idée simple mais puissante : révolutionner 
                        l'industrie du nettoyage à domicile en combinant expertise professionnelle 
                        et technologie moderne. Notre aventure a débuté au cœur de Marrakech, où nous 
                        avons identifié le besoin de services de nettoyage fiables, professionnels 
                        et technologiquement avancés.
                      </p>
                      <img 
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000"
                        alt="Intérieur moderne propre"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </section>

                    <section className="max-w-2xl mx-auto space-y-6">
                      <h3 className="font-cursive text-3xl text-brand-coral">Notre Mission</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Chez MAID, nous croyons qu'un intérieur propre est le fondement d'un esprit serein. 
                        Notre mission est de fournir des services de nettoyage exceptionnels tout en respectant 
                        les domiciles de nos clients et l'environnement. Nous sélectionnons soigneusement nos 
                        produits de nettoyage et formons notre personnel pour offrir des résultats de haute qualité constants.
                      </p>
                      <img 
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=2000"
                        alt="Nettoyage professionnel"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </section>

                    <section className="max-w-2xl mx-auto space-y-6">
                      <h3 className="font-cursive text-3xl text-brand-blue">Notre Vision</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Alors que nous continuons à grandir, notre engagement envers l'excellence reste inchangé. 
                        Nous innovons et améliorons constamment nos services pour mieux servir notre communauté. 
                        Avec MAID, vous n'obtenez pas qu'un service de nettoyage – vous investissez dans la 
                        tranquillité d'esprit et du temps de qualité pour ce qui compte le plus.
                      </p>
                      <img 
                        src="https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&q=80&w=2000"
                        alt="Espace de vie moderne"
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </section>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}