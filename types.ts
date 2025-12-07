import { ReactNode } from 'react';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // For the modal
  tags: string[];
  links: ProjectLink[];
  techStack?: string[];
  type?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface VoxelButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
}

export interface VoxelCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}
