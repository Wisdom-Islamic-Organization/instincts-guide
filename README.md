# Your Instincts - Career Guidance App

A fun, interactive career guidance app designed for K-12 students to explore different career paths based on their interests and instincts.

## Features

- Interactive question cards to explore interests
- Engaging career options with descriptions
- Similar career suggestions for each career
- History tracking of explored career paths
- Kid-friendly UI with animations and emojis

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/instincts-guide.git
   cd instincts-guide
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Usage

1. **Select an interest category**: Choose from one of the interest-based questions that best matches your preferences.

2. **Explore career options**: Each interest category shows you 5 different career options. Select one to learn more.

3. **Career details**: Read about what the career involves and discover similar careers you might also be interested in.

4. **Track your journey**: The app keeps a history of your career exploration, so you can see which paths you've already explored.

5. **Try different paths**: You can always go back and choose another interest or career to explore different possibilities.

## Development

This project is built with:
- Vite
- React
- JavaScript
- CSS3

## Project Structure

```
instincts-guide/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CareerCard.jsx
│   │   ├── CareerDetail.jsx
│   │   ├── Header.jsx
│   │   ├── History.jsx
│   │   └── QuestionCard.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── context.md
├── index.html
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- Content based on career guidance resources for students
- Designed with a focus on making career exploration fun and accessible for K-12 students
