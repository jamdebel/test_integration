import { Star, Phone, Mail, MapPin } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-brand-blue mb-4">
              Contactez-nous
              <Star className="inline-block h-6 w-6 text-brand-coral ml-2" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Notre équipe est à votre écoute
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <FadeInSection delay={200}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-cursive text-2xl text-brand-blue mb-2">
                    Téléphone
                  </h3>
                  <p className="text-gray-600">+212 6 00 00 00 00</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Du lundi au samedi, 8h-18h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-cursive text-2xl text-brand-blue mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">maid@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Réponse sous 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-cursive text-2xl text-brand-blue mb-2">
                    Adresse
                  </h3>
                  <p className="text-gray-600">Avenu x bd y n 00 Marrakech</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Marrakech, Maroc
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring focus:ring-brand-blue/20 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring focus:ring-brand-blue/20 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring focus:ring-brand-blue/20 transition-colors"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-semibold py-4 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}