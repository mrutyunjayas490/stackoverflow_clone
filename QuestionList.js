import React, { useState, useEffect } from "react";
import "./QuestionList.css";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch questions from the Stack Exchange API
    fetch("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data.items); // Set the questions
        setLoading(false); // Stop loading state
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false); // Stop loading state
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="question-list">
      <h2>Top Questions</h2>
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        questions.map((q) => (
          <div key={q.question_id} className="question-item">
            <h3>
              <a
                href={q.link}
                target="_blank"
                rel="noopener noreferrer"
                className="question-link"
              >
                {q.title}
              </a>
            </h3>
            <p>
              {q.score} votes | {q.answer_count} answers | {q.view_count} views
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default QuestionList;


