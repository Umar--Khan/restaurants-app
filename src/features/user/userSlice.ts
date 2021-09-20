import { createSlice } from '@reduxjs/toolkit';

import { user, User } from 'service/__mocks__';

const initialState: User = user;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
