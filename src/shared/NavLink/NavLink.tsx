import { HTMLAttributes, PropsWithChildren } from 'react';

import TextLink from 'shared/TextLink/TextLink';

interface NavlinkProps extends HTMLAttributes<HTMLAnchorElement> {
  text: string;
  path: string;
  icon?: string;
  alt?: string;
}

const NavLink = ({
  text,
  path,
  icon,
  alt,
  ...rest
}: PropsWithChildren<NavlinkProps>) => (
  <TextLink className='navLink' href={path} {...rest}>
    {icon && <img className='navLink--icon' src={icon} alt={alt} />}
    {text}
  </TextLink>
);

export default NavLink;
