import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  let admin = false;

  // Safely retrieve and parse user data
  const persistedData = localStorage.getItem("persist:root");
  if (persistedData) {
    try {
      const user = JSON.parse(JSON.parse(persistedData).user);
      admin = user?.currentUser?.isAdmin || false;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {admin && (
          <>
            {" "}
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/" component={Home} />
              <Route path="/users" component={UserList} />
              <Route path="/user/:userId" component={User} />
              <Route path="/newUser" component={NewUser} />
              <Route path="/products" component={ProductList} />
              <Route path="/product/:productId" component={Product} />
              <Route path="/newproduct" component={NewProduct} />
            </div>{" "}
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
