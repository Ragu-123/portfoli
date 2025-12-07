import React from 'react';
import { VoxelButtonProps, VoxelCardProps } from '../../types';
import { X } from 'lucide-react';

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
  
  const baseStyles = "relative font-bold uppercase transition-all duration-100 ease-in-out active:translate-y-[4px] active:shadow-none border-2 border-black inline-flex items-center justify-center cursor-pointer select-none";
  
  const sizeStyles = {
    sm: "px-3 py-1 text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px]",
    md: "px-6 py-3 text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    lg: "px-8 py-4 text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-[6px]",
  };

  const variantStyles = {
    primary: "bg-voxel-primary text-voxel-dark hover:bg-blue-400",
    secondary: "bg-voxel-secondary text-voxel-dark hover:bg-purple-300",
    accent: "bg-voxel-accent text-voxel-dark hover:bg-green-300",
    danger: "bg-voxel-danger text-white hover:bg-red-400",
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
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export const BlockCard: React.FC<VoxelCardProps> = ({ children, className = '', title, onClick }) => {
  return (
    <div onClick={onClick} className={`relative bg-voxel-card border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] p-0 ${className}`}>
      {title && (
        <div className="bg-voxel-primary border-b-2 border-black p-3 flex items-center justify-between">
          <h3 className="font-bold text-voxel-dark uppercase tracking-widest text-sm truncate pr-2">{title}</h3>
          <div className="flex gap-2 shrink-0">
            <div className="w-3 h-3 bg-voxel-danger border border-black"></div>
            <div className="w-3 h-3 bg-voxel-accent border border-black"></div>
          </div>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export const BlockInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input 
      {...props}
      className={`w-full bg-voxel-bg border-2 border-black p-3 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(122,162,247,1)] focus:translate-y-[2px] focus:translate-x-[2px] transition-all placeholder-gray-500 ${props.className}`}
    />
  );
};

export const BlockTextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <textarea 
      {...props}
      className={`w-full bg-voxel-bg border-2 border-black p-3 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(122,162,247,1)] focus:translate-y-[2px] focus:translate-x-[2px] transition-all placeholder-gray-500 ${props.className}`}
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="bg-voxel-card border-2 border-black shadow-voxel-xl">
             <div className="bg-voxel-primary border-b-2 border-black p-4 flex items-center justify-between sticky top-0 z-10">
                <h3 className="font-bold text-voxel-dark uppercase tracking-widest text-lg">{title || "Details"}</h3>
                <button onClick={onClose} className="hover:bg-black/10 p-1 rounded transition-colors">
                  <X className="w-6 h-6 text-voxel-dark" />
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
      <div className="flex justify-between text-xs font-bold text-gray-400 mb-1 font-mono uppercase">
        <span>{label}</span>
        <span>{progress}% Confidence</span>
      </div>
      <div className="h-4 bg-voxel-dark border border-gray-700 p-0.5 relative">
        <div 
          className="h-full bg-voxel-accent relative overflow-hidden" 
          style={{ width: `${progress}%` }}
        >
           <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqgOx4Wy4IsYCEEmzAQkAlQwZ+Bw6iN4AAAAASUVORK5CYII=')] opacity-20"></div>
        </div>
      </div>
    </div>
  );
};