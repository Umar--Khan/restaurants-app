import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sanitizeString } from 'utils/sanitizeString';
import { RestaurantT, restaurants } from 'service/__mocks__';

export interface RestaurantsState {
  list: RestaurantT[];
}

export const initialState: RestaurantsState = {
  list: restaurants,
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    getRestaurants(state, action: PayloadAction<string>) {
      state.list = restaurants.filter(restaurant => {
        const sanitizedRestaurantName = sanitizeString(restaurant.name);
        const sanitizedPayload = sanitizeString(action.payload);

        return sanitizedRestaurantName.includes(sanitizedPayload);
      });
    },
    resetRestaurants(state) {
      state.list = restaurants;
    },
  },
});

export const { getRestaurants, resetRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
