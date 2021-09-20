import { ReactElement } from 'react';

import Restaurants from 'features/restaurantsSearch/RestaurantsSearch';
import RestaurantsList from 'features/restaurantsList/RestaurantsList';

const App = (): ReactElement => (
  <>
    <Restaurants />
    <RestaurantsList />
  </>
);

export default App;
