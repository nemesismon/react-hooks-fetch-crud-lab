import React from "react";

function QuestionItem({ question, onHandleDeleteClick }) {
  const { id, prompt, answers, correctIndex } = question;

  console.log(id, prompt);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const updateAnswer = (event) => {
    console.log(event.target.value)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify ({
        correctIndex: event.target.value,
      })
    })
    .then((response) => response.json())
    .then((updateItem) => console.log("Update Item", updateItem))
    }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(event) => updateAnswer(event)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onHandleDeleteClick(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
