import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  customer: {},
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
      state.customer = action.payload;
    },
    newCustomerError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = newCustomer;

export const {
  newCustomerPending,
  newCustomerSuccess,
  newCustomerError,
} = actions;

export default reducer;
