import React from 'react';
import { VoxelButtonProps, VoxelCardProps } from '../../types';
import { X } from 'lucide-react';
import { MagneticButton, TiltCard } from './Animations';

export const BlockButton: React.FC<VoxelButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  size = 'md',
  href,
  type = 'button',
  target
}) => {
  
  const baseStyles = "relative font-body font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out hover:-translate-y-1 inline-flex items-center justify-center cursor-pointer select-none rounded-lg border shadow-sm";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary: "bg-primary text-on-primary border-primary hover:bg-opacity-90",
    secondary: "bg-surface text-primary border-outline hover:border-primary",
    accent: "bg-secondary text-on-primary border-secondary hover:bg-opacity-90",
    danger: "bg-red-700 text-white border-red-800 hover:bg-red-800",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? "noopener noreferrer" : undefined} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <MagneticButton onClick={onClick} className="inline-block">
        <button type={type} className={combinedClasses} style={{ width: '100%' }}>
          {children}
        </button>
    </MagneticButton>
  );
};

export const BlockCard: React.FC<VoxelCardProps> = ({ children, className = '', title, onClick }) => {
  return (
    <TiltCard onClick={onClick} className={`relative bg-surface border border-outline rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-0 h-full ${className}`}>
      {title && (
        <div className="bg-surface-container border-b border-outline p-4 rounded-t-xl">
          <h3 className="font-headline font-semibold text-primary tracking-wide text-lg truncate">{title}</h3>
        </div>
      )}
      <div className="p-6 h-full flex flex-col">
        {children}
      </div>
    </TiltCard>
  );
};

export const BlockInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input 
      {...props}
      className={`w-full bg-surface-container border border-outline rounded-lg p-3 text-on-background shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500 font-body ${props.className}`}
    />
  );
};

export const BlockTextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea 
      {...props}
      className={`w-full bg-surface-container border border-outline rounded-lg p-3 text-on-background shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-500 font-body ${props.className}`}
    />
  );
};

export interface BlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const BlockModal = ({ isOpen, onClose, children, title }: BlockModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
          <div className="bg-surface border border-outline rounded-xl">
             <div className="bg-surface-container border-b border-outline p-4 flex items-center justify-between sticky top-0 z-10 rounded-t-xl">
                <h3 className="font-headline font-semibold text-primary tracking-wide text-xl">{title || "Details"}</h3>
                <button onClick={onClose} className="hover:bg-outline/30 p-1 rounded-full transition-colors text-secondary">
                  <X className="w-6 h-6" />
                </button>
             </div>
             <div className="p-8">
               {children}
             </div>
          </div>
        </div>
      </div>
    );
};

export const BlockProgressBar: React.FC<{ label: string; progress: number }> = ({ label, progress }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm font-semibold text-secondary mb-2 font-body">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-surface-container rounded-full overflow-hidden border border-outline/50">
        <div 
          className="h-full bg-primary relative transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>
    </div>
  );
};
