import { createSlice } from '@reduxjs/toolkit';

import { cuisines, Cuisine } from 'service/__mocks__';

const initialState: Cuisine[] = [...cuisines];

const cuisinesSlice = createSlice({
  name: 'cuisines',
  initialState,
  reducers: {},
});

// export const {} = cuisinesSlice.actions;
export default cuisinesSlice.reducer;
