import { FC } from 'react';
import { ButtonProps, ButtonVariant } from './Button.types';

export const Button: FC<ButtonProps> = ({ variant = 'primary', ...rest }) => {
  const colorMap: Record<ButtonVariant, string> = {
    primary: 'red',
    secondary: 'blue',
  };

  return <button style={{ backgroundColor: colorMap[variant] }} {...rest} />;
};
