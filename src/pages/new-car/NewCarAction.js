import { newCarPending, newCarSuccess, newCarError } from './NewCarSlice';
import axios from 'axios';

export const addNewCar = (formData) => async (dispatch) => {
  dispatch(newCarPending());

  try {
    const { data } = await axios.post(
      'http://localhost:5000/api/cars/create-new-car',
      formData
    );
    // const res = await axios.post(
    //   'http://localhost:5000/single',
    //   {
    //     imgUrl: formData.imgUrl,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   }
    // );

    dispatch(newCarSuccess(data.result));
  } catch (error) {
    dispatch(newCarError(error.message));
  }
};
