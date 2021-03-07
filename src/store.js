import { configureStore } from '@reduxjs/toolkit';
import carListReducer from './pages/dashboard/DashboardSlice';
import newCarReducer from './pages/new-car/NewCarSlice';
import carReducer from './pages/car-page/getCarSlice';
import editCarReducer from './pages/car-page/CarEditSlice';
import newCustomerReducer from './pages/new-customer/NewCustomerSlice';
import customersListReducer from './pages/customers-page/CustomersSlice';
import customerReducer from './pages/customer/CustomerSlice';
import editCustomerReducer from './pages/customer/EditCustomerSlice';
import rentSlice from './pages/rent-a-car/RentACarSlice';

const store = configureStore({
  reducer: {
    carList: carListReducer,
    newCar: newCarReducer,
    car: carReducer,
    editCar: editCarReducer,
    // customers
    newCustomer: newCustomerReducer,
    customersList: customersListReducer,
    customer: customerReducer,
    editedCustomer: editCustomerReducer,
    rentOrder: rentSlice,
  },
});

export default store;
