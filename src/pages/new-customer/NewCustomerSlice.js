import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  customer: {},
  success: false,
  error: false,
};

const newCustomer = createSlice({
  name: 'newCustomer',
  initialState,
  reducers: {
    newCustomerPending: (state) => {
      state.isLoading = true;
    },
    newCustomerSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.customer = action.payload;
    },
    newCustomerError: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    newCustomerReset: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.customer = {};
      state.success = false;
      state.error = '';
    },
  },
});

const { reducer, actions } = newCustomer;

export const {
  newCustomerPending,
  newCustomerSuccess,
  newCustomerError,
  newCustomerReset,
} = actions;

export default reducer;
