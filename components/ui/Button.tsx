import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  // Added font-display
  const baseStyles = "relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-lite-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-none";
  
  // Polygon shape clip-path
  // Creates a slight cut on top-left and bottom-right
  const polygonClass = "[clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]";

  const variants = {
    primary: `bg-lite-neon text-lite-dark hover:bg-lite-neonHover focus:ring-lite-neon ${polygonClass}`,
    secondary: `bg-lite-surface text-white hover:bg-lite-metal focus:ring-lite-metal ${polygonClass}`,
    outline: `bg-transparent border border-lite-neon text-lite-neon hover:bg-lite-neon/10 focus:ring-lite-neon ${polygonClass}`
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} py-4 px-8 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;