import React from 'react';

function CareerCard({ career, onSelect }) {
  // Career category icons
  const getIcon = (career) => {
    const categories = {
      "Architect": "🏗️",
      "UI/UX Designer": "🖌️",
      "Graphic Designer": "🎭",
      "Animator": "🎬",
      "Game Artist": "🎮",
      "Entrepreneur": "💼",
      "Product Manager": "📱",
      "Innovation Consultant": "🔍",
      "Startup Founder": "🚀",
      "Creative Director": "🎯",
      "Editor": "📝",
      "Literature Professor": "📖",
      "Policy Analyst": "📊",
      "Lawyer": "⚖️",
      "Author": "✒️",
      "Mathematician": "🧮",
      "Financial Analyst": "💹",
      "Data Scientist": "📈",
      "Statistician": "📉",
      "Business Strategist": "📋",
      "Software Developer": "👨‍💻",
      "Cybersecurity Analyst": "🔒",
      "AI/ML Engineer": "🤖",
      "Web Developer": "🌐",
      "Systems Architect": "🏛️",
      "Athlete": "🏆",
      "Physical Therapist": "🩺",
      "Sports Coach": "🥇",
      "Fitness Trainer": "💪",
      "Sports Journalist": "📰",
      "Public Relations Specialist": "📢",
      "Motivational Speaker": "🗣️",
      "Politician": "🏛️",
      "News Anchor": "📺",
      "Social Worker": "🤝",
      "Psychologist": "🧠",
      "NGO Program Manager": "🌎",
      "Teacher": "👨‍🏫",
      "Community Health Advocate": "🏥"
    };
    
    return categories[career] || "👔";
  };

  return (
    <button className="option-button" onClick={() => onSelect(career)}>
      <div className="career-button-content">
        <span className="career-icon" role="img" aria-label="career icon">
          {getIcon(career)}
        </span>
        <div className="career-name">{career}</div>
      </div>
    </button>
  );
}

export default CareerCard; 