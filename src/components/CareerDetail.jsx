import React from 'react';

function CareerDetail({ career, onBack, onReset }) {
  const descriptions = {
    "Architect": "Architects design buildings and structures, combining artistic vision with technical knowledge. You'll create spaces that are functional, safe, and beautiful while working with clients and construction teams.",
    "UI/UX Designer": "UI/UX Designers create user-friendly digital experiences. You'll design interfaces that are both visually appealing and easy to use, conducting user research and creating prototypes.",
    "Graphic Designer": "Graphic Designers create visual content to communicate messages. You'll design logos, advertisements, publications, and more using color, typography, and images.",
    "Animator": "Animators bring characters and stories to life through movement. You'll create sequences of images that form animations for films, games, advertisements, and more.",
    "Game Artist": "Game Artists create visual elements for video games. You'll design characters, environments, objects, and textures that bring game worlds to life.",
    "Entrepreneur": "Entrepreneurs start and run their own businesses. You'll identify opportunities, develop business plans, secure funding, and build companies from the ground up.",
    "Product Manager": "Product Managers guide product development from concept to launch. You'll work with designers, engineers, and marketers to create products that meet user needs.",
    "Innovation Consultant": "Innovation Consultants help companies develop new ideas and solutions. You'll analyze business challenges and facilitate creative problem-solving processes.",
    "Startup Founder": "Startup Founders create new companies with innovative business models. You'll develop unique products or services and build teams to bring them to market.",
    "Creative Director": "Creative Directors lead the artistic vision for brands and campaigns. You'll guide creative teams to produce cohesive, impactful visual content.",
    "Editor": "Editors review and refine written content before publication. You'll improve clarity, correct errors, and ensure consistency in books, articles, websites, and more.",
    "Literature Professor": "Literature Professors teach and research literary works. You'll analyze texts, lead discussions, and help students understand different literary periods and movements.",
    "Policy Analyst": "Policy Analysts research and evaluate public policies. You'll collect data, analyze issues, and recommend solutions to government agencies or organizations.",
    "Lawyer": "Lawyers provide legal advice and representation. You'll interpret laws, prepare legal documents, and advocate for clients in negotiations or court proceedings.",
    "Author": "Authors write books, articles, or other content. You'll research topics, develop narratives, and express ideas through the written word.",
    "Mathematician": "Mathematicians solve problems using mathematical theories and techniques. You'll develop and apply mathematical models to understand complex systems.",
    "Financial Analyst": "Financial Analysts assess investment opportunities and provide guidance. You'll analyze financial data, forecast trends, and help businesses make financial decisions.",
    "Data Scientist": "Data Scientists extract insights from complex data. You'll use statistics, programming, and visualization to solve problems and inform decision-making.",
    "Statistician": "Statisticians collect, analyze, and interpret data. You'll design studies, apply statistical methods, and help organizations understand patterns and trends.",
    "Business Strategist": "Business Strategists develop plans for organizational growth. You'll analyze market trends, identify opportunities, and recommend strategic directions.",
    "Software Developer": "Software Developers create computer applications and systems. You'll write code, test software, and solve problems to meet user needs.",
    "Cybersecurity Analyst": "Cybersecurity Analysts protect computer systems from threats. You'll monitor networks, identify vulnerabilities, and respond to security breaches.",
    "AI/ML Engineer": "AI/ML Engineers build systems that can learn from data. You'll develop algorithms, train models, and create intelligent applications.",
    "Web Developer": "Web Developers build websites and web applications. You'll write code, design interfaces, and ensure functionality across devices.",
    "Systems Architect": "Systems Architects design complex computer systems. You'll create blueprints for IT infrastructure that meets organizational needs.",
    "Athlete": "Athletes compete in sports at a professional level. You'll train intensively, maintain physical fitness, and represent teams or countries in competitions.",
    "Physical Therapist": "Physical Therapists help patients recover from injuries and manage conditions. You'll design treatment plans and guide rehabilitation exercises.",
    "Sports Coach": "Sports Coaches train athletes and teams. You'll develop strategies, conduct practices, and provide guidance during competitions.",
    "Fitness Trainer": "Fitness Trainers help clients achieve health and exercise goals. You'll design workout plans, demonstrate exercises, and monitor progress.",
    "Sports Journalist": "Sports Journalists cover sporting events and athletes. You'll write articles, conduct interviews, and analyze performances for media outlets.",
    "Public Relations Specialist": "Public Relations Specialists manage the public image of organizations. You'll create content, handle media relations, and respond to public concerns.",
    "Motivational Speaker": "Motivational Speakers inspire audiences to make positive changes. You'll develop presentations, share personal stories, and connect with diverse groups.",
    "Politician": "Politicians represent constituents in government. You'll develop policy positions, campaign for office, and work to implement legislation.",
    "News Anchor": "News Anchors present news broadcasts on television. You'll read scripts, interview guests, and sometimes report from the field.",
    "Social Worker": "Social Workers help people cope with challenges in their lives. You'll assess needs, connect clients with resources, and advocate for vulnerable populations.",
    "Psychologist": "Psychologists study human behavior and mental processes. You'll conduct research, provide therapy, and help people understand their thoughts and feelings.",
    "NGO Program Manager": "NGO Program Managers oversee humanitarian or development projects. You'll plan initiatives, manage resources, and measure impact in communities.",
    "Teacher": "Teachers educate students in various subjects. You'll create lesson plans, facilitate learning activities, and assess student progress.",
    "Community Health Advocate": "Community Health Advocates promote wellness in communities. You'll provide education, connect people with healthcare resources, and address public health issues."
  };

  const similarCareersMap = {
    "Architect": ["Civil Engineer", "Urban Planner", "Interior Designer", "Landscape Architect"],
    "UI/UX Designer": ["Product Designer", "Web Designer", "Interaction Designer", "User Researcher"],
    "Graphic Designer": ["Art Director", "Brand Designer", "Illustrator", "Web Designer"],
    "Animator": ["Motion Graphics Designer", "3D Modeler", "Storyboard Artist", "VFX Artist"],
    "Game Artist": ["Concept Artist", "3D Modeler", "Texture Artist", "Character Designer"],
    "Entrepreneur": ["Business Consultant", "Startup Founder", "CEO", "Venture Capitalist"],
    "Product Manager": ["Business Analyst", "Project Manager", "UX Researcher", "Program Manager"],
    "Innovation Consultant": ["Design Thinking Facilitator", "Strategy Consultant", "R&D Specialist", "Change Manager"],
    "Startup Founder": ["Entrepreneur", "CEO", "Business Developer", "Venture Capitalist"],
    "Creative Director": ["Art Director", "Design Lead", "Brand Manager", "Marketing Director"],
    "Editor": ["Content Manager", "Copywriter", "Proofreader", "Publishing Coordinator"],
    "Literature Professor": ["Writer", "Librarian", "Literary Agent", "Book Critic"],
    "Policy Analyst": ["Political Advisor", "Government Relations Specialist", "Research Analyst", "Lobbyist"],
    "Lawyer": ["Legal Consultant", "Judge", "Mediator", "Paralegal"],
    "Author": ["Journalist", "Screenwriter", "Content Creator", "Copywriter"],
    "Mathematician": ["Actuary", "Cryptographer", "Quantitative Analyst", "Research Scientist"],
    "Financial Analyst": ["Investment Banker", "Financial Advisor", "Risk Analyst", "Budget Analyst"],
    "Data Scientist": ["Machine Learning Engineer", "Business Intelligence Analyst", "Data Engineer", "Quantitative Researcher"],
    "Statistician": ["Biostatistician", "Market Research Analyst", "Demographer", "Quality Control Analyst"],
    "Business Strategist": ["Management Consultant", "Business Development Manager", "Operations Manager", "Marketing Strategist"],
    "Software Developer": ["Mobile App Developer", "Game Developer", "DevOps Engineer", "Software Architect"],
    "Cybersecurity Analyst": ["Security Engineer", "Ethical Hacker", "Forensic Computer Analyst", "Information Security Manager"],
    "AI/ML Engineer": ["Data Scientist", "Computer Vision Engineer", "NLP Specialist", "Research Scientist"],
    "Web Developer": ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "WordPress Developer"],
    "Systems Architect": ["Cloud Architect", "Network Engineer", "Database Administrator", "IT Director"],
    "Athlete": ["Sports Coach", "Personal Trainer", "Sports Medicine Physician", "Sports Psychologist"],
    "Physical Therapist": ["Occupational Therapist", "Athletic Trainer", "Chiropractor", "Exercise Physiologist"],
    "Sports Coach": ["Athletic Director", "Sports Scout", "Recreation Manager", "Personal Trainer"],
    "Fitness Trainer": ["Yoga Instructor", "Nutritionist", "Exercise Physiologist", "Wellness Coach"],
    "Sports Journalist": ["Sports Photographer", "Sports Announcer", "Sports Marketing Specialist", "Team Public Relations"],
    "Public Relations Specialist": ["Communications Manager", "Social Media Manager", "Brand Ambassador", "Spokesperson"],
    "Motivational Speaker": ["Life Coach", "Corporate Trainer", "Workshop Facilitator", "Author"],
    "Politician": ["Policy Advisor", "Campaign Manager", "Lobbyist", "Public Administrator"],
    "News Anchor": ["Reporter", "Broadcast Journalist", "Media Correspondent", "Podcast Host"],
    "Social Worker": ["Case Manager", "Family Therapist", "Child Welfare Specialist", "School Counselor"],
    "Psychologist": ["Counselor", "Therapist", "Psychiatrist", "School Psychologist"],
    "NGO Program Manager": ["Humanitarian Aid Worker", "International Development Specialist", "Grant Writer", "Volunteer Coordinator"],
    "Teacher": ["School Counselor", "Curriculum Developer", "Educational Administrator", "Instructional Designer"],
    "Community Health Advocate": ["Public Health Educator", "Patient Navigator", "Health Program Coordinator", "Outreach Worker"]
  };

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
    <div className="career-details">
      <div className="career-header">
        <span className="career-detail-icon" role="img" aria-label="career icon">
          {getIcon(career)}
        </span>
        <h2>Career: {career}</h2>
      </div>
      
      <div className="career-description">
        <h3>What does a {career} do?</h3>
        <p className="description-text">
          {descriptions[career] || `Information about being a ${career} will be provided soon.`}
        </p>
      </div>
      
      <div className="similar-careers">
        <h3>Similar Careers You Might Like</h3>
        <div className="similar-careers-list">
          {similarCareersMap[career]?.map(similar => (
            <div key={similar} className="similar-career-item">
              <span className="similar-icon" role="img" aria-label="similar career icon">
                {getIcon(similar)}
              </span>
              <span>{similar}</span>
            </div>
          )) || <p>No similar careers found.</p>}
        </div>
      </div>
      
      <div className="career-actions">
        <button className="back-button" onClick={onBack}>Try Another Option</button>
        <button className="reset-button" onClick={onReset}>Start Over</button>
      </div>
    </div>
  );
}

export default CareerDetail; 