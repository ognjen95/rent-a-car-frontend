import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  editedCar: {},
  error: false,
  success: false,
};

const editCarSlice = createSlice({
  name: 'editCar',
  initialState,
  reducers: {
    editCarPending: (state) => {
      state.isLoading = true;
    },
    editCarSucces: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.editedCar = action.payload;
    },
    editCarError: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    editCarReset: (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = '';
      state.editedCar = {};
    },
  },
});
const { reducer, actions } = editCarSlice;

export const {
  editCarPending,
  editCarSucces,
  editCarError,
  editCarReset,
} = actions;

export default reducer;
