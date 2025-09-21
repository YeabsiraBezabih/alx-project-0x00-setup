/*
Objective: Create a button component that accepts title and styles as an argument. Create multiple instances (sizes: small, medium, Large - shapes: rounded-sm, rounded-md, rounded-full) of the button component under the /landing paths

*/

import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, size, shape, onClick }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-1.5 text-base',
    large: 'px-4 py-2 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
