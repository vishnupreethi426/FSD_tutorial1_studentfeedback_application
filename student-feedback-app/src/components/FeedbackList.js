import React from "react";

function FeedbackList({ feedbacks }) {
  return (
    <div className="list">
      <div className="list-header">
        <h2>Submitted Feedback</h2>
        <span className="badge">{feedbacks.length} Responses</span>
      </div>

      {feedbacks.length === 0 ? (
        <p className="empty">No feedback submitted yet. Fill the form above to add the first response.</p>
      ) : (
        <div className="cards">
          {feedbacks.map((fb) => (
            <div className="card" key={fb.id || fb.email + fb.message}>
              <div className="card-top">
                <h3>{fb.name}</h3>
                <span>{fb.submittedAt}</span>
              </div>
              <p><strong>Email:</strong> {fb.email}</p>
              <p><strong>Contact:</strong> {fb.contact}</p>
              <p><strong>Message:</strong> {fb.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackList;