type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'alert';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode; // Accepts text or any JSX as children
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-brand text-light hover:bg-accent',
  secondary: 'bg-light text-dark border border-dark hover:bg-darkAccent',
  alert: 'bg-red-500 text-white hover:bg-red-600',
};
export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${sizes[size]} ${variants[variant]} rounded transition-all duration-200 ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
