import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  rentOrder: {},
  error: false,
};

const rentSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    rentOrderPending: (state) => {
      state.isLoading = true;
    },
    rentOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.rentOrder = action.payload;
    },
    rentOrderError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
const { reducer, actions } = rentSlice;

export const { rentOrderPending, rentOrderSuccess, rentOrderError } = actions;

export default reducer;
