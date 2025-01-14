import React from 'react';

function FindAccount({ onSwitchTab }) {
  return (
    <div className="find-account-container">
      <h2>아이디/비밀번호 찾기</h2>
      <p>아이디 또는 비밀번호를 찾는 기능을 추가하세요.</p>
      <button onClick={() => onSwitchTab('login')}>로그인 화면으로 돌아가기</button>
    </div>
  );
}

export default FindAccount;
