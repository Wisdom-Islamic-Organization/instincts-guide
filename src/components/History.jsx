import React from 'react';

function History({ history }) {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history-container">
      <h3>Your Career Exploration History</h3>
      <ul className="history-list">
        {history.map((item, index) => (
          <li key={index} className="history-item">
            <div className="history-question">{item.question}</div>
            <div className="history-arrow">→</div>
            <div className="history-career">{item.career}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History; 