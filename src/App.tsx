import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sections } from './components/Sections';
import { PricingSection } from './components/PricingSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sections />
        <PricingSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;