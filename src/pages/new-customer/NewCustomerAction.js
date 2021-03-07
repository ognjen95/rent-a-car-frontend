import {
  newCustomerPending,
  newCustomerSuccess,
  newCustomerError,
} from './NewCustomerSlice';
import axios from 'axios';

export const createCustomer = (formData) => async (dispatch) => {
  dispatch(newCustomerPending());
  try {
    const result = await axios.post(
      'http://localhost:5000/api/customers',
      formData
    );
    console.log(formData);
    dispatch(newCustomerSuccess(result));
  } catch (error) {
    dispatch(newCustomerError());
  }
};
