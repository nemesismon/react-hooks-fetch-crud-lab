import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onHandleDelete}) {

  function handleDeleteClick (question) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => onHandleDelete(question))
  }


  const allQuestions = questions.map((question) => {

    return (
      <QuestionItem key={question.id} name={question.prompt} question={question} onHandleDeleteClick={handleDeleteClick} />
    )
  })

  return (
    <div>
    <section>
      <h1>Quiz Questions</h1>
      {allQuestions}
    </section>
    </div>
  );
}

export default QuestionList;
