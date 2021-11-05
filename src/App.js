import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Pagess/Home/Home/Home';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navigation></Navigation>
    <Switch>

        <Route path=''>
              <Home></Home>
        </Route>


    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
