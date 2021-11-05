import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

import ProtectedRoute from "../src/components/utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <>
          <Topbar />
          <div className='container'>
            <Sidebar />
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/users' component={UserList} />
            <ProtectedRoute exact path='/user/:userId' component={User} />
            <ProtectedRoute exact path='/newUser' component={NewUser} />
            <ProtectedRoute exact path='/products' component={ProductList} />
            <ProtectedRoute
              exact
              path='/product/:productId'
              component={Product}
            />
            <ProtectedRoute exact path='/newproduct' component={NewProduct} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
