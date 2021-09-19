import { configureStore as configureRTKStore } from '@reduxjs/toolkit';

import restaurantsReducer from 'features/restaurants/restaurantsSlice';

export const configureStore = (preloadedState = {}) =>
  configureRTKStore({
    reducer: {
      restaurants: restaurantsReducer,
    },
    preloadedState,
  });

export const store = configureStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
