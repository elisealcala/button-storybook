import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ inverse: boolean | undefined }>`
  background-color: ${({ inverse }) => (inverse ? '#fff' : '#4650ca')};
  color: ${({ inverse }) => (!inverse ? '#fff' : '#4650ca')};
  &:hover {
    background-color: #252fa3;
    transition: all ease 0.3s;
    ${({ inverse }) =>
      inverse &&
      `
      color: #fff
    `}
  }
  border: 1px solid #4650ca;
`;

export interface ButtonTypes {
  onClick?(): void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label: string;
  small?: boolean;
  inverse?: boolean;
}

export const Button: React.FC<ButtonTypes> = ({
  disabled = false,
  label,
  onClick,
  type = 'button',
  small,
  inverse,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      inverse={inverse}
      className={`rounded shadow flex item-center justify-center p-2 ${
        small ? 'w-40' : 'w-full'
      }`}
    >
      <span className="tracking-wider">{label}</span>
    </StyledButton>
  );
};
