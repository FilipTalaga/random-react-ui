import { PropsWithChildren } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = PropsWithChildren<{
  variant: ButtonVariant;
}>;
