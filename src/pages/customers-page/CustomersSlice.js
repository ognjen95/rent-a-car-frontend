import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  customers: [],
  error: false,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    customersPending: (state, action) => {
      state.isLoading = true;
    },
    customersSuccess: (state, action) => {
      state.isLoading = false;
      state.customers = action.payload;
    },
    customersError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = customersSlice;

export const { customersPending, customersSuccess, customersError } = actions;

export default reducer;
