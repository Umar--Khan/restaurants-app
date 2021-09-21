import { ReactElement } from 'react';

import { UserProvider } from 'context/userContext';

import Restaurants from 'components/Restaurants/Restaurants';

const App = (): ReactElement => (
  <UserProvider>
    <Restaurants />
  </UserProvider>
);

export default App;
