type AvatarProps = {
  src: string;
  size?: '1' | '2' | '3' | '4';
  rounded?: 'xl' | 'full';
};

const Avatar = ({ src, size = '1', rounded = 'xl' }: AvatarProps) => {
  const sizeStyles = {
    '1': 'h-24 w-24',
    '2': 'h-20 w-20',
    '3': 'h-16 w-16',
    '4': 'h-14 w-14',
  };

  const roundedStyles = {
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return <img src={src} alt="Аватар" className={`${sizeStyles[size]} ${roundedStyles[rounded]} inline-block`} />;
};

export default Avatar;
