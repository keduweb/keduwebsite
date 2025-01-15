import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const renderContent = () => {
    if (isLoggedIn) {
      return <Dashboard />;
    }

    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
