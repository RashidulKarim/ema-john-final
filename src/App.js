import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
export const nameContext = createContext('')

function App() {
  return (
    <nameContext.Provider value="rashed">
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
        <Route path='/orderplace'>
        <OrderPlace></OrderPlace>
        </Route>
        <Route path='*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>  
    </div>
    </nameContext.Provider>
  );
}

export default App;
