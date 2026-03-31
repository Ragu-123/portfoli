import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { BlockButton, BlockCard, BlockInput, BlockTextArea, BlockModal, BlockProgressBar } from './components/ui/BlockComponents';
import { PROJECTS, SKILL_CATEGORIES, ABOUT_INFO } from './constants';
import { ArrowRight, Github, ExternalLink, User, Mail, Brain, Database, Cpu, Terminal, Sparkles, Activity, Linkedin, FileText } from 'lucide-react';
import { Project } from './types';
import { motion } from 'framer-motion';
import { TextReveal, ParallaxElement, SpotlightCard, GlitchText } from './components/ui/Animations';

// Page Transition Wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full px-6 md:px-12 lg:px-24 min-h-[70vh] flex flex-col justify-center max-w-[1920px] mx-auto py-12"
  >
    {children}
  </motion.div>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.3 }
  }
};

// AI Terminal Component
const TerminalBlock = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const codeSnippet = `import torch
import torch.nn as nn

class RagunathNet(nn.Module):
    def __init__(self):
        super(RagunathNet, self).__init__()
        self.vision = VisionTransformer(patch_size=16)
        self.nlp = Llama3(params="8b")
        self.skills = ["Deep Learning", "RAG", "CV"]

    def forward(self, problem):
        # Processing input...
        insight = self.vision(problem)
        solution = self.nlp(insight)
        return solution

# Initializing AI Engineer...
model = RagunathNet()
model.eval()
print("Ready to innovate.")`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(codeSnippet.substring(0, index));
      index++;
      if (index > codeSnippet.length) {
        clearInterval(timer);
      }
    }, 30);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm font-body text-xs md:text-sm text-left h-64 md:h-80 overflow-hidden relative opacity-95 transform hover:scale-[1.01] transition-all duration-300">
       <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-3">
         <div className="w-3 h-3 rounded-full bg-error hover:scale-125 transition-transform"></div>
         <div className="w-3 h-3 rounded-full bg-tertiary hover:scale-125 transition-transform"></div>
         <div className="w-3 h-3 rounded-full bg-primary hover:scale-125 transition-transform"></div>
         <span className="text-on-surface-variant ml-2 font-label font-semibold text-xs tracking-wide">ai_core.py</span>
       </div>
       <pre className="text-on-surface font-mono">
         <code dangerouslySetInnerHTML={{ 
           __html: text.replace(/\n/g, '<br/>')
                       .replace(/class/g, '<span class="text-primary font-bold">class</span>')
                       .replace(/def/g, '<span class="text-primary font-bold">def</span>')
                       .replace(/import/g, '<span class="text-secondary font-bold">import</span>')
                       .replace(/self/g, '<span class="text-tertiary">self</span>')
                       .replace(/return/g, '<span class="text-primary font-bold">return</span>')
         }} />
         {cursorVisible && <span className="inline-block w-2 h-4 bg-primary ml-1 align-middle"></span>}
       </pre>
       <div className="absolute bottom-3 right-4 text-primary text-xs font-semibold animate-pulse flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> SYSTEM ONLINE
       </div>
    </div>
  );
};

const HeroSection: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
      className="flex flex-col lg:flex-row items-center justify-center min-h-[85vh] gap-12 w-full px-6 md:px-12 lg:px-24 max-w-[1920px] mx-auto"
    >
       <div className="flex-1 text-center lg:text-left z-10">
           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 border border-primary/20 text-primary font-semibold font-label text-xs mb-8 rounded-full">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
             <TextReveal text="AI ENGINEERING • MACHINE LEARNING" />
           </motion.div>
           
           <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-headline font-bold mb-6 leading-tight tracking-tight text-on-surface">
              <GlitchText text="RAGUNATH" /> <span className="text-primary italic">R</span>
           </motion.h1>
           
           <motion.p variants={itemVariants} className="text-secondary font-headline text-2xl md:text-3xl mb-6 font-semibold flex items-center justify-center lg:justify-start gap-3">
             <Terminal className="w-6 h-6 text-primary" />
             <TextReveal text="Machine Learning • NLP • CV" delay={0.5} />
           </motion.p>
           
           <motion.p variants={itemVariants} className="text-on-surface-variant text-base md:text-lg mb-10 font-body leading-relaxed max-w-2xl">
              Aspiring AI Engineer and a recent graduate with a strong passion for artificial intelligence. 
              Eager to contribute to industrial applications of AI and explore innovative solutions in NLP and CV.
           </motion.p>
           
           <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <BlockButton size="lg" onClick={() => onNavigate('projects')}>
                View Projects
              </BlockButton>
              <BlockButton size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
                Get in Touch
              </BlockButton>
              <BlockButton size="lg" variant="accent" href="logbook.html">
                Logbook <ExternalLink className="w-4 h-4 ml-2" />
              </BlockButton>
           </motion.div>

           <motion.div variants={itemVariants} className="mt-12 flex gap-8 justify-center lg:justify-start text-on-surface-variant font-label font-semibold text-xs tracking-wider uppercase">
              <ParallaxElement offset={10} className="flex items-center gap-2">
                 <Brain className="w-4 h-4 text-primary" /> Neural Networks
              </ParallaxElement>
              <ParallaxElement offset={-10} className="flex items-center gap-2">
                 <Database className="w-4 h-4 text-secondary" /> Data Processing
              </ParallaxElement>
              <ParallaxElement offset={15} className="flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-tertiary" /> Model Optimization
              </ParallaxElement>
           </motion.div>
       </div>
       
       <motion.div
         variants={itemVariants}
         className="flex-1 w-full max-w-xl lg:max-w-2xl transform hover:scale-[1.02] transition-transform duration-500"
       >
          <TerminalBlock />
       </motion.div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
    return (
        <PageWrapper>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              className="mb-12 border-b border-outline-variant pb-8 flex items-center gap-6"
            >
                <div className="p-4 bg-primary-container/20 rounded-2xl">
                   <User className="w-10 h-10 text-primary" />
                </div>
                <div>
                    <h2 className="text-4xl font-headline font-bold text-on-surface mb-2">ABOUT ME</h2>
                    <p className="text-on-surface-variant font-body text-lg">AI Engineering Student & Research Enthusiast</p>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 pb-10">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={containerVariants}
                  className="space-y-8"
                >
                    <motion.div variants={itemVariants}>
                      <BlockCard title="Education History">
                          <div className="space-y-8">
                              {ABOUT_INFO.education.map((edu, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-6 border-l-2 border-outline-variant"
                                  >
                                      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-surface rounded-full border-2 border-primary"></div>
                                      <h4 className="text-lg font-headline font-bold text-on-surface leading-tight">{edu.title}</h4>
                                      <p className="text-primary font-semibold font-body text-sm mt-1">{edu.institution}</p>
                                      <p className="text-on-surface-variant text-sm mt-3 font-body leading-relaxed bg-surface-container-low p-3 rounded-lg">{edu.details}</p>
                                  </motion.div>
                              ))}
                          </div>
                      </BlockCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <BlockCard title="Research Focus">
                          <p className="text-on-surface-variant leading-relaxed text-base font-body mb-6">
                              My work focuses on the intersection of <strong className="text-primary font-semibold">NLP</strong> and <strong className="text-primary font-semibold">Computer Vision</strong>.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                             <motion.div whileHover={{ y: -5 }} className="bg-surface-container-low p-5 rounded-xl border border-outline-variant text-center">
                                <Sparkles className="w-6 h-6 text-tertiary mx-auto mb-3" />
                                <h5 className="font-headline font-semibold text-on-surface mb-1">Multimodal AI</h5>
                                <p className="text-sm text-on-surface-variant font-body">Text + Image Fusion</p>
                             </motion.div>
                             <motion.div whileHover={{ y: -5 }} className="bg-surface-container-low p-5 rounded-xl border border-outline-variant text-center">
                                <Database className="w-6 h-6 text-primary mx-auto mb-3" />
                                <h5 className="font-headline font-semibold text-on-surface mb-1">RAG Systems</h5>
                                <p className="text-sm text-on-surface-variant font-body">Knowledge Retrieval</p>
                             </motion.div>
                          </div>
                      </BlockCard>
                    </motion.div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={containerVariants}
                  className="space-y-8"
                >
                    <motion.div variants={itemVariants}>
                      <BlockCard title="Experience Logs">
                           <div className="space-y-6">
                              {ABOUT_INFO.experience.map((exp, idx) => (
                                  <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="bg-surface-container-low p-5 rounded-xl border border-outline-variant hover:border-primary transition-all group"
                                  >
                                      <h4 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{exp.title}</h4>
                                      <p className="text-on-surface-variant text-sm mt-3 leading-relaxed font-body">{exp.description}</p>
                                  </motion.div>
                              ))}
                          </div>
                      </BlockCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <BlockCard title="Certifications">
                          <ul className="space-y-3">
                              {ABOUT_INFO.certifications.map((cert, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-3 text-on-surface-variant font-body text-base p-3 rounded-lg hover:bg-surface-container-low transition-colors"
                                  >
                                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                                      {cert}
                                  </motion.li>
                              ))}
                          </ul>
                      </BlockCard>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageWrapper>
      <div className="flex items-end justify-between mb-12 border-b border-outline-variant pb-8">
          <div>
             <h2 className="text-4xl font-headline font-bold text-on-surface mb-2">PROJECTS</h2>
             <p className="text-on-surface-variant font-body text-lg">Deployed AI Models & Systems</p>
          </div>
          <div className="hidden md:block">
             <BlockButton size="sm" variant="secondary" href="https://github.com/Ragu-123" target="_blank">
               <Github className="w-4 h-4 mr-2" /> View GitHub Profile
             </BlockButton>
          </div>
      </div>
        
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
          {PROJECTS.map((project) => (
            <motion.div variants={itemVariants} key={project.id} className="h-full">
              <SpotlightCard
                  className="group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer hover:shadow-md"
                  onClick={() => setSelectedProject(project)}
              >
                <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                       <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors leading-tight pr-4">{project.title}</h3>
                       <Activity className="w-5 h-5 text-outline shrink-0 group-hover:text-primary" />
                    </div>

                    <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6 line-clamp-3">
                       {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto mb-6">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2.5 py-1 text-xs font-semibold bg-surface-container border border-outline-variant text-secondary rounded-md transition-colors">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 text-xs font-semibold bg-surface-container border border-outline-variant text-on-surface-variant rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="pt-4 border-t border-outline-variant flex justify-between items-center mt-auto">
                        <span className="text-xs font-semibold text-primary font-label uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Active
                        </span>
                        <div className="bg-primary-container text-on-primary-container p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                           <ArrowRight className="w-4 h-4" />
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
                     <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold font-label">
                        Model: {selectedProject.tags[0]}
                     </span>
                     <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold font-label">
                        Status: Deployed
                     </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xl font-headline font-bold text-on-surface border-b border-outline-variant pb-2">System Architecture</h4>
                        <p className="text-on-surface-variant leading-relaxed font-body text-base whitespace-pre-line">
                            {selectedProject.fullDescription || selectedProject.description}
                        </p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant h-fit">
                         <h4 className="font-headline font-bold text-on-surface mb-4 text-lg">Tech Stack</h4>
                         <div className="flex flex-col gap-3">
                            {selectedProject.techStack?.map(tech => (
                                <span key={tech} className="flex items-center gap-2 text-on-surface-variant text-sm font-semibold font-label">
                                    <div className="w-1.5 h-1.5 bg-outline rounded-full"></div> {tech}
                                </span>
                            )) || <span className="text-on-surface-variant text-sm">N/A</span>}
                        </div>
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
    </PageWrapper>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <PageWrapper>
      <div className="text-center mb-16">
         <motion.h2
           initial={{ y: -20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.1 }}
           viewport={{ once: false }}
           className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4"
         >
           Technical Capabilities
         </motion.h2>
         <motion.div
           initial={{ width: 0 }}
           whileInView={{ width: 80 }}
           viewport={{ once: false }}
           transition={{ delay: 0.3, duration: 0.5 }}
           className="h-1 bg-primary mx-auto rounded-full mb-6"
         ></motion.div>
         <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false }}
           transition={{ delay: 0.4 }}
           className="text-on-surface-variant font-body text-lg max-w-2xl mx-auto"
         >
           Verified Skill Matrix & Toolchain
         </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
         {SKILL_CATEGORIES.map((category, idx) => (
             <motion.div key={idx} variants={itemVariants} className="h-full">
               <BlockCard className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6 border-b border-outline-variant pb-4 bg-surface-container/30 -mx-6 -mt-6 p-5 rounded-t-xl">
                     <div className={`p-2 rounded-lg ${idx % 3 === 0 ? 'bg-primary/10 text-primary' : idx % 3 === 1 ? 'bg-secondary/10 text-secondary' : 'bg-tertiary/10 text-tertiary'}`}>
                         <Cpu className="w-5 h-5" />
                     </div>
                     <h3 className="font-headline font-bold text-lg text-on-surface">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 flex-grow">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -3, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex flex-col items-center justify-center p-4 bg-surface-container-lowest border border-outline-variant hover:border-primary transition-all rounded-xl gap-3 cursor-pointer group shadow-sm hover:shadow-md"
                        >
                           {skill.logo ? (
                             <div className="w-10 h-10 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                               <img
                                 src={skill.logo}
                                 alt={skill.name}
                                 className={`max-w-full max-h-full object-contain ${skill.invert ? 'filter invert brightness-0 opacity-60 group-hover:opacity-80' : ''}`}
                               />
                             </div>
                           ) : (
                             <div className="w-10 h-10 flex items-center justify-center bg-surface-container rounded-full text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <span className="font-headline font-bold text-lg">{skill.name[0]}</span>
                             </div>
                           )}
                           <span className="text-xs font-semibold text-on-surface-variant text-center font-label group-hover:text-primary transition-colors">{skill.name}</span>
                        </motion.div>
                      ))}
                  </div>
               </BlockCard>
             </motion.div>
         ))}
      </motion.div>
    </PageWrapper>
  );
};

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

const SocialButton = ({ href, label, icon: Icon }: SocialButtonProps) => (
  <motion.a
    whileHover={{ y: -4, shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="relative h-16 flex-1 min-w-[140px] bg-surface border border-outline-variant rounded-xl shadow-sm flex items-center justify-center overflow-hidden group px-4"
  >
    <div className="flex items-center justify-center gap-3 w-full transition-transform duration-300 group-hover:scale-105">
      <Icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
      <span className="font-semibold text-on-surface font-label text-sm tracking-wide">
        {label}
      </span>
    </div>
  </motion.a>
);

const ContactSection: React.FC = () => (
   <PageWrapper>
      <div className="max-w-5xl mx-auto w-full">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4">Establish Connection</h2>
            <p className="text-on-surface-variant font-body text-lg">Initiate Handshake Protocol</p>
         </div>

         <BlockCard className="shadow-lg p-2 md:p-8">
             <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-between">
                   <div>
                       <h3 className="font-headline text-2xl font-bold text-on-surface mb-6">Let's Build Something</h3>
                       <p className="text-on-surface-variant mb-10 leading-relaxed font-body text-base">
                          Currently listening for opportunities in <strong className="text-on-surface font-semibold">AI Engineering</strong>, <strong className="text-on-surface font-semibold">NLP</strong>, and <strong className="text-on-surface font-semibold">Computer Vision</strong>.
                          Send a ping, and I'll acknowledge the packet ASAP.
                       </p>
                       
                       <div className="space-y-4">
                          <a href="mailto:ragunathravi73@gmail.com" className="flex items-center gap-5 p-4 rounded-xl hover:bg-surface-container transition-colors group">
                             <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <Mail className="w-5 h-5" />
                             </div>
                             <div>
                                <p className="text-xs text-on-surface-variant font-label font-semibold uppercase tracking-wider mb-1">Email Protocol</p>
                                <p className="font-body text-base font-medium text-on-surface group-hover:text-primary transition-colors">ragunathravi73@gmail.com</p>
                             </div>
                          </a>

                          <a href="https://wa.me/917825078508" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-4 rounded-xl hover:bg-surface-container transition-colors group">
                             <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center group-hover:bg-tertiary group-hover:text-white transition-colors text-tertiary">
                                <span className="font-bold text-xl leading-none">✆</span>
                             </div>
                             <div>
                                <p className="text-xs text-on-surface-variant font-label font-semibold uppercase tracking-wider mb-1">WhatsApp Channel</p>
                                <p className="font-body text-base font-medium text-on-surface group-hover:text-tertiary transition-colors">+91 7825078508</p>
                             </div>
                          </a>
                       </div>
                   </div>

                   <div className="flex flex-wrap gap-4 pt-12">
                        <SocialButton href="https://www.linkedin.com/in/ragunath-r-a2a580247/" label="LinkedIn" icon={Linkedin} />
                        <SocialButton href="https://huggingface.co/ragunath-ravi" label="HuggingFace" icon={Brain} />
                        <SocialButton href="https://github.com/Ragu-123" label="GitHub" icon={Github} />
                        <SocialButton href="https://drive.google.com/file/d/1kM5NYSvwx1H__plrrWiPP9M2tsTT2IlU/view?usp=sharing" label="Resume" icon={FileText} />
                   </div>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant relative mt-8 md:mt-0 shadow-sm">
                   <div className="absolute -top-4 -right-4 bg-primary text-on-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-md animate-bounce font-label">
                      Live Feed
                   </div>
                   <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                      <div>
                         <label className="block text-sm font-semibold font-label text-on-surface mb-2">Source Identity</label>
                         <BlockInput placeholder="Your Name" />
                      </div>
                      <div>
                         <label className="block text-sm font-semibold font-label text-on-surface mb-2">Return Address</label>
                         <BlockInput type="email" placeholder="email@domain.com" />
                      </div>
                      <div>
                         <label className="block text-sm font-semibold font-label text-on-surface mb-2">Data Payload</label>
                         <BlockTextArea rows={5} placeholder="Type your message..." />
                      </div>
                      <BlockButton type="submit" className="w-full mt-4" size="lg">
                         Transmit Data
                      </BlockButton>
                   </form>
                </div>
             </div>
         </BlockCard>
      </div>
   </PageWrapper>
);

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/20 selection:text-primary">
      <Layout activePage={activePage} onNavigate={setActivePage}>
        {activePage === 'home' && <HeroSection onNavigate={setActivePage} />}
        {activePage === 'about' && <AboutSection />}
        {activePage === 'projects' && <ProjectsSection />}
        {activePage === 'skills' && <SkillsSection />}
        {activePage === 'contact' && <ContactSection />}
      </Layout>
    </div>
  );
}

export default App;
