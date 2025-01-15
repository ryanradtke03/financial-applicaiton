import React, { forwardRef } from 'react';

type InputProps = {
  label?: string; // Optional label
  type?: 'text' | 'email' | 'password' | 'number'; // Input types
  placeholder?: string; // Placeholder text
  value?: string; // Current value of the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for changes
  error?: string; // Optional error message
  disabled?: boolean; // Disabled state
  size?: 'sm' | 'md' | 'lg'; // Size variations
};

const sizes: Record<NonNullable<InputProps['size']>, string> = {
  sm: 'p-2 text-sm',
  md: 'p-3 text-base',
  lg: 'p-4 text-lg',
};

// Use forwardRef to handle refs from react-hook-form
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      placeholder = '',
      value,
      onChange,
      error,
      disabled = false,
      size = 'md',
      ...rest // For any additional props
    },
    ref, // Ref forwarded from react-hook-form
  ) => {
    return (
      <div className="mb-4">
        {label && <label className="text-darkAccent mb-1 block">{label}</label>}
        <input
          ref={ref} // Pass the forwarded ref here
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`focus:ring-brand text-darkAccent w-full rounded border focus:outline-none focus:ring-2 ${
            disabled ? 'cursor-not-allowed opacity-50' : ''
          } ${sizes[size]} ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
          }`}
          {...rest} // Forward any additional props
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

// Add display name for debugging purposes
Input.displayName = 'Input';
