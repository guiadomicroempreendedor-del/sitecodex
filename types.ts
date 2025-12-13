import React from 'react';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  projectUrl: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SectionProps {
  id?: string;
  className?: string;
}