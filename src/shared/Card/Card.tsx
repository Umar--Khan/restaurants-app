import { PropsWithChildren, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({
  children,
  className,
  ...rest
}: PropsWithChildren<CardProps>) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
