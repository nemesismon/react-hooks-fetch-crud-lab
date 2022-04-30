import React from "react";

function QuestionList({ questions, onHandleDelete }) {

  function handleDeleteClick (question) {
    console.log(question);
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => onHandleDelete(question))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question) => {
        return (
          <div key={question.id} name={question.prompt} >
          <li>
          {question.prompt}
          <button onClick={handleDeleteClick}>Delete Question</button>
          </li>
          </div>
    )})}
    </section>
  );
}

export default QuestionList;
