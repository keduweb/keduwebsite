import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'; // 로그인 컴포넌트
import Dashboard from './components/Dashboard'; // 대시보드 컴포넌트

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
