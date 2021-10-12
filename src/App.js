import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Register from './components/Register/Register';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Shop></Shop>
        </Route>
        <Route path='/shop'>
        <Shop></Shop>
        </Route>
        <Route path='/review'>
        <Review></Review>
        </Route>
        <Route path='/inventory'>
        <Inventory></Inventory>
        </Route>
        <PrivateRoute path='/orderplace'>
        <OrderPlace></OrderPlace>
        </PrivateRoute>
        <Route path='/login'>
        <Login></Login>
        </Route>
        <Route path='/register'>
        <Register></Register>
        </Route>
        <Route path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>  
    </div>
    </AuthProvider>
  );
}

export default App;
