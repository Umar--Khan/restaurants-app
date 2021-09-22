import { PropsWithChildren, ReactNode } from 'react';

const Main = ({ children }: PropsWithChildren<ReactNode>) => (
  <main>{children}</main>
);

export default Main;
