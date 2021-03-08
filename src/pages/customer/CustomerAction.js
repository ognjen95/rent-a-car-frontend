import {
  customerPending,
  customerSuccess,
  customerError,
  customerRentalsSuccess,
} from './CustomerSlice';
import {
  editCustomerPending,
  editCustomerSuccess,
  editCustomerError,
} from './EditCustomerSlice';
import axios from 'axios';

export const getCustomer = (id) => async (dispatch) => {
  dispatch(customerPending());

  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/customers/customer/${id}`
    );
    if (!data) return null;
    dispatch(customerSuccess(data.result));
    dispatch(customerRentalsSuccess(data.rentals));
  } catch (error) {
    console.log(error);
    dispatch(customerError(error.message));
  }
};

export const editCustomer = (formData, id) => async (dispatch) => {
  dispatch(editCustomerPending());

  try {
    const { data } = await axios.patch(
      `http://localhost:5000/api/customers/edit-customer/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!data.result) return;
    console.log(data.result);
    dispatch(editCustomerSuccess(data.result));
  } catch (error) {
    console.log(error.messagee);
    dispatch(editCustomerError(error.message));
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  dispatch(editCustomerPending());

  try {
    await axios.delete(`http://localhost:5000/api/customers/delete/${id}`);
  } catch (error) {
    console.log(error.messagee);
    dispatch(editCustomerError(error.message));
  }
};
