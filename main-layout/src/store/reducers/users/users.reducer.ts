import { createSlice } from '@reduxjs/toolkit';
import { UserSliceI } from './types';

const initialState: UserSliceI = {
  user: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
