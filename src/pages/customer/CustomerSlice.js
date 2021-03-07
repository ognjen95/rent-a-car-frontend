import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  customer: {},
  customerRentals: [],
  error: false,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    customerPending: (state, action) => {
      state.isLoading = true;
    },
    customerSuccess: (state, action) => {
      state.isLoading = false;
      state.customer = action.payload;
    },
    customerError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    customerRentalsSuccess: (state, action) => {
      state.customerRentals = action.payload;
    },
  },
});

const { reducer, actions } = customerSlice;

export const {
  customerPending,
  customerSuccess,
  customerError,
  customerRentalsSuccess,
} = actions;

export default reducer;
