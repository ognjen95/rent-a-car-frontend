import {
  getCarListPending,
  getCarListSuccess,
  getCarListError,
  searchCars,
} from './DashboardSlice';
import axios from 'axios';

export const getCarList = () => async (dispatch) => {
  dispatch(getCarListPending());

  try {
    const { data } = await axios.get('http://localhost:5000/api/cars');
    dispatch(getCarListSuccess(data.result));
  } catch (error) {
    dispatch(getCarListError(error.message));
  }
};

export const searchCarList = (str) => async (dispatch) => {
  dispatch(searchCars(str));
};
