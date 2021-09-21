import { useState, useEffect, ChangeEvent, ReactElement } from 'react';

import {
  Restaurant,
  restaurants as restaurantsMock,
  getRestaurants,
} from 'service/__mocks__/restaurants';

import { useDebounce } from 'hooks/useDebounce';

import RestaurantCard from 'components/Restaurants/RestaurantCard';

const Restaurants = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsMock);

  const { debouncedValue } = useDebounce({ value: searchTerm });

  useEffect(() => {
    if (debouncedValue.length) {
      setRestaurants(getRestaurants(debouncedValue));
    } else {
      setRestaurants(restaurantsMock);
    }
  }, [debouncedValue]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setSearchTerm(value);
  };

  return (
    <>
      <form role='search' onSubmit={e => e.preventDefault()}>
        <input
          type='search'
          id='restaurant-search'
          aria-label='Search through local restaurants'
          placeholder='Search for a restaurant'
          value={searchTerm}
          onChange={handleOnChange}
          required
        />
      </form>
      <ul>
        {restaurants.map(restaurant => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </ul>
    </>
  );
};

export default Restaurants;
