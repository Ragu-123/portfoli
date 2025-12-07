import React, { ReactNode, useState } from 'react';
import { Menu, X, Box, Code, Mail } from 'lucide-react';
import { BlockButton } from './ui/BlockComponents';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const NavLink: React.FC<{ page: string; label: string; active: boolean; onClick: () => void }> = ({ page, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`block w-full text-left px-4 py-2 font-bold transition-all border-l-4 ${active ? 'bg-voxel-primary text-voxel-dark border-voxel-accent' : 'border-transparent hover:bg-white/10 text-white'}`}
  >
    {label}
  </button>
);

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen z-10 flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 pointer-events-none">
        <div className="w-full px-6 md:px-12 flex justify-between items-start">
          {/* Logo */}
          <div className="pointer-events-auto">
            <div 
                className="bg-voxel-card border-2 border-black shadow-voxel p-3 inline-flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleNav('home')}
            >
              <div className="w-10 h-10 bg-voxel-primary border-2 border-black flex items-center justify-center">
                 <Box className="w-6 h-6 text-voxel-dark" />
              </div>
              <div>
                <h1 className="font-bold text-xl leading-none tracking-tighter text-white">RAGUNATH<br/>R</h1>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block pointer-events-auto">
             <div className="bg-voxel-card border-2 border-black shadow-voxel p-2 flex gap-4">
                <BlockButton size="sm" variant={activePage === 'about' ? 'primary' : 'secondary'} onClick={() => handleNav('about')}>About</BlockButton>
                <BlockButton size="sm" variant={activePage === 'projects' ? 'primary' : 'secondary'} onClick={() => handleNav('projects')}>Work</BlockButton>
                <BlockButton size="sm" variant={activePage === 'skills' ? 'primary' : 'secondary'} onClick={() => handleNav('skills')}>Skills</BlockButton>
                <BlockButton size="sm" variant={activePage === 'contact' ? 'primary' : 'secondary'} onClick={() => handleNav('contact')}>Contact</BlockButton>
             </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden pointer-events-auto">
            <BlockButton size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </BlockButton>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="pointer-events-auto absolute top-20 right-4 w-64 bg-voxel-card border-2 border-black shadow-voxel-xl p-4 animate-in fade-in slide-in-from-top-4 duration-200">
             <div className="flex flex-col gap-2">
                <NavLink page="home" label="Home" active={activePage === 'home'} onClick={() => handleNav('home')} />
                <NavLink page="about" label="About Me" active={activePage === 'about'} onClick={() => handleNav('about')} />
                <NavLink page="projects" label="Projects" active={activePage === 'projects'} onClick={() => handleNav('projects')} />
                <NavLink page="skills" label="Skills & Tools" active={activePage === 'skills'} onClick={() => handleNav('skills')} />
                <div className="h-px bg-gray-700 my-2"></div>
                <BlockButton onClick={() => handleNav('contact')} className="w-full">Let's Talk</BlockButton>
             </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24 pb-20 overflow-y-auto">
        {children}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-4 pointer-events-none z-40 hidden md:block">
         <div className="w-full px-6 md:px-12 flex justify-between items-end">
            <div className="pointer-events-auto flex gap-4">
                 <a href="https://github.com/Ragu-123" target="_blank" rel="noreferrer" className="w-10 h-10 bg-voxel-card border-2 border-black flex items-center justify-center hover:bg-voxel-primary transition-colors cursor-pointer text-white hover:text-black shadow-voxel-sm">
                    <Code className="w-5 h-5" />
                 </a>
                 <a href="mailto:ragunathravi73@gmail.com" className="w-10 h-10 bg-voxel-card border-2 border-black flex items-center justify-center hover:bg-voxel-secondary transition-colors cursor-pointer text-white hover:text-black shadow-voxel-sm">
                    <Mail className="w-5 h-5" />
                 </a>
            </div>
            <div className="bg-voxel-dark/80 px-4 py-2 border-2 border-black shadow-voxel-sm">
                <p className="text-gray-500 font-mono text-xs">
                    © {new Date().getFullYear()} Ragunath R.
                </p>
            </div>
         </div>
      </footer>
    </div>
  );
};