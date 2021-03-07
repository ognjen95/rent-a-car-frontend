import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  rentOrder: {},
  error: false,
  success: false,
};

const rentSlice = createSlice({
  name: 'rent',
  initialState,
  reducers: {
    rentOrderPending: (state) => {
      state.isLoading = true;
      state.success = false;
    },
    rentOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.rentOrder = action.payload;
    },
    rentOrderError: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    rentOrderReset: (state, action) => {
      state.isLoading = false;
      state.rentOrder = {};
      state.error = false;
      state.success = false;
    },
  },
});
const { reducer, actions } = rentSlice;

export const {
  rentOrderPending,
  rentOrderSuccess,
  rentOrderError,
  rentOrderReset,
} = actions;

export default reducer;
