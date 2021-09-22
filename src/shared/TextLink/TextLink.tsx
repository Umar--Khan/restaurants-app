import { HTMLAttributes, PropsWithChildren } from 'react';

interface TextLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}

const TextLink = ({
  children,
  href,
  className,
  ...rest
}: PropsWithChildren<TextLinkProps>) => (
  <a
    className={`text-link ${className}`}
    href={href}
    rel='noreferrer'
    target='_blank'
    {...rest}
  >
    {children}
  </a>
);

export default TextLink;
