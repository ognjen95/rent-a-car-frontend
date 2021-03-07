import {
  customersPending,
  customersSuccess,
  customersError,
} from './CustomersSlice';

import axios from 'axios';

export const getCustomersList = () => async (dispatch) => {
  dispatch(customersPending());

  try {
    const { data } = await axios.get('http://localhost:5000/api/customers');
    dispatch(customersSuccess(data.result));
  } catch (error) {
    dispatch(customersError(error.message));
  }
};
