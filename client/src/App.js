import './App.css';
import Home from './components/Home';
import Tshirts from "./components/pages/fashion/men/clothes/tshirts/ShopHM";
 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/fashion/men/clothes/tshirts" component={Tshirts} exact/>
    </Switch>
    </Router>
  );
}

export default App;
