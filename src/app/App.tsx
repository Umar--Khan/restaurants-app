import { ReactElement } from 'react';

import { UserProvider } from 'context/userContext';

import Restaurants from 'components/Restaurants/Restaurants';
import AppLayout from 'appLayout/AppLayout';
import Container from 'shared/Container/Container';

const App = (): ReactElement => (
  <UserProvider>
    <AppLayout>
      {/* Usually would add routes here and split by views design pattern */}
      <Container>
        <Restaurants />
      </Container>
    </AppLayout>
  </UserProvider>
);

export default App;
