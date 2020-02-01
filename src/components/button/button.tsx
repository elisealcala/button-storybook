import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4650ca;
  &:hover {
    background-color: #252fa3;
    transition: all ease 0.3s;
  }
`;

type ButtonTypes = {
  onClick?(): void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label: string;
  small?: boolean;
};

const Button: FC<ButtonTypes> = ({
  disabled = false,
  label,
  onClick,
  type = 'button',
  small,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded shadow flex item-center justify-center p-2 ${
        small ? 'w-40' : 'w-full'
      }`}
    >
      <span className="text-white tracking-wider">{label}</span>
    </StyledButton>
  );
};

export default Button;
