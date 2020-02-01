import * as React from 'react';

const Button = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded flex item-center justify-center bg-pink-dark font-avenir p-2 w-full"
    >
      <span className="text-white">{label}</span>
    </button>
  );
};

export default Button;
