import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sanitizeString } from 'utils/sanitizeString';
import { Restaurant, restaurants } from 'service/__mocks__';

interface RestaurantsSearchState {
  list: Restaurant[];
  openRestaurants: number;
}

const initialState: RestaurantsSearchState = {
  list: restaurants,
  openRestaurants: 25,
};

const restaurantsSearchSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getRestaurants(state, action: PayloadAction<string>) {
      state.list = restaurants.filter(restaurant => {
        const sanitizedRestaurantName = sanitizeString(restaurant.name);
        const sanitizedPayload = sanitizeString(action.payload);

        return (
          sanitizedRestaurantName
            .split(' ')
            .some(val => sanitizedPayload.split(' ').includes(val)) ||
          sanitizedRestaurantName.includes(sanitizedPayload)
        );
      });
    },
    resetRestaurants(state) {
      state.list = restaurants;
    },
  },
});

export const { getRestaurants, resetRestaurants } =
  restaurantsSearchSlice.actions;
export default restaurantsSearchSlice.reducer;
