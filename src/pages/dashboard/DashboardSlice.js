import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  carList: [],
  searchList: [],
  error: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    getCarListPending: (state, action) => {
      state.isLoading = true;
    },
    getCarListSuccess: (state, action) => {
      state.isLoading = false;
      state.carList = action.payload;
      state.searchList = action.payload;
    },
    getCarListError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    searchCars: (state, action) => {
      state.searchList = state.carList.filter((car) => {
        if (!action.payload) return car;

        return (
          car.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
          car.model.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
    },
  },
});

const { reducer, actions } = dashboardSlice;

export const {
  getCarListPending,
  getCarListSuccess,
  getCarListError,
  searchCars,
} = actions;

export default reducer;
