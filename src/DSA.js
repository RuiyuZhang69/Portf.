import React, { useState, useEffect } from 'react';
import leet from './leet.json';
import car from './car.jpg'; // Import your image file

const DSA = () => {
  const [randomQuestion, setRandomQuestion] = useState(null);

  const fetchRandomQuestion = () => {
    try {
      const statsList = leet.stat_status_pairs.map(item => item.stat);

      const randomIndex = Math.floor(Math.random() * statsList.length);
      const randomStat = statsList[randomIndex];

      if (randomStat) {
        setRandomQuestion(randomStat.question__title_slug);
      } else {
        console.log('No data available.');
        setRandomQuestion(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setRandomQuestion(null);
    }
  };

  const handleButtonClick = () => {
    if (randomQuestion) {
      window.open(`https://leetcode.com/problems/${randomQuestion}`, '_blank');
    }
  };

  useEffect(() => {
    fetchRandomQuestion();
  }, []);

  return (
    <body>
    <div style={styles.container}>
      <h1 style={styles.title}>Random Question</h1>
      {randomQuestion ? (
        <p style={styles.question}>
          Question Title Slug: {randomQuestion}
          <button style={styles.button1} onClick={handleButtonClick}>Open Problem</button>
        </p>
      ) : (
        <p style={styles.noData}>No data available.</p>
      )}
      <button style={styles.button} onClick={fetchRandomQuestion}>Get Another Random Question</button>
    </div>
    <div>
      <img style={styles.car} src= {car} alt="https://imgflip.com/i/7abc56"/>
    </div>
    </body>
  );
};

const styles = {
  container: {
    textAlign: 'center', // Center align the content
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '15px',
  },
  car: {
    marginLeft: '410px'
  }, 
  question: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '15px',
  },
  button: {
    marginTop: '10px',
    marginLeft: '520px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  },
  button1: {
    marginTop: '10px',
    padding: '10px 20px',
    marginLeft: '580px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  },
  noData: {
    fontSize: '18px',
    color: '#ff0000',
  },
};

export default DSA;