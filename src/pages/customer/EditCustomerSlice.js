import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  editedCustomer: {},
  error: false,
};

const customerSlice = createSlice({
  name: 'editCustomer',
  initialState,
  reducers: {
    editCustomerPending: (state, action) => {
      state.isLoading = true;
    },
    editCustomerSuccess: (state, action) => {
      state.isLoading = false;
      state.customer = action.payload;
    },
    editCustomerError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = customerSlice;

export const {
  editCustomerPending,
  editCustomerSuccess,
  editCustomerError,
} = actions;

export default reducer;
