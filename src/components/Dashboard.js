import React from 'react';

function Dashboard() {
  const posts = [
    { id: 1, title: '첫 번째 게시글', content: '안녕하세요. 첫 번째 게시글입니다.' },
    { id: 2, title: '두 번째 게시글', content: 'React를 배우는 중입니다.' },
    { id: 3, title: '세 번째 게시글', content: '이 게시판은 예제입니다.' },
  ];

  return (
    <div className="dashboard-container">
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
  );
}

export default Dashboard;
