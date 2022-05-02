import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onHandleDelete, onHandleUpdate }) {

  function handleDeleteClick (question) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => onHandleDelete(question))
  }

  const handleUpdateClick = (question) => {
    return (
      <div>
      <QuestionItem question={question} onHandleUpdate={onHandleUpdate} />
      </div>
      )
  }

  return (
    <div>
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question) => {
        return (
          <div key={question.id} name={question.prompt}>
          <li>
          {question.prompt}
          <button onClick={() => handleDeleteClick(question)}>Delete Question</button>
          <button onClick={() => handleUpdateClick(question)}>Update Answer</button>
          </li>
          </div>
    )})}
    </section>
    </div>
  );
}

export default QuestionList;
