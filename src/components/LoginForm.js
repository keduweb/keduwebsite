import React, { useState } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [nickname, setNickname] = useState('');
  const [yaoongCode, setYaoongCode] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (yaoongCode === '20240905' && nickname.length <= 10) {
      onLoginSuccess();
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="login-container">
      <h2>야옹이랑놀래?</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="한영 조합 10자 이내"
            maxLength="10"
          />
          <small>한영 조합 10자 이내</small>
        </div>
        <div className="form-group">
          <label>야옹이 코드</label>
          <input
            type="password"
            value={yaoongCode}
            onChange={(e) => setYaoongCode(e.target.value)}
            placeholder="야옹이 코드를 입력하세요"
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginForm;
