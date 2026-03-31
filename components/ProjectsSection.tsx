import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { BlockButton, BlockModal } from './ui/BlockComponents';
import { ExternalLink, Github, Activity } from 'lucide-react';
import { SpotlightCard } from './ui/Animations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3 } }
};

export const ProjectsSection: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="mb-32 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
                <div className="lg:col-span-8">
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary font-semibold mb-6 block">State of the Art — 2024</span>
                    <h1 className="font-headline text-6xl md:text-8xl leading-tight mb-8 text-on-surface">Flagship Architectures & Models</h1>
                    <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                        An exhaustive review of neural architectures and systems I have developed. From vision-language models to retrieval-augmented pipelines, focusing on efficiency and performance transparency.
                    </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                    <div className="text-left lg:text-right">
                        <div className="font-headline text-4xl text-primary font-bold">12+</div>
                        <div className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Deployed Architectures</div>
                        <div className="font-headline text-4xl text-primary font-bold">&lt;15ms</div>
                        <div className="font-label text-xs uppercase tracking-widest text-secondary">Avg Inference Latency Target</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="font-headline text-4xl mb-2 text-on-surface">Model Archetypes</h2>
                    <p className="font-body text-on-surface-variant">Specialized variants for diverse computational constraints.</p>
                </div>
                <div className="hidden md:block">
                    <BlockButton size="sm" variant="secondary" href="https://github.com/Ragu-123" target="_blank">
                        <Github className="w-4 h-4 mr-2" /> View GitHub Profile
                    </BlockButton>
                </div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                {PROJECTS.map((project, idx) => (
                    <motion.div variants={itemVariants} key={project.id} className={idx === 0 ? "md:col-span-2" : "col-span-1"}>
                        <SpotlightCard
                            className="group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer hover:shadow-md bg-surface-container-high p-8 rounded-xl aspect-auto"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="font-label text-xs uppercase tracking-widest bg-primary text-white px-3 py-1 rounded">The Sovereign</span>
                                        <Activity className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="font-headline text-4xl mb-4 text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="font-body text-base text-on-surface-variant max-w-md leading-relaxed line-clamp-3 mb-6">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                     <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} className="font-label text-xs uppercase tracking-widest bg-surface text-secondary border border-outline-variant px-3 py-1 rounded transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:border-primary-container">
                                            {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 text-primary font-label text-sm uppercase tracking-widest font-bold">
                                        View Architecture <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </motion.div>

            {/* Project Detail Modal */}
            <BlockModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="space-y-8">
                        <div className="flex gap-3 mb-2 flex-wrap">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold font-label border border-primary/20">
                                Model: {selectedProject.tags[0]}
                            </span>
                            <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-sm font-semibold font-label border border-tertiary/20">
                                Status: Deployed
                            </span>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-4">
                                <h4 className="text-2xl font-headline font-bold text-on-surface border-b border-outline-variant pb-3">System Architecture</h4>
                                <p className="text-on-surface-variant leading-relaxed font-body text-base whitespace-pre-line pt-2">
                                    {selectedProject.fullDescription || selectedProject.description}
                                </p>
                            </div>
                            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm h-fit">
                                <h4 className="font-headline font-bold text-on-surface mb-6 text-xl">Tech Stack</h4>
                                <ul className="space-y-4">
                                    {selectedProject.techStack?.map(tech => (
                                        <li key={tech} className="flex justify-between items-center pb-3 border-b border-surface-variant last:border-0 last:pb-0">
                                            <span className="font-body text-sm font-medium text-on-surface-variant">{tech}</span>
                                            <span className="font-label text-xs bg-secondary-container text-on-secondary-container px-3 py-1 rounded">{tech.split(' ')[0]}</span>
                                        </li>
                                    )) || <span className="text-on-surface-variant text-sm">N/A</span>}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-outline-variant flex flex-wrap gap-4 justify-end">
                            {selectedProject.links.map(link => (
                                <BlockButton key={link.label} size="md" variant="primary" href={link.url} target="_blank">
                                    {link.label} <ExternalLink className="w-4 h-4 ml-2" />
                                </BlockButton>
                            ))}
                        </div>
                    </div>
                )}
            </BlockModal>
        </section>
    );
};
