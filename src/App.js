import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Detail from './components/Detail';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Signup from './components/Signup';



function App() {
  return (
    < >
      
      <Router>
      <Navbar/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/book/:book" component={Detail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
