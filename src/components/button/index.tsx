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
  rounded?: 'xl' | 'full';
  iconComponent?: ReactNode;
};

const Button = ({
  children,
  onClick,
  type = 'button',
  size = 'sm',
  variant = 'primary',
  rounded = 'xl',
  iconComponent,
}: ButtonProps) => {
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    outlined: 'btn-outlined',
    critical: 'btn-critical',
  };

  const sizeStyles = {
    xs: `px-3 py-2 text-xs`,
    sm: `px-4 py-2.5 text-sm`,
    base: `px-4 py-2.5 text-base`,
    lg: `px-4 py-2.5 text-lg`,
  };

  const iconStyles = {
    xs: `ml-2 h-4 w-4`,
    sm: `ml-2 h-5 w-5`,
    base: `ml-2 h-5 w-5`,
    lg: `ml-2 h-6 w-6`,
  };

  const roundedStyles = {
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]} btn-main`}
    >
      {children}
      {iconComponent && <span className={`${iconStyles[size]}`}>{iconComponent}</span>}
    </button>
  );
};

export default Button;
