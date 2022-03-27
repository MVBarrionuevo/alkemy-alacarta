import React from 'react';
import './style.css';
import logo from './img/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { SearchScreen } from './screens/SearchScreen';


function App() {

  let isLoggedIn = false;
  if (localStorage.getItem('loginToken') != null) {
    isLoggedIn = true;
  }

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img className="img-brand" src={logo} alt="logo-hotel" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search">
                <div className="nav-link">Search</div>
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
      </nav>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
