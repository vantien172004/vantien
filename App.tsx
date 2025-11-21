import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-50">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="layout-content-container flex flex-col max-w-7xl mx-auto gap-12 lg:gap-16">
              <Hero />
              <CategoryGrid />
              <ProductGrid />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;