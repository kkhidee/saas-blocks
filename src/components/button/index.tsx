/* eslint-disable react/button-has-type */
import { MouseEventHandler, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined' | 'critical';

export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: HTMLButtonElement['type'];
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const Button = ({ children, onClick, type = 'button', size = 'sm', variant = 'primary' }: ButtonProps) => {
  const variantStyles = {
    primary: `shadow-sm text-white border-primary bg-primary 
    hover:border-primary-accent hover:bg-primary-accent focus:outline-none 
    focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 
    disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white 
    focus:ring-white/80`,
    secondary: `border-secondary bg-secondary shadow-sm text-white hover:border-secondary-accent 
    hover:bg-secondary-accent focus:outline-none focus:ring-2 
    focus:ring-primary/80 focus:ring-offset-0 disabled:opacity-30 
    disabled:hover:border-secondary disabled:hover:bg-secondary 
    disabled:hover:text-white focus:ring-white/80`,
    ghost: `border-transparent bg-transparent text-text hover:bg-heading/5 focus:bg-heading/5 
    focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 
    disabled:hover:bg-transparent disabled:hover:text-text`,
    outlined: `border-muted-1 bg-transparent shadow-sm text-text hover:text-white focus:text-white 
    focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 
    disabled:opacity-30 disabled:hover:text-text focus:ring-white/80`,
    critical: `border-critical bg-critical text-white shadow-sm hover:border-critical-accent 
    hover:bg-critical-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 
    focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-critical 
    disabled:hover:bg-critical disabled:hover:text-white focus:ring-white/80`,
  };

  const sizeStyles = {
    xs: `px-3 py-2 text-xs`,
    sm: `px-4 py-2.5 text-sm`,
    base: `px-4 py-2.5 text-base`,
    lg: `px-4 py-2.5 text-lg`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantStyles[variant]} ${sizeStyles[size]} inline-flex cursor-pointer 
      items-center justify-center rounded-xl border-2 font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
