import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [nickname, setNickname] = useState('');
  const [yaoongCode, setYaoongCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const nicknameRegex = /^[a-zA-Z가-힣]{1,10}$/;
    const validYaoongCode = '20240905';

    // Validate Yaoong Code
    if (yaoongCode !== validYaoongCode) {
      setErrorMessage('야옹이 코드가 일치하지 않습니다.');
      return;
    }

    // Validate Nickname
    if (!nicknameRegex.test(nickname)) {
      setErrorMessage('닉네임은 한영 조합 10자 이내여야 합니다.');
      return;
    }

    // Successful login
    setErrorMessage('');
    onLoginSuccess();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>야옹이랑놀래?</h2>
        <div className="form-group">
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength="10"
            required
          />
          <small>한영 조합 10자 이내</small>
        </div>
        <div className="form-group">
          <label>야옹이 코드</label>
          <input
            type="password"
            value={yaoongCode}
            onChange={(e) => setYaoongCode(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
        <button type="submit" className="login-button">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
