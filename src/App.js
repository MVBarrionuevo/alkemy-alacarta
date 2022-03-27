import React from 'react';
import './style.css';
import logo from './img/logo.png';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { NotFoundScreen } from './screens/NotFoundScreen';
import { SearchScreen } from './screens/SearchScreen';
import { Footer } from './components/Footer';


function App() {

  const navigate = useNavigate();

  let isLoggedIn = false;
  if (localStorage.getItem('loginToken') != null) {
    isLoggedIn = true;
  }

  return (
    <React.Fragment>
      <div className="main-container">
        <div className='content-container'>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
                {!isLoggedIn && (
                  <li className="nav-item">
                    <Link to="/login">
                      <div className="nav-link">Login</div>
                    </Link>
                    <a className="nav-link"></a>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item">
                    <div className="nav-link" onClick={() => {
                      localStorage.removeItem('loginToken');
                      navigate('/login')
                    }}>Logout</div>
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
        </div>
        <div className='footer-container'>
          <Footer />
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
