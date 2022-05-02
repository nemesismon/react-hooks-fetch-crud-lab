import React from "react";

function QuestionItem({ question, onHandleUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  console.log(id, prompt);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const updateAnswer = (index) => {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify ({
        correctIndex: index,
      })
    })
    .then((response) => response.json())
    .then((updateItem) => onHandleUpdate(updateItem))
    }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={updateAnswer(index)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
