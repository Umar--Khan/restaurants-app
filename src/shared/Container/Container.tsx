import { PropsWithChildren, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container = ({
  children,
  className,
}: PropsWithChildren<ContainerProps>) => (
  <div className={`container ${className}`}>{children}</div>
);

export default Container;
