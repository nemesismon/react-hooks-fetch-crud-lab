import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((data) => setQuestions(data));
  }, []);

  function handleNewQuestion (newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function handleDelete(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions);
  }

  function handleUpdate(updatedQuestion) {
    const updatedAnswers = questions.filter((question) => question.id === updatedQuestion.id)
    setQuestions(updatedAnswers);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onHandleNewQuestion={handleNewQuestion} /> : <QuestionList questions={questions} onHandleDelete={handleDelete} onHandleUpdate={handleUpdate}/>}
    </main>
  );
}

export default App;
