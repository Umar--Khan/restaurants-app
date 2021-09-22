import { PropsWithChildren, ReactNode } from 'react';

import Main from 'appLayout/Main/Main';
import Header from 'appLayout/Header/Header';

const AppLayout = ({ children }: PropsWithChildren<ReactNode>) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default AppLayout;
