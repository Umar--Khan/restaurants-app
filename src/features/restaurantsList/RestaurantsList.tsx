import { ReactElement } from 'react';

import { useAppSelector } from 'hooks';

const RestaurantsList = (): ReactElement => {
  const restaurantsList = useAppSelector(({ restaurants }) => restaurants.list);

  const renderRestaurants = () =>
    restaurantsList.map(restaurant => <li>{restaurant.name}</li>);

  return <ul>{renderRestaurants()}</ul>;
};

export default RestaurantsList;
