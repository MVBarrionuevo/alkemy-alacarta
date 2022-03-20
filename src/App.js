import React from 'react';
import './style.css';
import { Routes, Route, Link } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { Menu } from './components/Menu';


function App() {

  let isLoggedIn = false;
  if (localStorage.getItem('loginToken') != null) {
    isLoggedIn = true;
  }

  return (
    <React.Fragment>
      <div className="header card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link active">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes">
                <div className="nav-link">Menu</div>
              </Link>
            </li>

            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/login">
                  <div className="nav-link">Login</div>
                </Link>
                <a className="nav-link"></a>
              </li>
            )}


          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/recipes" element={<Menu />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
