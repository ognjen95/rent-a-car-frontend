import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import DefaultLayout from './components/default-layout/DefaultLayout';
import CarsPage from './pages/cars-page/CarsPage';
import CostumersPage from './pages/costumers-page/CostumersPage';
import NewCostumerPage from './pages/new-costumer/NewCostumerPage';
import NewCarPage from './pages/new-car/NewCarPage';
import Costumer from './pages/costumer/Costumer';
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
          <Route path="/costumers" exact component={CostumersPage} />
          <Route
            path="/costumers/new-costumer"
            exact
            component={NewCostumerPage}
          />
          <Route path="/cars/new-car" exact component={NewCarPage} />
          <Route path="/costumer/:id" exact component={Costumer} />
          <Route path="/car/:id" exact component={CarPage} />
          <Route path="/rent-a-car/:id" exact component={RentACarPage} />
        </DefaultLayout>
      </Switch>
    </Router>
  );
}

export default App;
