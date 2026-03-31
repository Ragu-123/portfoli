import React from 'react';
import { ABOUT_INFO } from '../constants';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
    return (
        <>
            {/* Hero Profile Section */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 pt-12">
                <div className="md:col-span-8">
                    <span className="font-label text-xs uppercase tracking-widest text-tertiary font-bold mb-4 block">Candidate Dossier / Vol. 01</span>
                    <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight text-on-surface mb-8 font-headline">
                        Bridging Neural Architectures & Philosophical Rigor.
                    </h1>
                    <p className="font-headline italic text-2xl text-on-surface-variant leading-relaxed mb-12 border-l-4 border-tertiary pl-8">
                        "Artificial intelligence is not merely a tool for automation, but a medium for understanding the structured complexity of human reasoning."
                    </p>
                </div>
                <div className="md:col-span-4 flex flex-col justify-end">
                    <div className="bg-surface-container p-1 relative group overflow-hidden">
                        <img
                            alt="Professional portrait"
                            className="grayscale group-hover:grayscale-0 transition-all duration-700 w-full h-[400px] object-cover"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 shadow-sm">
                            <p className="font-label text-[10px] uppercase font-bold text-slate-500">Subject Name</p>
                            <p className="font-headline font-semibold text-lg">Ragunath R</p>
                            <p className="font-label text-[10px] uppercase text-primary font-bold">AI Developer Intern • 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Background Narrative & Philosophy */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 items-start">
                <div className="space-y-8">
                    <div className="border-t-2 border-on-surface pt-4">
                        <h2 className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-surface mb-8">Technical Background</h2>
                        <div className="font-body text-lg leading-relaxed text-on-surface-variant space-y-6">
                            <p>
                                Aspiring AI Engineer and a recent graduate with a strong passion for artificial intelligence. Eager to contribute to industrial applications of AI and explore innovative solutions in NLP and CV.
                            </p>
                            <p>
                                My work focuses on the intersection of NLP and Computer Vision. I aim to move beyond "black-box" models towards systems that reflect clear, interpretable structural integrity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-headline text-2xl font-bold mb-6">Education</h3>
                        <div className="space-y-6">
                            {ABOUT_INFO.education.map((edu, idx) => (
                                <div key={idx} className="border-l-2 border-outline-variant pl-6 py-2">
                                    <h4 className="font-headline text-xl font-semibold text-on-surface">{edu.title}</h4>
                                    <p className="font-body text-primary font-medium mt-1">{edu.institution}</p>
                                    <p className="font-body text-sm text-on-surface-variant mt-2">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-surface-container-low p-12 border border-outline-variant/30">
                        <h2 className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-surface mb-8">Experience & Certifications</h2>
                        <ul className="space-y-10">
                            {ABOUT_INFO.experience.map((exp, idx) => (
                                <li key={idx} className="flex gap-6">
                                    <span className="font-headline text-3xl text-tertiary-container font-light">0{idx + 1}</span>
                                    <div>
                                        <h3 className="font-headline text-xl font-bold mb-2">{exp.title}</h3>
                                        <p className="text-sm text-on-surface-variant font-body leading-relaxed">{exp.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-outline-variant/50">
                            <h3 className="font-headline text-lg font-bold mb-4 text-on-surface">Certifications</h3>
                            <ul className="space-y-3">
                                {ABOUT_INFO.certifications.map((cert, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-on-surface-variant font-body">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
