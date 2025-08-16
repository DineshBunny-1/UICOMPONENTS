import React from 'react';
import { clsx } from 'clsx';
import { InputFieldProps } from '../../types';

/**
 * A versatile input field component with multiple variants, sizes, and states.
 */
export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Enter text...',
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  className = '',
}) => {
  const baseClasses =
    'w-full transition-all duration-200 ease-in-out border rounded-md focus:outline-none focus:ring-2';

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const variantClasses = {
    filled: 'bg-gray-100 border-gray-100 focus:bg-white focus:ring-blue-500 focus:border-blue-500',
    outlined: 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500',
    ghost: 'bg-transparent border-transparent hover:bg-gray-100 focus:bg-white focus:ring-blue-500 focus:border-blue-500',
  };
  
  const stateClasses = {
    disabled: 'disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500',
    invalid: 'border-red-500 focus:ring-red-500 text-red-700 placeholder-red-400',
  };

  const combinedClasses = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    { [stateClasses.invalid]: invalid && !disabled },
    stateClasses.disabled,
    className
  );

  const id = React.useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        className={combinedClasses}
      />
      {helperText && !errorMessage && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {errorMessage && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};