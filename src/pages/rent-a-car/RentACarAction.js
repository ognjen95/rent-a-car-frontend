import {
  rentOrderPending,
  rentOrderSuccess,
  rentOrderError,
} from './RentACarSlice';
import axios from 'axios';

export const rentCar = (formData, id) => async (dispatch) => {
  dispatch(rentOrderPending());

  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/rent-a-car/${id}`,
      formData,
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    console.log(data.result);
    if (data.result) return dispatch(rentOrderSuccess(data.result));
  } catch (error) {
    dispatch(rentOrderError());
  }
};
