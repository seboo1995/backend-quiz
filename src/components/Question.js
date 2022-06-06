import React, { useContext } from "react";
import { QuestionContext } from "../context/quizContext";

const Question = () => {
  const {
    end_quiz,
    currentQuestionIndex,
    questions,
    AnswerQuestion,
  } = useContext(QuestionContext);

  const handleAnswer = (e) => {
    AnswerQuestion(currentQuestionIndex, e.target.textContent);
  };

  return (
    <React.Fragment>
      {!end_quiz && (
        <div>
          <div>
            {" "}
            <p className="question-content">
              {" "}
              {questions[currentQuestionIndex].question_content}{" "}
            </p>
            <br />
            {questions[currentQuestionIndex].answers.map((answer, index) => {
              return (
                <React.Fragment key={index}>
                  <button
                    key={index}
                    onClick={handleAnswer}
                    className="button-19"
                    role="button"
                  >{answer}
                  </button>
                  <br /> <br />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Question;
