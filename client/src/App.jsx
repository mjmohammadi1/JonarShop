import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Success from "./pages/Success/Success";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/utils/ProtectedRoute";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products/:category'>
          <ProductList />
        </Route>
        <Route exact path='/product/:id'>
          <Product />
        </Route>
        <ProtectedRoute exact path='/cart' component={Cart} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <ProtectedRoute exact path='/success' component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
