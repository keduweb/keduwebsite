import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onSwitchTab, onLoginSuccess, users }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      alert('로그인 성공!');
      onLoginSuccess();
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <div className="form-group">
          <label>아이디</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요"
            required
          />
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
        <div className="tabs">
          <span onClick={() => onSwitchTab('findAccount')} className="tab-link">
            아이디 찾기
          </span>{' '}
          |{' '}
          <span onClick={() => onSwitchTab('findAccount')} className="tab-link">
            비밀번호 찾기
          </span>{' '}
          |{' '}
          <span onClick={() => onSwitchTab('signup')} className="tab-link">
            회원가입
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
