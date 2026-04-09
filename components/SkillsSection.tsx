import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

export const SkillsSection: React.FC = () => {
    return (
        <section className="mb-32 pt-12">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-surface">Capability Matrix</h2>
                    <p className="font-headline text-3xl mt-2 text-on-surface">Technical Proficiency Profile</p>
                </div>
                <div className="hidden md:block h-[1px] flex-grow mx-8 mb-3 bg-outline-variant/30"></div>
                <span className="font-label text-[10px] uppercase font-bold text-slate-400">Ver. 2024.v2</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div
                        key={idx}
                        className={`bg-surface-container-lowest p-8 shadow-sm hover:bg-primary/5 transition-colors border border-outline-variant/10 ${
                            idx === 0 || idx === 1 ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2'
                        }`}
                    >
                        <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {idx === 0 ? 'neurology' : idx === 1 ? 'robot_2' : idx === 2 ? 'code_blocks' : idx === 3 ? 'database' : 'construction'}
                        </span>
                        <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="font-label text-[10px] bg-surface-container px-2 py-1 uppercase font-bold text-on-surface hover:text-primary transition-colors"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
