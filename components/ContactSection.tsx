import React from 'react';
import { Mail, Linkedin, Github, FileText, Brain } from 'lucide-react';

export const ContactSection: React.FC = () => {
    return (
        <section className="pt-24 pb-24 px-6 max-w-6xl mx-auto mb-32">
            <header className="mb-20 text-center md:text-left max-w-2xl">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary font-semibold mb-4 block">Formal Inquiry</span>
                <h2 className="text-5xl md:text-6xl font-headline text-on-surface leading-tight mb-6 font-bold">Correspondence</h2>
                <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body">
                    Engagement in collaborative research and high-level technical consultation. Please direct your professional inquiries regarding architectural breakthroughs or dataset curation through the formal channels below.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left Column: Formal Contact Form */}
                <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 shadow-sm rounded-xl border border-outline-variant/30">
                    <h2 className="text-2xl font-headline font-bold mb-8 text-on-surface">Professional Inquiry</h2>
                    <form action="#" className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2 group">
                            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors font-semibold" htmlFor="name">Source Identity</label>
                            <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 px-0 font-headline text-lg placeholder:text-surface-dim transition-all text-on-surface focus:outline-none" id="name" name="name" placeholder="Full Name" type="text"/>
                        </div>
                        <div className="space-y-2 group">
                            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors font-semibold" htmlFor="email">Return Address</label>
                            <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 px-0 font-headline text-lg placeholder:text-surface-dim transition-all text-on-surface focus:outline-none" id="email" name="email" placeholder="Institutional Email" type="email"/>
                        </div>
                        <div className="space-y-2 group">
                            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors font-semibold" htmlFor="message">Data Payload</label>
                            <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 px-0 font-headline text-lg placeholder:text-surface-dim transition-all resize-none text-on-surface focus:outline-none" id="message" name="message" placeholder="Briefly outline the parameters of your inquiry..." rows={4}></textarea>
                        </div>
                        <div className="pt-6">
                            <button className="group flex items-center gap-3 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-label font-semibold tracking-wider hover:opacity-90 active:scale-95 transition-all w-full md:w-auto justify-center" type="submit">
                                <span>DISPATCH PROTOCOL</span>
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Secondary Information & Channels */}
                <aside className="lg:col-span-5 space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-on-surface-variant font-label font-bold">Direct Channels</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <a className="flex items-center justify-between p-6 bg-surface-container-low hover:bg-surface-container transition-all group rounded-xl border border-outline-variant/30" href="mailto:ragunathravi73@gmail.com">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                    <div>
                                        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Email Protocol</p>
                                        <p className="font-headline text-lg text-on-surface font-semibold">ragunathravi73@gmail.com</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform group-hover:text-primary">arrow_forward</span>
                            </a>
                            <a className="flex items-center justify-between p-6 bg-surface-container-low hover:bg-surface-container transition-all group rounded-xl border border-outline-variant/30" href="https://wa.me/917825078508" target="_blank" rel="noreferrer">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-primary">✆</span>
                                    <div>
                                        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">WhatsApp Channel</p>
                                        <p className="font-headline text-lg text-on-surface font-semibold">+91 7825078508</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform group-hover:text-primary">arrow_forward</span>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-on-surface-variant font-label font-bold">Digital Presence</h3>
                        <div className="grid grid-cols-1 gap-4">
                             <a className="flex items-center justify-between p-6 bg-surface-container-low hover:bg-surface-container transition-all group rounded-xl border border-outline-variant/30" href="https://www.linkedin.com/in/ragunath-r-a2a580247/" target="_blank" rel="noreferrer">
                                <div className="flex items-center gap-4">
                                    <Linkedin className="w-6 h-6 text-tertiary" />
                                    <div>
                                        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Professional Network</p>
                                        <p className="font-headline text-lg text-on-surface font-semibold">LinkedIn</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform group-hover:text-tertiary">arrow_forward</span>
                            </a>
                            <a className="flex items-center justify-between p-6 bg-surface-container-low hover:bg-surface-container transition-all group rounded-xl border border-outline-variant/30" href="https://github.com/Ragu-123" target="_blank" rel="noreferrer">
                                <div className="flex items-center gap-4">
                                    <Github className="w-6 h-6 text-tertiary" />
                                    <div>
                                        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Version Control</p>
                                        <p className="font-headline text-lg text-on-surface font-semibold">GitHub</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform group-hover:text-tertiary">arrow_forward</span>
                            </a>
                             <a className="flex items-center justify-between p-6 bg-surface-container-low hover:bg-surface-container transition-all group rounded-xl border border-outline-variant/30" href="https://huggingface.co/ragunath-ravi" target="_blank" rel="noreferrer">
                                <div className="flex items-center gap-4">
                                    <Brain className="w-6 h-6 text-tertiary" />
                                    <div>
                                        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1 font-bold">Model Registry</p>
                                        <p className="font-headline text-lg text-on-surface font-semibold">HuggingFace</p>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform group-hover:text-tertiary">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};
