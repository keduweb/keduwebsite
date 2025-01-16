import React, { useState } from 'react';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('업무관리'); // 선택된 탭

  const posts = [
    { id: 1, title: '첫 번째 게시글', content: '안녕하세요. 첫 번째 게시글입니다.' },
    { id: 2, title: '두 번째 게시글', content: 'React를 배우는 중입니다.' },
    { id: 3, title: '세 번째 게시글', content: '이 게시판은 예제입니다.' },
  ];

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="search-container">
          <input type="text" placeholder="통합검색" />
          <div className="search-icon">
            <i className="fa fa-search" aria-hidden="true"></i> {/* 돋보기 아이콘 */}
          </div>
        </div>
        <div className="status">
          <span className="playground">야옹이의 놀이터</span> {/* '야옹이의 놀이터' 추가 */}
          <div className="tabs">
            <span>결재(긴급): 5</span>
            <span>공람: 8</span>
            <span>문서진행: 12</span>
            <span>발송대기: 2</span>
            <span>메모(긴급): 3</span>
            <span>메일: 7</span>
          </div>
        </div>
      </div>
      <div className="service-tabs">
        <div
          className={`tab ${selectedTab === '업무관리' ? 'active' : ''}`}
          onClick={() => setSelectedTab('업무관리')}
        >
          업무관리
        </div>
        <div
          className={`tab ${selectedTab === '지식관리' ? 'active' : ''}`}
          onClick={() => setSelectedTab('지식관리')}
        >
          지식관리
        </div>
        <div
          className={`tab ${selectedTab === '통합자산관리' ? 'active' : ''}`}
          onClick={() => setSelectedTab('통합자산관리')}
        >
          통합자산관리
        </div>
        <div
          className={`tab ${selectedTab === '학교회계' ? 'active' : ''}`}
          onClick={() => setSelectedTab('학교회계')}
        >
          학교회계
        </div>
        <div
          className={`tab ${selectedTab === '서비스공통' ? 'active' : ''}`}
          onClick={() => setSelectedTab('서비스공통')}
        >
          서비스공통
        </div>
      </div>
      <div className="side-bar">
        <div className="side-tab">
          {selectedTab} 세부 항목들
        </div>
        <div className="board">
          {posts.map((post) => (
            <div key={post.id} className="board-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
