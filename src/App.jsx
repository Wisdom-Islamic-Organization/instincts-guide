import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import CareerCard from './components/CareerCard'
import CareerDetail from './components/CareerDetail'
import History from './components/History'

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [history, setHistory] = useState([]);

  const questions = [
    {
      id: 1,
      text: "Love drawing?",
      options: ["Architect", "UI/UX Designer", "Graphic Designer", "Animator", "Game Artist"]
    },
    {
      id: 2,
      text: "Always full of ideas?",
      options: ["Entrepreneur", "Product Manager", "Innovation Consultant", "Startup Founder", "Creative Director"]
    },
    {
      id: 3,
      text: "Enjoy reading & analyzing?",
      options: ["Editor", "Literature Professor", "Policy Analyst", "Lawyer", "Author"]
    },
    {
      id: 4,
      text: "Enjoy numbers & patterns?",
      options: ["Mathematician", "Financial Analyst", "Data Scientist", "Statistician", "Business Strategist"]
    },
    {
      id: 5,
      text: "Love coding/programming?",
      options: ["Software Developer", "Cybersecurity Analyst", "AI/ML Engineer", "Web Developer", "Systems Architect"]
    },
    {
      id: 6,
      text: "Love sports or fitness?",
      options: ["Athlete", "Physical Therapist", "Sports Coach", "Fitness Trainer", "Sports Journalist"]
    },
    {
      id: 7,
      text: "Love speaking or debating?",
      options: ["Lawyer", "Public Relations Specialist", "Motivational Speaker", "Politician", "News Anchor"]
    },
    {
      id: 8,
      text: "Passionate about helping people?",
      options: ["Social Worker", "Psychologist", "NGO Program Manager", "Teacher", "Community Health Advocate"]
    }
  ];

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setSelectedCareer(null);
  };

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
    setHistory([...history, { question: selectedQuestion.text, career }]);
  };

  const handleReset = () => {
    setSelectedQuestion(null);
    setSelectedCareer(null);
  };

  return (
    <div className="app-container">
      <Header />

      <main>
        {!selectedQuestion && !selectedCareer ? (
          <>
            <div className="intro-text">
              <p>Choose a question that matches your interests to discover potential career paths!</p>
            </div>
            <div className="question-grid">
              {questions.map(question => (
                <QuestionCard 
                  key={question.id} 
                  question={question} 
                  onSelect={handleQuestionSelect} 
                />
              ))}
            </div>
          </>
        ) : !selectedCareer ? (
          <div className="options-container">
            <h2>{selectedQuestion.text}</h2>
            <div className="options-grid">
              {selectedQuestion.options.map(option => (
                <CareerCard 
                  key={option} 
                  career={option}
                  onSelect={handleCareerSelect}
                />
              ))}
            </div>
            <button className="back-button" onClick={handleReset}>Back to Questions</button>
          </div>
        ) : (
          <CareerDetail 
            career={selectedCareer} 
            onBack={() => setSelectedCareer(null)} 
            onReset={handleReset} 
          />
        )}
      </main>

      <History history={history} />
      
      <footer>
        <p>Exploring your instincts to find the perfect career path! 🚀</p>
      </footer>
    </div>
  );
}

export default App
