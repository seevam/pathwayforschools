'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Benefits from '@/components/sections/Benefits';
import FeatureTabs from '@/components/sections/FeatureTabs';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <FeatureTabs />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
