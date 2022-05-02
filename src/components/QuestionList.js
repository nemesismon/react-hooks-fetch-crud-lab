import React, {useState} from "react";

function QuestionList({ questions, onHandleDelete, onHandleUpdate }) {

  const [newIndex, setNewIndex] = useState(null);
  const [tempAnswers, setTempAnswers] = useState([]);

  function handleDeleteClick (question) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => onHandleDelete(question))
  }

  function handleAnswerIndexUpdate (question) {

    console.log(question.answers)

    setTempAnswers(question.answers);

    const updateAnswer = (index) => {
      console.log(index)
      setNewIndex(index)
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify ({
        correctIndex: newIndex,
      })
    })
    .then((response) => response.json())
    .then((updateItem) => onHandleUpdate(updateItem))
  }

    return (
      <div>
        {tempAnswers.map((answer, index) => {
          {console.log(answer, index)}
          // State update to maake this re-render?
          return (<select 
            name="newAnswer"
            id="newAnswer"
            onChange={updateAnswer(index)}
            >
              <option key={answer} name={answer} value={answer}>{answer}</option>
          </select>)
        })}
      </div>
    )
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question) => {
        return (
          <div >
          <li key={question.id} name={question.prompt}>
          {question.prompt}
          <button onClick={() => handleDeleteClick(question)}>Delete Question</button>
          <button onClick={() => handleAnswerIndexUpdate(question)}>Update Answer</button>
          </li>
          </div>
    )})}
    </section>
  );
}

export default QuestionList;
