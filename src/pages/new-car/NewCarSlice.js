import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  car: {},
  error: false,
  success: false,
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
      state.success = true;
      state.car = action.payload;
    },
    newCarError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    newCarReset: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});
const { reducer, actions } = newCarSlice;

export const {
  newCarPending,
  newCarSuccess,
  newCarError,
  newCarReset,
} = actions;

export default reducer;
