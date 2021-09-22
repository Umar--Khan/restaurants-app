import { PropsWithChildren, HTMLAttributes } from 'react';
import classNames from 'classnames';

interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  spaceBetween?: boolean;
}

const FlexContainer = ({
  children,
  className,
  spaceBetween,
  ...rest
}: PropsWithChildren<FlexContainerProps>) => (
  <div
    className={classNames('flex-container', `${className}`, {
      'flex-container--space-between': spaceBetween,
    })}
    {...rest}
  >
    {children}
  </div>
);

export default FlexContainer;
