import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import LoginPage from './pages/Login/LoginPage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <App /> : <LoginPage onLogin={handleLogin} />;
};

ReactDOM.render(<Index />, document.getElementById('root'));
