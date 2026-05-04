import React, { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Load feedbacks from localStorage on component mount
  useEffect(() => {
    const storedFeedbacks = localStorage.getItem("studentFeedbacks");
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []);

  // Save feedbacks to localStorage whenever feedbacks change
  useEffect(() => {
    localStorage.setItem("studentFeedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const addFeedback = (newFeedback) => {
    setFeedbacks((prevFeedbacks) => [newFeedback, ...prevFeedbacks]);
  };

  return (
    <div className="container">
      <h1>Student Feedback Application</h1>

      <FeedbackForm onAddFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;