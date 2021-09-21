import { ReactElement } from 'react';

import { UserProvider } from 'context/userContext';

import Restaurants from 'components/Restaurants/Restaurants';
import Button from 'shared/Button/Button';

const App = (): ReactElement => (
  <UserProvider>
    <>
      <Restaurants />
      <Button
        id='button'
        onClick={() => {
          console.log();
        }}
      >
        Search
      </Button>
    </>
  </UserProvider>
);

export default App;
