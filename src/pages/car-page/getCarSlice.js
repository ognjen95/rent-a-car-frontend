import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  car: {},
  error: false,
};

const getCar = createSlice({
  name: 'getCar',
  initialState,
  reducers: {
    getCarPending: (state, action) => {
      state.isLoading = true;
    },
    getCarSuccess: (state, action) => {
      state.isLoading = false;
      state.car = action.payload;
    },
    getCarError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
const { reducer, actions } = getCar;

export const { getCarPending, getCarSuccess, getCarError } = actions;

export default reducer;
