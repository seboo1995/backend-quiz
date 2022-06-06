import React, { useContext,useState } from "react";
import { QuestionContext } from "../context/quizContext";

function Heading() {
  const { usedQuestions, correctQuestions, questions, points } =
    useContext(QuestionContext);
  let [modalShow, setModalShow] = useState(false)
  let numQuestions = usedQuestions.length + 1;
   const handleAddQuestion = () => {
    setModalShow(true)
    console.log(modalShow)
   }
   


  return (
    <div className="text-container">

      <h3> Quiz</h3>
      <p>
        QUESTION {numQuestions - 1} OF {questions.length}
      </p>
      <p> Points: {points}</p>
      {numQuestions > 1 && (
        <p>
          {" "}
          Correct Questions {correctQuestions} / {numQuestions - 1}{" "}
        </p>
      )}
    </div>
  );
}

export default Heading;
