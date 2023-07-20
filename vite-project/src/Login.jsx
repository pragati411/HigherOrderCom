import React from 'react';
import {  useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const logMeIn = {
      userLoggedIn : true,
    }
    
    

    
    localStorage.setItem('user', JSON.stringify(logMeIn));
    const log = localStorage.getItem('user');
    const logCheck = JSON.parse(log);
    const {userLoggedIn} = logCheck;
    if(userLoggedIn){
      navigate('/home');
    }

    

    
  };

  return (
    <div>
      <h1>Login Component</h1>
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default LoginComponent;
