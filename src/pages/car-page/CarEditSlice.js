import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  editedCar: {},
  error: false,
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
      state.editedCar = action.payload;
    },
    editCarError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
const { reducer, actions } = editCarSlice;

export const { editCarPending, editCarSucces, editCarError } = actions;

export default reducer;
