import React, { useState, useRef } from 'react';
import { VoxelScene } from './components/3d/VoxelScene';
import { Layout } from './components/Layout';
import { LuxButton, GlassCard, LuxInput, LuxTextArea, LuxModal, Tag, Divider, StatBlock } from './components/ui/BlockComponents';
import { Reveal, RevealGroup, Parallax, SplitText, Magnetic, FADE_UP, STAGGER, FADE_IN, SCALE_IN } from './components/ui/Animations';
import { PROJECTS, SKILL_CATEGORIES, ABOUT_INFO } from './constants';
import { ArrowRight, Github, ExternalLink, Mail, Brain, Database, Cpu, Linkedin, FileText, ArrowUpRight, ChevronDown, Sparkles, Code2, Layers, GraduationCap, Award, Briefcase } from 'lucide-react';
import { Project } from './types';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────
// SECTION WRAPPER
// ─────────────────────────────────────────────

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({
  children, className = '', id
}) => (
  <section
    id={id}
    className={`relative w-full max-w-[1200px] mx-auto px-8 md:px-16 ${className}`}
  >
    {children}
  </section>
);

// ─────────────────────────────────────────────
// SECTION LABEL
// ─────────────────────────────────────────────

const SectionLabel: React.FC<{ index: string; label: string }> = ({ index, label }) => (
  <Reveal variants={FADE_IN}>
    <div className="flex items-center gap-3 mb-6">
      <span className="font-display text-xs font-bold text-[#2997ff] tracking-widest uppercase">{index}</span>
      <div className="h-px flex-1 bg-gradient-to-r from-[rgba(41,151,255,0.4)] to-transparent" style={{ maxWidth: 80 }} />
      <span className="font-body text-xs tracking-widest uppercase text-[var(--text-3)]">{label}</span>
    </div>
  </Reveal>
);

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────

const HeroSection: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Giant background text — depth layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ y }}
      >
        <span
          className="font-display font-black whitespace-nowrap leading-none"
          style={{
            fontSize: 'clamp(100px, 22vw, 340px)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.032)',
            letterSpacing: '-0.04em',
          }}
        >
          ENGINEER
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16 pt-28 pb-20">
        {/* Badge */}
        <Reveal variants={FADE_UP} delay={0.1}>
          <div className="flex items-center gap-2 mb-8">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#30d158]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-body text-sm text-[rgba(240,240,248,0.6)] tracking-wide">
              Open to AI Engineering roles
            </span>
          </div>
        </Reveal>

        {/* Main headline */}
        <div className="mb-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="overflow-hidden"
          >
            {/* Name line 1 */}
            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: { y: '110%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-display font-black leading-[0.9] tracking-tighter text-white"
                style={{ fontSize: 'clamp(56px, 10vw, 148px)' }}
              >
                RAGUNATH
              </motion.h1>
            </div>
            {/* Name line 2 */}
            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: { y: '110%', opacity: 0 },
                  visible: { y: '0%', opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 } }
                }}
                className="font-display font-black leading-[0.9] tracking-tighter"
                style={{
                  fontSize: 'clamp(56px, 10vw, 148px)',
                  background: 'linear-gradient(135deg, #2997ff 0%, #7ed4fd 50%, #2997ff 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shimmer 4s linear infinite',
                }}
              >
                R.
              </motion.h1>
            </div>
          </motion.div>
        </div>

        {/* Role */}
        <Reveal variants={FADE_UP} delay={0.35}>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {['Machine Learning', 'NLP', 'Computer Vision'].map((tag, i) => (
              <Tag key={i} accent={i === 0}>{tag}</Tag>
            ))}
          </div>
        </Reveal>

        {/* Description */}
        <Reveal variants={FADE_UP} delay={0.45}>
          <p className="max-w-xl font-body text-lg md:text-xl text-[rgba(240,240,248,0.62)] leading-relaxed mb-10">
            Aspiring AI Engineer and recent graduate passionate about building{' '}
            <span className="text-white font-medium">intelligent systems</span> at the intersection
            of NLP, Computer Vision, and RAG architectures.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal variants={FADE_UP} delay={0.55}>
          <div className="flex flex-wrap items-center gap-4">
            <LuxButton size="lg" onClick={() => onNavigate('projects')}>
              View Projects <ArrowRight size={18} />
            </LuxButton>
            <LuxButton size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              Get in Touch
            </LuxButton>
            <LuxButton size="lg" variant="ghost" href="logbook.html">
              Logbook <ArrowUpRight size={16} />
            </LuxButton>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal variants={FADE_UP} delay={0.65}>
          <div className="mt-20 pt-10 border-t border-white/[0.07] grid grid-cols-3 gap-8 max-w-md">
            <StatBlock value="8+" label="Projects" />
            <StatBlock value="96%" label="Best Accuracy" />
            <StatBlock value="4" label="Certifications" />
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-3)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      {/* Shimmer animation injected */}
      <style>{`@keyframes shimmer { 0% { background-position: 0% center } 100% { background-position: 200% center } }`}</style>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// ABOUT SECTION
// ─────────────────────────────────────────────

const AboutSection: React.FC = () => (
  <div className="py-28 min-h-screen">
    <Section>
      <SectionLabel index="01" label="About" />

      <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
        {/* Left */}
        <div>
          <SplitText
            text="Building AI that matters."
            className="font-display font-bold text-4xl md:text-5xl leading-tight text-white mb-8"
            delay={0}
          />

          <RevealGroup>
            <motion.p variants={FADE_UP} className="font-body text-base text-[var(--text-2)] leading-relaxed mb-5">
              I'm a B.Tech AI & ML graduate from Saveetha Engineering College, Chennai (Class of 2026),
              with a GPA of 7.9/10 and deep hands-on experience in building and deploying ML systems.
            </motion.p>
            <motion.p variants={FADE_UP} className="font-body text-base text-[var(--text-2)] leading-relaxed mb-5">
              My focus areas span <span className="text-white">Large Language Models</span>,{' '}
              <span className="text-white">Retrieval-Augmented Generation</span>, and{' '}
              <span className="text-white">Computer Vision</span>. I've built real-world systems —
              from a Tamil ASR model achieving 22% WER to a medical image captioning model with
              near-zero loss.
            </motion.p>
            <motion.p variants={FADE_UP} className="font-body text-base text-[var(--text-2)] leading-relaxed">
              Beyond code, I'm fascinated by the intersection of multimodal AI and practical
              human applications — making AI genuinely useful, accessible, and impactful.
            </motion.p>
          </RevealGroup>

          {/* Experience highlight */}
          <Reveal variants={FADE_UP} delay={0.2}>
            <div className="mt-10 p-5 rounded-2xl border border-[rgba(41,151,255,0.2)] bg-[rgba(41,151,255,0.06)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(41,151,255,0.15)] flex items-center justify-center flex-shrink-0">
                  <Briefcase size={18} className="text-[#2997ff]" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">AI Engineer Intern</h4>
                  <p className="font-body text-sm text-[var(--text-2)] leading-relaxed">
                    Built facial recognition system using Vision Transformer achieving{' '}
                    <span className="text-[#30d158] font-semibold">96% accuracy</span>.
                    Enhanced model performance via data augmentation across 50K+ images.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal variants={FADE_UP} delay={0.3}>
            <div className="mt-5 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.07] flex items-center justify-center flex-shrink-0">
                  <Award size={18} className="text-[rgba(240,240,248,0.6)]" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">Recognition</h4>
                  <p className="font-body text-sm text-[var(--text-2)]">
                    IIT Madras Shaastra IndustriAI — Top 50 of 200+ teams •{' '}
                    IBM Datathon participant • Koselay Award for academic excellence
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <div className="space-y-5">
          {/* Education timeline */}
          <Reveal variants={SCALE_IN}>
            <GlassCard title="Education">
              <div className="space-y-6">
                {ABOUT_INFO.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border border-[rgba(41,151,255,0.4)] bg-[rgba(41,151,255,0.1)] flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={14} className="text-[#2997ff]" />
                      </div>
                      {i < ABOUT_INFO.education.length - 1 && (
                        <div className="w-px flex-1 mt-2 bg-white/[0.07]" />
                      )}
                    </div>
                    <div className="pb-4 min-w-0">
                      <h4 className="font-display font-semibold text-white text-sm leading-snug">{edu.title}</h4>
                      <p className="font-body text-xs text-[#2997ff] mt-0.5">{edu.institution}</p>
                      <p className="font-body text-xs text-[var(--text-3)] mt-1 font-mono">{edu.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Certifications */}
          <Reveal variants={SCALE_IN} delay={0.1}>
            <GlassCard title="Certifications">
              <div className="flex flex-wrap gap-2">
                {ABOUT_INFO.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Tag>{cert.split('(')[0].trim()}</Tag>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Research focus */}
          <Reveal variants={SCALE_IN} delay={0.2}>
            <GlassCard title="Research Focus">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Brain size={18} />, title: 'Multimodal AI', desc: 'Text + Vision fusion' },
                  { icon: <Database size={18} />, title: 'RAG Systems', desc: 'Knowledge retrieval' },
                  { icon: <Cpu size={18} />, title: 'LLM Fine-tuning', desc: 'Task-specific models' },
                  { icon: <Layers size={18} />, title: 'Computer Vision', desc: 'Medical & industrial' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[rgba(41,151,255,0.3)] transition-colors group"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-[var(--text-3)] group-hover:text-[#2997ff] transition-colors mb-2">{item.icon}</div>
                    <div className="font-display font-semibold text-xs text-white">{item.title}</div>
                    <div className="font-body text-[10px] text-[var(--text-3)] mt-0.5">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </Section>
  </div>
);

// ─────────────────────────────────────────────
// PROJECTS SECTION
// ─────────────────────────────────────────────

const ProjectCard: React.FC<{ project: Project; onClick: () => void; index: number }> = ({ project, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: '-40px' }}
    transition={{ delay: index * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6 }}
    onClick={onClick}
    className="group cursor-pointer flex-shrink-0 w-[85vw] md:w-[420px] snap-start"
  >
    <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.16] backdrop-blur-xl transition-all duration-300 overflow-hidden">
      {/* Card header band */}
      <div className="h-1.5 w-full" style={{
        background: `hsl(${(index * 47 + 200) % 360}, 70%, 58%)`,
        opacity: 0.7,
      }} />

      <div className="p-6">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map(t => <Tag key={t}>{t}</Tag>)}
            {project.tags.length > 2 && <Tag>+{project.tags.length - 2}</Tag>}
          </div>
          <motion.div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-[var(--text-3)] border border-white/[0.08] group-hover:border-[rgba(41,151,255,0.4)] group-hover:text-[#2997ff] transition-all"
            whileHover={{ rotate: -45 }}
          >
            <ArrowUpRight size={15} />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gradient-accent transition-all">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-[var(--text-2)] leading-relaxed line-clamp-3 mb-5">
          {project.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
            <span className="font-body text-xs text-[var(--text-3)]">Active</span>
          </div>
          <div className="flex gap-3">
            {project.links.slice(0, 2).map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="font-body text-xs text-[var(--text-3)] hover:text-white transition-colors flex items-center gap-1"
              >
                {link.label} <ExternalLink size={10} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-28">
      <Section>
        <SectionLabel index="02" label="Work" />
        <div className="flex items-end justify-between mb-12">
          <SplitText
            text="Selected Projects"
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight"
          />
          <Reveal variants={FADE_IN}>
            <a href="https://github.com/Ragu-123" target="_blank" rel="noreferrer"
              className="hidden md:flex items-center gap-2 font-body text-sm text-[var(--text-2)] hover:text-white transition-colors"
            >
              <Github size={16} /> GitHub Profile <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </Section>

      {/* Horizontal scroll carousel — full bleed */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, var(--bg), transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, var(--bg), transparent)' }} />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-8 md:px-16"
          style={{ cursor: 'grab' }}
          onMouseDown={(e) => {
            const el = scrollRef.current;
            if (!el) return;
            el.style.cursor = 'grabbing';
            let startX = e.pageX - el.offsetLeft;
            let scrollLeft = el.scrollLeft;
            const onMove = (me: MouseEvent) => {
              const x = me.pageX - el.offsetLeft;
              el.scrollLeft = scrollLeft - (x - startX);
            };
            const onUp = () => {
              el.style.cursor = 'grab';
              document.removeEventListener('mousemove', onMove);
              document.removeEventListener('mouseup', onUp);
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} index={i} />
          ))}
          {/* Spacer */}
          <div className="flex-shrink-0 w-4 md:w-12" />
        </div>
      </div>

      {/* Scroll hint */}
      <Section>
        <Reveal variants={FADE_IN}>
          <div className="flex items-center gap-3 mt-6 text-[var(--text-3)]">
            <div className="flex gap-1">
              {PROJECTS.map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-current" />
              ))}
            </div>
            <span className="font-body text-xs">Drag to explore</span>
          </div>
        </Reveal>
      </Section>

      {/* Modal */}
      <LuxModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tags.map(t => <Tag key={t}>{t}</Tag>)}
            </div>

            {/* Content grid */}
            <div className="grid md:grid-cols-[1fr_200px] gap-8 mb-8">
              <div>
                <h4 className="font-display font-semibold text-[var(--text-3)] text-xs tracking-widest uppercase mb-3">Overview</h4>
                <p className="font-body text-[var(--text-2)] leading-relaxed text-[15px]">
                  {selected.fullDescription || selected.description}
                </p>
              </div>
              {selected.techStack && (
                <div>
                  <h4 className="font-display font-semibold text-[var(--text-3)] text-xs tracking-widest uppercase mb-3">Tech Stack</h4>
                  <div className="flex flex-col gap-2">
                    {selected.techStack.map(t => (
                      <div key={t} className="px-3 py-2 rounded-xl border border-white/[0.08] bg-white/[0.04] font-body text-sm text-[var(--text-2)]">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Divider className="mb-6" />

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {selected.links.map(link => (
                <LuxButton key={link.label} variant="secondary" size="sm" href={link.url} target="_blank">
                  {link.label} <ArrowUpRight size={14} />
                </LuxButton>
              ))}
            </div>
          </div>
        )}
      </LuxModal>
    </div>
  );
};

// ─────────────────────────────────────────────
// SKILLS SECTION
// ─────────────────────────────────────────────

const SkillsSection: React.FC = () => (
  <div className="py-28">
    <Section>
      <SectionLabel index="03" label="Skills" />

      <SplitText
        text="Technical Arsenal"
        className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-16"
      />

      <div className="space-y-12">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ delay: ci * 0.06, duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              {/* Category label */}
              <div className="md:w-48 flex-shrink-0 flex items-center gap-3">
                <span className="font-body text-xs tracking-widest uppercase text-[var(--text-3)] font-semibold">
                  {String(ci + 1).padStart(2, '0')}
                </span>
                <Divider className="hidden md:block flex-1 max-w-[30px]" />
                <h3 className="font-display font-semibold text-sm text-white leading-tight">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 flex-1">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: si * 0.04 + ci * 0.03, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:border-[rgba(41,151,255,0.3)] hover:bg-[rgba(41,151,255,0.06)] transition-all duration-200 cursor-default group"
                  >
                    {skill.logo ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-4 h-4 object-contain ${skill.invert ? 'brightness-0 invert opacity-60 group-hover:opacity-90' : ''}`}
                      />
                    ) : (
                      <Code2 size={14} className="text-[var(--text-3)]" />
                    )}
                    <span className="font-body text-sm text-[var(--text-2)] group-hover:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            {ci < SKILL_CATEGORIES.length - 1 && <Divider className="mt-10" />}
          </motion.div>
        ))}
      </div>
    </Section>
  </div>
);

// ─────────────────────────────────────────────
// CONTACT SECTION
// ─────────────────────────────────────────────

const ContactSection: React.FC = () => (
  <div className="py-28">
    <Section>
      <SectionLabel index="04" label="Contact" />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <SplitText
            text="Let's build something remarkable."
            className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-8"
          />

          <Reveal variants={FADE_UP} delay={0.1}>
            <p className="font-body text-base text-[var(--text-2)] leading-relaxed mb-10 max-w-sm">
              I'm actively exploring opportunities in AI Engineering, NLP, and Computer Vision.
              Whether it's a full-time role, research collaboration, or an interesting project —
              let's connect.
            </p>
          </Reveal>

          {/* Direct contact */}
          <RevealGroup className="space-y-3 mb-12">
            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'ragunathravi73@gmail.com', href: 'mailto:ragunathravi73@gmail.com' },
              { icon: <span className="text-base">✆</span>, label: 'WhatsApp', value: '+91 7825078508', href: 'https://wa.me/917825078508' },
            ].map(item => (
              <motion.a
                key={item.label}
                variants={FADE_UP}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.03] hover:border-[rgba(41,151,255,0.3)] hover:bg-[rgba(41,151,255,0.05)] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-[var(--text-3)] group-hover:text-[#2997ff] transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-widest uppercase text-[var(--text-3)] mb-0.5">{item.label}</p>
                  <p className="font-display font-medium text-sm text-white">{item.value}</p>
                </div>
                <ArrowUpRight size={16} className="ml-auto text-[var(--text-3)] group-hover:text-[#2997ff] transition-colors" />
              </motion.a>
            ))}
          </RevealGroup>

          {/* Social links */}
          <Reveal variants={FADE_UP} delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ragunath-r-a2a580247/' },
                { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/Ragu-123' },
                { icon: <Brain size={18} />, label: 'HuggingFace', href: 'https://huggingface.co/ragunath-ravi' },
                { icon: <FileText size={18} />, label: 'Resume', href: 'https://drive.google.com/file/d/1kM5NYSvwx1H__plrrWiPP9M2tsTT2IlU/view?usp=sharing' },
              ].map(s => (
                <Magnetic key={s.label} strength={0.3}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:border-white/[0.2] hover:bg-white/[0.08] text-[var(--text-2)] hover:text-white transition-all font-body text-sm"
                  >
                    {s.icon} {s.label}
                  </a>
                </Magnetic>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — Form */}
        <Reveal variants={SCALE_IN} delay={0.15}>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8">
            <h3 className="font-display font-bold text-xl text-white mb-6">Send a message</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs text-[var(--text-3)] uppercase tracking-widest mb-2">Name</label>
                  <LuxInput placeholder="Your name" />
                </div>
                <div>
                  <label className="block font-body text-xs text-[var(--text-3)] uppercase tracking-widest mb-2">Email</label>
                  <LuxInput type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block font-body text-xs text-[var(--text-3)] uppercase tracking-widest mb-2">Subject</label>
                <LuxInput placeholder="What's this about?" />
              </div>
              <div>
                <label className="block font-body text-xs text-[var(--text-3)] uppercase tracking-widest mb-2">Message</label>
                <LuxTextArea rows={5} placeholder="Tell me about your project or opportunity..." />
              </div>
              <LuxButton type="submit" size="lg" className="w-full mt-2">
                Send Message <ArrowRight size={18} />
              </LuxButton>
            </form>
          </div>
        </Reveal>
      </div>
    </Section>
  </div>
);

// ─────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <VoxelScene />
      <Layout activePage={activePage} onNavigate={setActivePage}>
        {activePage === 'home'     && <HeroSection onNavigate={setActivePage} />}
        {activePage === 'about'    && <AboutSection />}
        {activePage === 'projects' && <ProjectsSection />}
        {activePage === 'skills'   && <SkillsSection />}
        {activePage === 'contact'  && <ContactSection />}
      </Layout>
    </>
  );
}
