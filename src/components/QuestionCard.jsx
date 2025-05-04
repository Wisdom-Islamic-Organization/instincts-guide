import React from 'react';

function QuestionCard({ question, onSelect }) {
  // Icons for different question types to make it more kid-friendly
  const icons = {
    "Love drawing?": "🎨",
    "Always full of ideas?": "💡",
    "Enjoy reading & analyzing?": "📚",
    "Enjoy numbers & patterns?": "🔢",
    "Love coding/programming?": "💻",
    "Love sports or fitness?": "🏃‍♂️",
    "Love speaking or debating?": "🎤",
    "Passionate about helping people?": "❤️"
  };

  return (
    <div className="question-card" onClick={() => onSelect(question)}>
      <div className="card-content">
        <div className="icon-container">
          <span className="card-icon" role="img" aria-label="icon">{icons[question.text] || "🔍"}</span>
        </div>
        <h3>{question.text}</h3>
      </div>
    </div>
  );
}

export default QuestionCard; 