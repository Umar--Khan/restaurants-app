import { ReactElement } from 'react';

import { UserProvider } from 'context/userContext';

import AppLayout from 'appLayout/AppLayout';
import Restaurants from 'components/Restaurants/Restaurants';
import AddressCard from 'components/AddressCard/AddressCard';
import AllCuisines from 'components/AllCuisines/AllCuisines';
import GridContainer from 'shared/Containers/GridContainer';

const App = (): ReactElement => (
  <UserProvider>
    <AppLayout>
      {/* Usually would add routes here and split by views design pattern */}
      <GridContainer>
        <div>
          <AddressCard />
          <AllCuisines />
        </div>
        <Restaurants />
      </GridContainer>
    </AppLayout>
  </UserProvider>
);

export default App;
