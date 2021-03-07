import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DefaultLayout from './components/default-layout/DefaultLayout';
import CarsPage from './pages/cars-page/CarsPage';
import CustomersPage from './pages/customers-page/CustomersPage';
import NewCustomerPage from './pages/new-customer/NewCustomerPage';
import NewCarPage from './pages/new-car/NewCarPage';
import Customer from './pages/customer/Customer';
import CarPage from './pages/car-page/CarPage';
import RentACarPage from './pages/rent-a-car/RentACarPage';
function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <DefaultLayout>
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/cars" exact component={CarsPage} />
          <Route path="/customers" exact component={CustomersPage} />
          <Route
            path="/customers/new-customer"
            exact
            component={NewCustomerPage}
          />
          <Route path="/cars/new-car" exact component={NewCarPage} />
          <Route path="/customer/:id" exact component={Customer} />
          <Route path="/car/:id" exact component={CarPage} />
          <Route path="/rent-a-car/:id" exact component={RentACarPage} />
        </DefaultLayout>
      </Switch>
    </Router>
  );
}

export default App;
