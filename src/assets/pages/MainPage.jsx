import Header from '../components/layout/header';
import Hero from '../components/sections/hero';
import Stats from '../components/sections/stats';
import HowItWorks from '../components/sections/how-it-works';
import Features from '../components/sections/features';
import Pricing from '../components/sections/pricing';
import Testimonials from '../components/sections/testimonials';
import FAQ from '../components/sections/faq';
import Footer from '../components/layout/footer';
import CTA from '../components/sections/cta';

export default function MainPage() {
  return (
    <div className='flex min-h-screen flex-col bg-white'>
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
