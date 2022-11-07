import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import NotFound from './components/notfound';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to = "/">Home</Link></li>
          <li> <Link to = "/login">Login</Link></li>
          <li> <Link to = "/signup">Signup</Link></li>
        </ul>
      </nav>


    <Routes>
      <Route
      Path ="/"
      element={<Home />}
      errorElement = {<NotFound />}
    />
      <Route
      Path ="/login"
      element={<Login />}
      errorElement = {<NotFound />}
    />
      <Route
      Path ="/signup"
      element={<Signup />}
      errorElement = {<NotFound />}
    />

    </Routes>



      {/* <Login/> */}
    </div>
  );
}

export default App;
