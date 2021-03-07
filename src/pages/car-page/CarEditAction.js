import { editCarPending, editCarSucces, editCarError } from './CarEditSlice';
import axios from 'axios';

export const editCar = (formData, id) => async (dispatch) => {
  dispatch(editCarPending());

  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/cars/edit-car/${id}`,
      formData
    );

    console.log(data);

    dispatch(editCarSucces(data.result));
  } catch (error) {
    dispatch(editCarError(error.message));
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    if (!id) return;
    const { data } = await axios.delete(
      `http://localhost:5000/api/cars/delete-car/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};
