/*
Objective: Create a button component that accepts title and styles as an argument. Create multiple instances (sizes: small, medium, Large - shapes: rounded-sm, rounded-md, rounded-full) of the button component under the /landing paths

*/

import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  return (
    <button
      className={`bg-blue-500 text-white ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
