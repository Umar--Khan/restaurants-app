import { useState, useEffect, ChangeEvent, ReactElement } from 'react';

import {
  Restaurant,
  restaurants as restaurantsMock,
  getRestaurants,
} from 'service/__mocks__/restaurants';
import { useDebounce } from 'hooks/useDebounce';
import RestaurantCard from 'components/Restaurants/RestaurantCard/RestaurantCard';
import SearchInput from 'shared/SearchInput/SearchInput';
import Button from 'shared/Button/Button';
import { ReactComponent as SortingIcon } from 'assets/icons/sort-24.svg';
import FlexContainer from 'shared/Containers/FlexContainer';

const Restaurants = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>(restaurantsMock);

  // Stimulating a BE fetch request and sending a debounced value to save resources
  const { debouncedValue, isDebouncing } = useDebounce({ value: searchTerm });

  useEffect(() => {
    if (debouncedValue.length) {
      // Stimulating a successful GET request with seachTerm
      setRestaurants(getRestaurants(debouncedValue));
      // Here I would do some Data Logging/Analytics with the debouced value
    } else {
      // If theres no search term. I am resetting the restaurants list
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
    <div className='restaurants' data-testid='restaurants-wrapper'>
      <div className='restaurants__search-input'>
        <SearchInput
          searchTerm={searchTerm}
          handleInputChange={handleOnChange}
          // Can switch the search filter to stop auto searching the restaurants here. Using the formsubmit to do that
          handleFormSubmit={e => e.preventDefault()}
          submitButton={
            <Button id='search-restaurants-submit' type='submit'>
              Search
            </Button>
          }
          placeholder='Search for a restaurant'
          data-testid='search-restaurants-input'
          id='search-restaurants-input'
          aria-label='Search for a restaurant'
        />
      </div>
      {/* Would split the sorting into a seperate component */}
      <FlexContainer className='restaurants__meta_banner' spaceBetween>
        <p>25 open restaurants</p>
        <span className='restaurants__meta_banner__sort'>
          Sort by best match <SortingIcon />
        </span>
      </FlexContainer>
      {/* Would use a loading spinner here or restaurants skeleton component */}
      {isDebouncing ? (
        <div>Getting restaurants...</div>
      ) : (
        <ul className='restaurants__list' data-testid='restaurants__list'>
          {restaurants.map(restaurant => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Restaurants;
