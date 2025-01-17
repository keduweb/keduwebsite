import React, { useState } from 'react';

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('업무관리'); // 선택된 탭
  const [selectedItem, setSelectedItem] = useState(''); // 선택된 항목

  // 탭에 따른 항목
  const tabContent = {
    업무관리: ['업무1', '업무2', '업무3'],
    지식관리: ['지식1', '지식2', '지식3'],
    통합자산관리: ['자산1', '자산2', '자산3'],
    학교회계: ['회계1', '회계2', '회계3'],
    서비스공통: ['서비스1', '서비스2', '서비스3'],
  };

  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <div className="search-container">
          <input type="text" placeholder="통합검색" />
          <div className="search-icon">
            <i className="fa fa-search" aria-hidden="true"></i> {/* 돋보기 아이콘 */}
          </div>
        </div>
      </div>

      {/* 서비스 탭 */}
      <div className="service-tabs">
        {['업무관리', '지식관리', '통합자산관리', '학교회계', '서비스공통'].map((tab) => (
          <div
            key={tab}
            className={`tab ${selectedTab === tab ? 'active' : ''}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* 항목 선택 */}
      <div className="tab-content">
        <div className="side-tab">
          {selectedTab} 세부 항목 선택
        </div>
        <select
          className="dropdown"
          value={selectedItem}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            항목을 선택하세요
          </option>
          {tabContent[selectedTab]?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="side-bar">
        <div className="side-tab">
          {selectedTab} 세부 항목들
        </div>
        <div className="board">
          {selectedItem && (
            <div className="board-item">
              <h3>{selectedItem}</h3>
              <p>{selectedItem} 내용</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
