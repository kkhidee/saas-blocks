import { ReactNode } from 'react';

type TagColor = 'green' | 'indigo' | 'red' | 'blue' | 'teal' | 'orange' | 'yellow' | 'pink' | 'default' | 'outlined';

type TagProps = {
  children: ReactNode;
  color?: TagColor;
  rounded?: 'full' | 'md';
  size?: 'xs' | 'sm' | 'base';
  iconComponent?: ReactNode;
};

const Tag = ({ children, color = 'default', rounded = 'full', size = 'sm', iconComponent }: TagProps) => {
  const colorStyles = {
    green: 'border-green-200 bg-green-200 text-green-600',
    indigo: 'border-indigo-200 bg-indigo-200 text-indigo-600',
    red: 'border-red-200 bg-red-200 text-red-600',
    blue: 'border-blue-200 bg-blue-200 text-blue-600',
    teal: 'border-teal-200 bg-teal-200 text-teal-600',
    orange: 'border-orange-200 bg-orange-200 text-orange-600',
    yellow: 'border-yellow-200 bg-yellow-200 text-yellow-600',
    pink: 'border-pink-200 bg-pink-200 text-pink-600',
    default: 'border-muted-1 bg-muted-1 text-heading',
    outlined: 'border-muted-1 bg-transparent text-heading',
  };

  const roundedStyles = {
    full: 'rounded-full',
    md: 'rounded-md',
  };

  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
  };

  const iconSizeStyles = {
    xs: 'h-4 w-4',
    sm: 'h-5 w-5',
    base: 'h-6 w-6',
  };

  return (
    <span
      className={`${colorStyles[color]} ${roundedStyles[rounded]} ${sizeStyles[size]} inline-flex items-center border-2 px-2 py-1 font-semibold shadow-sm`}
    >
      {iconComponent && <span className={`${iconSizeStyles[size]} mr-1`}>{iconComponent}</span>}
      {children}
    </span>
  );
};

export default Tag;
