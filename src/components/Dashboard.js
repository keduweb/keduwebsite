import React from 'react';

function Dashboard() {
  const posts = [
    { id: 1, title: '첫 번째 게시글', content: '안녕하세요. 첫 번째 게시글입니다.' },
    { id: 2, title: '두 번째 게시글', content: 'React를 배우는 중입니다.' },
    { id: 3, title: '세 번째 게시글', content: '이 게시판은 예제입니다.' },
  ];

  return (
    <div className="dashboard-container">
      <div className="left-side">
        <h3>목록</h3>
        <ul>
          <li>목록 항목 1</li>
          <li>목록 항목 2</li>
          <li>목록 항목 3</li>
        </ul>
      </div>
      <div className="right-side">
        <h2>대시보드</h2>
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
