import { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import { useAppDispatch, useDebounce } from 'hooks';
import {
  getRestaurants,
  resetRestaurants,
} from 'features/restaurants/restaurantsSlice';

const Restaurants = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const { debouncedValue: searchQuery } = useDebounce({ value: searchTerm });

  useEffect(() => {
    if (searchQuery.length) {
      dispatch(getRestaurants(searchQuery));
    } else {
      dispatch(resetRestaurants());
    }
  }, [searchQuery, dispatch]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setSearchTerm(value);
  };

  return (
    <form role='search'>
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
  );
};

export default Restaurants;
