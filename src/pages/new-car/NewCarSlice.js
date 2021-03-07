import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  car: {},
  error: false,
};

const newCarSlice = createSlice({
  name: 'newCar',
  initialState,
  reducers: {
    newCarPending: (state, action) => {
      state.isLoading = true;
    },
    newCarSuccess: (state, action) => {
      state.isLoading = false;
      state.car = action.payload;
    },
    newCarError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
const { reducer, actions } = newCarSlice;

export const { newCarPending, newCarSuccess, newCarError } = actions;

export default reducer;
