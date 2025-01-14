import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import FindAccount from './components/FindAccount';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  const [currentTab, setCurrentTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]); // 기존 사용자 목록

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSignup = (formData) => {
    setUsers((prevUsers) => [...prevUsers, formData]); // 회원가입 시 사용자 정보 저장
    setCurrentTab('login');
  };

  const renderTab = () => {
    if (isLoggedIn) {
      return <Dashboard />;
    }

    switch (currentTab) {
      case 'login':
        return (
          <LoginForm
            onSwitchTab={setCurrentTab}
            onLoginSuccess={handleLoginSuccess}
            users={users} // 사용자 목록 전달
          />
        );
      case 'findAccount':
        return <FindAccount onSwitchTab={setCurrentTab} />;
      case 'signup':
        return (
          <Signup
            onSwitchTab={setCurrentTab}
            onSignup={handleSignup}
            existingUsers={users.map((user) => user.username)} // 기존 사용자 아이디만 전달
          />
        );
      default:
        return (
          <LoginForm
            onSwitchTab={setCurrentTab}
            onLoginSuccess={handleLoginSuccess}
            users={users} // 사용자 목록 전달
          />
        );
    }
  };

  return <div className="App">{renderTab()}</div>;
}

export default App;
