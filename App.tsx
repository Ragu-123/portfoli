import React, { useState, useEffect, useRef } from 'react';
import { VoxelScene } from './components/3d/VoxelScene';
import { Layout } from './components/Layout';
import { BlockButton, BlockCard, BlockInput, BlockTextArea, BlockModal, BlockProgressBar } from './components/ui/BlockComponents';
import { PROJECTS, SKILL_CATEGORIES, ABOUT_INFO } from './constants';
import { ArrowRight, Github, ExternalLink, User, Mail, Brain, Database, Cpu, Terminal, Sparkles, Activity, Linkedin, FileText } from 'lucide-react';
import { Project } from './types';
import { motion } from 'framer-motion';
import { TextReveal, ParallaxElement, SpotlightCard, GlitchText } from './components/ui/Animations';

// Page Transition Wrapper with Full Width and Staggered Children Animation
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full px-6 md:px-12 lg:px-24 min-h-[70vh] flex flex-col justify-center max-w-[1920px] mx-auto"
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
    }, 30); // Typing speed
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="bg-[#1e1e1e] border-2 border-gray-600 rounded-md p-4 shadow-xl font-mono text-xs md:text-sm text-left h-64 md:h-80 overflow-hidden relative opacity-90 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-300">
       <div className="flex items-center gap-2 mb-2 border-b border-gray-700 pb-2">
         <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-125 transition-transform"></div>
         <div className="w-3 h-3 rounded-full bg-yellow-500 hover:scale-125 transition-transform"></div>
         <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-125 transition-transform"></div>
         <span className="text-gray-400 ml-2">ai_core.py</span>
       </div>
       <pre className="text-blue-300">
         <code dangerouslySetInnerHTML={{ 
           __html: text.replace(/\n/g, '<br/>')
                       .replace(/class/g, '<span class="text-purple-400">class</span>')
                       .replace(/def/g, '<span class="text-purple-400">def</span>')
                       .replace(/import/g, '<span class="text-purple-400">import</span>')
                       .replace(/self/g, '<span class="text-orange-300">self</span>')
                       .replace(/return/g, '<span class="text-purple-400">return</span>')
         }} />
         {cursorVisible && <span className="inline-block w-2 h-4 bg-white ml-1 align-middle"></span>}
       </pre>
       <div className="absolute bottom-2 right-2 text-green-500 text-xs animate-pulse">
          ● SYSTEM ONLINE
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
       {/* Left: Content */}
       <div className="flex-1 text-center lg:text-left z-10">
           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-voxel-accent/10 border border-voxel-accent text-voxel-accent font-bold text-xs mb-6 rounded-full animate-pulse">
             <div className="w-2 h-2 bg-voxel-accent rounded-full"></div>
             <TextReveal text="AI ENGINEERING • MACHINE LEARNING" />
           </motion.div>
           
           <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold mb-6 leading-none tracking-tighter text-white drop-shadow-lg">
              <GlitchText text="RAGUNATH" /> <span className="text-voxel-primary">R</span>
           </motion.h1>
           
           <motion.p variants={itemVariants} className="text-voxel-primary font-mono text-xl md:text-2xl mb-6 font-bold flex items-center justify-center lg:justify-start gap-3">
             <Terminal className="w-6 h-6 animate-bounce" />
             <TextReveal text="Machine Learning • NLP • CV" delay={0.5} />
           </motion.p>
           
           <motion.p variants={itemVariants} className="text-gray-300 text-base md:text-lg mb-10 font-mono leading-relaxed max-w-2xl">
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

           <motion.div variants={itemVariants} className="mt-12 flex gap-8 justify-center lg:justify-start text-gray-400 font-mono text-xs">
              <ParallaxElement offset={20} className="flex items-center gap-2">
                 <Brain className="w-4 h-4 text-voxel-primary" /> Neural Networks
              </ParallaxElement>
              <ParallaxElement offset={-20} className="flex items-center gap-2">
                 <Database className="w-4 h-4 text-voxel-secondary" /> Data Processing
              </ParallaxElement>
              <ParallaxElement offset={30} className="flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-voxel-accent" /> Model Optimization
              </ParallaxElement>
           </motion.div>
       </div>
       
       {/* Right: Terminal Animation */}
       <motion.div
         variants={itemVariants}
         className="flex-1 w-full max-w-xl lg:max-w-2xl transform hover:scale-[1.02] transition-transform duration-500 perspective-1000"
       >
           <div className="transform rotate-y-[-5deg] rotate-x-[5deg]">
              <TerminalBlock />
           </div>
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
              className="mb-8 border-b-4 border-voxel-card pb-6 flex items-center gap-4"
            >
                <User className="w-10 h-10 text-voxel-primary" />
                <div>
                    <h2 className="text-4xl font-bold text-white">ABOUT ME</h2>
                    <p className="text-gray-400 font-mono">AI Engineering Student & Research Enthusiast</p>
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
                    {/* Education */}
                    <motion.div variants={itemVariants}>
                      <BlockCard title="EDUCATION_HISTORY">
                          <div className="space-y-8">
                              {ABOUT_INFO.education.map((edu, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative pl-6 border-l-2 border-dashed border-gray-700"
                                  >
                                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-voxel-primary rounded-full border-2 border-black animate-pulse"></div>
                                      <h4 className="text-lg font-bold text-white leading-tight">{edu.title}</h4>
                                      <p className="text-voxel-primary font-bold text-sm mt-1">{edu.institution}</p>
                                      <p className="text-gray-400 text-xs mt-2 font-mono bg-black/30 inline-block px-2 py-1 border border-gray-800">{edu.details}</p>
                                  </motion.div>
                              ))}
                          </div>
                      </BlockCard>
                    </motion.div>

                     {/* Research */}
                    <motion.div variants={itemVariants}>
                      <BlockCard title="RESEARCH_VECTORS">
                          <p className="text-gray-300 leading-relaxed text-sm mb-4">
                              My work focuses on the intersection of <span className="text-voxel-accent font-bold bg-voxel-accent/10 px-1">NLP</span> and <span className="text-voxel-accent font-bold bg-voxel-accent/10 px-1">Computer Vision</span>.
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                             <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="bg-voxel-dark p-3 border border-gray-700 cursor-pointer">
                                <Sparkles className="w-5 h-5 text-yellow-400 mb-2" />
                                <h5 className="font-bold text-xs text-white">Multimodal AI</h5>
                                <p className="text-[10px] text-gray-500">Text + Image Fusion</p>
                             </motion.div>
                             <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="bg-voxel-dark p-3 border border-gray-700 cursor-pointer">
                                <Database className="w-5 h-5 text-blue-400 mb-2" />
                                <h5 className="font-bold text-xs text-white">RAG Systems</h5>
                                <p className="text-[10px] text-gray-500">Knowledge Retrieval</p>
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
                    {/* Experience */}
                    <motion.div variants={itemVariants}>
                      <BlockCard title="EXPERIENCE_LOGS">
                           <div className="space-y-6">
                              {ABOUT_INFO.experience.map((exp, idx) => (
                                  <motion.div
                                    key={idx}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="bg-voxel-dark/50 p-4 border border-gray-700 hover:border-voxel-secondary transition-all group cursor-default"
                                  >
                                      <h4 className="text-lg font-bold text-white group-hover:text-voxel-secondary transition-colors">{exp.title}</h4>
                                      <p className="text-gray-400 text-sm mt-2 leading-relaxed font-mono">{exp.description}</p>
                                  </motion.div>
                              ))}
                          </div>
                      </BlockCard>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div variants={itemVariants}>
                      <BlockCard title="CERTIFICATION_KEYS">
                          <ul className="space-y-2">
                              {ABOUT_INFO.certifications.map((cert, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-center gap-3 text-gray-300 text-sm p-2 hover:bg-white/5 transition-colors"
                                  >
                                      <div className="w-1.5 h-1.5 bg-voxel-accent rotate-45 animate-spin duration-700"></div>
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
      <div className="flex items-end justify-between mb-8 border-b-4 border-voxel-card pb-6">
          <div>
             <h2 className="text-4xl font-bold mb-2">PROJECTS</h2>
             <p className="text-gray-400 font-mono">Deployed AI Models & Systems</p>
          </div>
          <div className="hidden md:block">
             <BlockButton size="sm" variant="secondary" href="https://github.com/Ragu-123" target="_blank">
               <Github className="w-4 h-4 mr-2" /> View GitHub Profile
             </BlockButton>
          </div>
      </div>
        
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
          {PROJECTS.map((project) => (
            <motion.div variants={itemVariants} key={project.id}>
              <BlockCard
                  title={project.id.toUpperCase()}
                  className="group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full cursor-pointer hover:shadow-voxel-xl hover:border-voxel-primary"
                  onClick={() => setSelectedProject(project)}
              >
                <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                       <h3 className="text-lg font-bold text-white group-hover:text-voxel-primary transition-colors">{project.title}</h3>
                       <Activity className="w-4 h-4 text-gray-600 group-hover:text-voxel-accent animate-pulse" />
                    </div>

                    <div className="mb-4 bg-black/20 p-2 border border-gray-800 rounded group-hover:border-gray-600 transition-colors">
                       <p className="text-gray-400 font-mono text-xs leading-relaxed line-clamp-3">
                         {project.description}
                       </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-bold bg-voxel-dark border border-gray-700 text-voxel-secondary uppercase group-hover:bg-voxel-secondary group-hover:text-voxel-dark transition-colors">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                          <span className="px-2 py-1 text-[10px] font-bold bg-voxel-dark border border-gray-700 text-gray-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-xs font-bold text-voxel-accent font-mono animate-pulse">● STATUS: ACTIVE</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="bg-voxel-primary text-black p-1 rounded-sm"
                    >
                       <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </div>
              </BlockCard>
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
            <div className="space-y-6">
                <div className="flex gap-4 mb-4">
                     <span className="bg-voxel-primary text-voxel-dark px-2 py-1 text-xs font-bold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        MODEL: {selectedProject.tags[0]}
                     </span>
                     <span className="bg-voxel-secondary text-voxel-dark px-2 py-1 text-xs font-bold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        STATUS: DEPLOYED
                     </span>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <h4 className="text-voxel-primary font-bold mb-2 uppercase text-sm border-b border-gray-800 pb-1">System Architecture</h4>
                        <p className="text-gray-300 leading-relaxed font-mono text-sm md:text-base">
                            {selectedProject.fullDescription || selectedProject.description}
                        </p>
                    </div>
                    <div className="bg-voxel-dark p-4 border border-gray-700 h-fit">
                         <h4 className="text-voxel-accent font-bold mb-4 uppercase text-sm">Tech Stack</h4>
                         <div className="flex flex-wrap gap-2">
                            {selectedProject.techStack?.map(tech => (
                                <span key={tech} className="block w-full text-center px-3 py-1 bg-[#1a1b26] border border-gray-600 text-gray-300 text-xs font-bold hover:border-voxel-primary transition-colors cursor-default">
                                    {tech}
                                </span>
                            )) || <span className="text-gray-500 text-xs">N/A</span>}
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-700 flex flex-wrap gap-4 justify-end">
                    {selectedProject.links.map(link => (
                        <BlockButton key={link.label} size="sm" variant="primary" href={link.url} target="_blank">
                            {link.label} <ExternalLink className="w-3 h-3 ml-2" />
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
      <div className="text-center mb-10">
         <motion.h2
           initial={{ y: -20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.1 }}
           viewport={{ once: false }}
           className="text-4xl font-bold mb-4"
         >
           TECHNICAL CAPABILITIES
         </motion.h2>
         <motion.div
           initial={{ width: 0 }}
           whileInView={{ width: 128 }}
           viewport={{ once: false }}
           transition={{ delay: 0.3, duration: 0.5 }}
           className="h-2 bg-voxel-primary mx-auto mb-4"
         ></motion.div>
         <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false }}
           transition={{ delay: 0.4 }}
           className="text-gray-400 font-mono"
         >
           Verified Skill Matrix & Toolchain
         </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
         {SKILL_CATEGORIES.map((category, idx) => (
             <motion.div key={idx} variants={itemVariants}>
               <BlockCard className="h-full hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-3 bg-voxel-dark/50 -mx-6 -mt-6 p-4">
                     <div className={`w-3 h-3 ${idx % 3 === 0 ? 'bg-voxel-primary' : idx % 3 === 1 ? 'bg-voxel-secondary' : 'bg-voxel-accent'} border border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] animate-pulse`}></div>
                     <h3 className="font-bold text-sm uppercase tracking-wider">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      {category.skills.map((skill, sIdx) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col items-center justify-center p-3 bg-voxel-bg border border-gray-700 hover:border-voxel-primary transition-colors gap-2 rounded-sm group cursor-pointer"
                        >
                           {skill.logo ? (
                             <div className="w-10 h-10 relative flex items-center justify-center">
                               <img
                                 src={skill.logo}
                                 alt={skill.name}
                                 className={`max-w-full max-h-full object-contain ${skill.invert ? 'filter invert brightness-0' : ''}`}
                               />
                             </div>
                           ) : (
                             <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded">
                                <span className="text-xs font-bold">{skill.name[0]}</span>
                             </div>
                           )}
                           <span className="text-[10px] font-bold text-gray-300 text-center uppercase group-hover:text-voxel-primary transition-colors">{skill.name}</span>
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

// Larger Social Button with slide effect
interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

const SocialButton = ({ href, label, icon: Icon }: SocialButtonProps) => (
  <motion.a
    whileHover={{ x: 2, y: 2, boxShadow: 'none' }}
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="relative h-20 flex-1 min-w-[160px] bg-voxel-secondary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden group"
  >
    <span className="font-bold text-voxel-dark tracking-wider text-xl transition-transform duration-300 group-hover:-translate-y-20">
      {label}
    </span>
    <div className="absolute inset-0 flex items-center justify-center translate-y-20 transition-transform duration-300 group-hover:translate-y-0 text-voxel-dark">
      <Icon className="w-10 h-10" />
    </div>
  </motion.a>
);

const ContactSection: React.FC = () => (
   <PageWrapper>
      <div className="max-w-5xl mx-auto w-full">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">ESTABLISH CONNECTION</h2>
            <p className="text-gray-400 font-mono">Initiate Handshake Protocol</p>
         </div>

         <BlockCard title="TRANSMISSION_UPLINK" className="shadow-voxel-xl bg-voxel-card/90">
             <div className="grid md:grid-cols-2 gap-12 p-2">
                <div className="flex flex-col justify-between">
                   <div>
                       <p className="text-gray-400 mb-8 leading-relaxed font-mono text-sm border-l-2 border-voxel-primary pl-4">
                          Currently listening for opportunities in <strong className="text-white">AI Engineering</strong>, <strong className="text-white">NLP</strong>, and <strong className="text-white">Computer Vision</strong>. 
                          Send a ping, and I'll acknowledge the packet ASAP.
                       </p>
                       
                       <div className="space-y-4">
                          <a href="mailto:ragunathravi73@gmail.com" className="flex items-center gap-4 p-4 bg-voxel-bg border-2 border-transparent hover:border-voxel-primary transition-all group cursor-pointer hover:translate-x-2">
                             <div className="w-12 h-12 bg-voxel-card flex items-center justify-center border border-gray-700 group-hover:bg-voxel-primary group-hover:text-black transition-colors">
                                <Mail className="w-6 h-6" />
                             </div>
                             <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Email Protocol</p>
                                <p className="font-mono text-sm break-all font-bold">ragunathravi73@gmail.com</p>
                             </div>
                          </a>

                          <a href="https://wa.me/917825078508" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-voxel-bg border-2 border-transparent hover:border-voxel-accent transition-all group cursor-pointer hover:translate-x-2">
                             <div className="w-12 h-12 bg-voxel-card flex items-center justify-center border border-gray-700 group-hover:bg-voxel-accent group-hover:text-black transition-colors">
                                <span className="font-bold text-xl">✆</span>
                             </div>
                             <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">WhatsApp Channel</p>
                                <p className="font-mono text-sm font-bold">+91 7825078508</p>
                             </div>
                          </a>
                       </div>
                   </div>

                   <div className="flex flex-wrap gap-4 pt-8">
                        <SocialButton href="https://www.linkedin.com/in/ragunath-r-a2a580247/" label="LINKEDIN" icon={Linkedin} />
                        <SocialButton href="https://huggingface.co/ragunath-ravi" label="HUGGINGFACE" icon={Brain} />
                        <SocialButton href="https://github.com/Ragu-123" label="GITHUB" icon={Github} />
                        <SocialButton href="https://drive.google.com/file/d/1kM5NYSvwx1H__plrrWiPP9M2tsTT2IlU/view?usp=sharing" label="RESUME" icon={FileText} />
                   </div>
                </div>

                <div className="bg-voxel-bg p-6 border-2 border-black relative mt-8 md:mt-0">
                   <div className="absolute -top-3 -right-3 bg-voxel-danger text-white text-xs font-bold px-2 py-1 border border-black transform rotate-12 shadow-sm animate-pulse">
                      LIVE FEED
                   </div>
                   <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                         <label className="block text-xs font-bold uppercase mb-2 text-gray-500">Source Identity</label>
                         <BlockInput placeholder="Your Name" />
                      </div>
                      <div>
                         <label className="block text-xs font-bold uppercase mb-2 text-gray-500">Return Address (Email)</label>
                         <BlockInput type="email" placeholder="email@domain.com" />
                      </div>
                      <div>
                         <label className="block text-xs font-bold uppercase mb-2 text-gray-500">Data Payload</label>
                         <BlockTextArea rows={4} placeholder="Type your message..." />
                      </div>
                      <BlockButton type="submit" className="w-full" variant="primary">
                         TRANSMIT DATA
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
    <>
      <VoxelScene />
      <Layout activePage={activePage} onNavigate={setActivePage}>
        {activePage === 'home' && <HeroSection onNavigate={setActivePage} />}
        {activePage === 'about' && <AboutSection />}
        {activePage === 'projects' && <ProjectsSection />}
        {activePage === 'skills' && <SkillsSection />}
        {activePage === 'contact' && <ContactSection />}
      </Layout>
    </>
  );
}

export default App;