import { ReactElement } from 'react';

import Restaurants from 'features/restaurants/Restaurants';
import RestaurantsList from 'features/restaurantsList/RestaurantsList';

const App = (): ReactElement => (
  <>
    <Restaurants />
    <RestaurantsList />
  </>
);

export default App;
