import { configureStore as configureRTKStore } from '@reduxjs/toolkit';

import restaurantsReducer from 'features/restaurantsSearch/restaurantsSearchSlice';
import userReducer from 'features/user/userSlice';
import cuisinesReducer from 'features/cuisines/cuisinesSlice';

export const configureStore = (preloadedState = {}) =>
  configureRTKStore({
    reducer: {
      restaurants: restaurantsReducer,
      user: userReducer,
      cuisines: cuisinesReducer,
    },
    preloadedState,
  });

export const store = configureStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
