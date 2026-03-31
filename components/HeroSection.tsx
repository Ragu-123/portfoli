import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <header className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-12">
      <div className="lg:col-span-8">
        <div className="flex items-center space-x-4 mb-6">
          <span className="h-[1px] w-12 bg-tertiary"></span>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary font-semibold">AI Developer Portfolio</span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl leading-[1.1] mb-8 tracking-tight text-on-surface">The Library of Latent Intelligence.</h1>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed serif-dropcap">
            An curated collection of neural architectures developed by Ragunath R. From high-dimensional transformers to adaptive reinforcement agents, our models are documented with mathematical rigor and performance transparency.
        </p>
      </div>
      <div className="lg:col-span-4 pb-4">
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm border border-outline-variant">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label text-[10px] uppercase tracking-widest text-outline">Total Parameters Hosted</span>
            <span className="material-symbols-outlined text-primary text-xl">database</span>
          </div>
          <div className="font-headline text-4xl font-bold text-primary">1.42T</div>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-xs font-label">
              <span className="text-on-surface-variant">Active Instances</span>
              <span className="text-on-surface font-semibold">42</span>
            </div>
            <div className="w-full bg-outline-variant/30 h-1 rounded-full">
              <div className="bg-primary w-3/4 h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
