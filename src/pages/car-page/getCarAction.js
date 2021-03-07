import { getCarPending, getCarSuccess, getCarError } from './getCarSlice';
import axios from 'axios';

export const getCar = (id) => async (dispatch) => {
  dispatch(getCarPending());

  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/cars/car/${id}`
    );
    !data.result
      ? dispatch(getCarError('No car found'))
      : dispatch(getCarSuccess(data.result));
  } catch (error) {
    dispatch(getCarError(error.message));
  }
};
