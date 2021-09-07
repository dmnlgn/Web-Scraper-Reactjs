import './App.css';
import Home from './components/Home';
import Tshirts from "./components/pages/fashion/men/clothes/tshirts/fragments/ShopHM";
import TshirtsTwo from "./components/pages/fashion/men/clothes/tshirts/fragments/ShopAnsw";
 
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Navigation} from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/fashion/men/clothes/tshirts/HM" component={Tshirts} exact/>
        <Route path="/fashion/men/clothes/tshirts/Answear" component={TshirtsTwo} exact/>
    </Switch>
    </Router>
  );
}

export default App;
