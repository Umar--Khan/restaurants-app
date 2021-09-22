import { PropsWithChildren, HTMLAttributes } from 'react';

interface GridContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// I would probably make the gridGap a prop. Utilising styled-components

const GridContainer = ({
  children,
  className,
  ...rest
}: PropsWithChildren<GridContainerProps>) => (
  <div className={`grid-container ${className}`} {...rest}>
    {children}
  </div>
);

export default GridContainer;
