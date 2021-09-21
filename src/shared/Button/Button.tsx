import { PropsWithChildren, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  color?: 'primary';
  variant?: 'text' | 'filled';
  type?: 'submit' | 'button' | 'reset';
  fullWidth?: boolean;
  ariaLabel?: string;
}

const Button = ({
  onClick,
  id,
  color = 'primary',
  fullWidth = false,
  variant = 'text',
  type = 'button',
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={classNames('btn', `btn--${color}`, {
      'btn--full-width': fullWidth,
    })}
    onClick={onClick}
    type={type}
    id={id}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
