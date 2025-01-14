import React, { useState } from 'react';

function Signup({ onSwitchTab, onSignup, existingUsers = [] }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    year: '',
    region: '',
    catCode: '',
  });

  const [usernameError, setUsernameError] = useState(false); // 아이디 중복 에러 상태

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'username') {
      // 아이디 중복 여부 확인
      setUsernameError(existingUsers.includes(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usernameError) {
      alert('아이디가 이미 사용 중입니다.');
      return;
    }

    if (formData.catCode !== '1007') {
      alert('야옹이코드가 올바르지 않습니다.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    onSignup(formData);
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>아이디</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {usernameError && (
            <span style={{ color: 'red', fontSize: '12px' }}>
              이미 사용 중인 아이디입니다.
            </span>
          )}
        </div>
        <div className="form-group">
          <label>비밀번호</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>닉네임</label>
          <input
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>합격년도</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">선택</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2021 이전">2021년 이전</option>
          </select>
        </div>
        <div className="form-group">
          <label>지역</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="">선택</option>
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="인천">인천</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="세종">세종</option>
            <option value="경기">경기</option>
            <option value="강원">강원</option>
            <option value="충북">충북</option>
            <option value="충남">충남</option>
            <option value="전북">전북</option>
            <option value="전남">전남</option>
            <option value="경북">경북</option>
            <option value="경남">경남</option>
            <option value="제주">제주</option>
          </select>
        </div>
        <div className="form-group">
          <label>야옹이코드</label>
          <input
            name="catCode"
            value={formData.catCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
