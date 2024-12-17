import { Hero } from '../components/landing/Hero';
import { Universities } from '../components/landing/Universities';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Testimonials } from '../components/landing/Testimonials';
import { FAQ } from '../components/landing/FAQ';
import { FinalCTA } from '../components/landing/FinalCTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Universities />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};