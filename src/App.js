import SignUp from "./compoent/SignUp"
import Login from "./compoent/Login"
import Home from "./compoent/Home"
import Account from "./compoent/Account";
import ProtectedRoute from "./compoent/ProtectedRoute";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";


import './App.css';


const App=()=>(
  <BrowserRouter>
  <Switch>
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/Account" component={Account} />
  </Switch>
  
  </BrowserRouter>
  
  );


export default App;
