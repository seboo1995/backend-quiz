import React, { useState, createContext, useEffect } from "react";
//import { questions  } from "../fakeData/questions";
import axios from "axios";

const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(function () {
    axios.get("http://localhost:8080/questions").then((question) => {
      let data = question.data;

      const data_answ_list = data.map((question) => {
        const correct = parseInt(question.correct);
        let answers = question.answers.split(",");
        return { ...question, answers: answers, correct: parseInt(correct) };
      });

      setQuestions(data_answ_list);
    });
  }, []);

  useEffect(function () {
    axios.get("http://localhost:8080/users").then((user) => {
        setUsers(user.data);
    });
  }, []);

  const [usedQuestions, setUsedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [points, setPoints] = useState(0);

  let end_quiz = questions.length === usedQuestions.length;

  const AnswerQuestion = (questionIndex, answer) => {
    setUsedQuestions([...usedQuestions, questionIndex]);
    // check if correct
    const correctIndex = questions[questionIndex].correct;
    const correctAnswer = questions[questionIndex].answers[correctIndex]
    if( answer === correctAnswer){
      setPoints(points+2)
      setCorrectQuestions(correctQuestions + 1)

    }
    else{
      setPoints(points-1)
    }
  
    
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const value = {
    points,
    end_quiz,
    questions,
    usedQuestions,
    setUsedQuestions,
    currentQuestionIndex,
    correctQuestions,
    setCorrectQuestions,
    AnswerQuestion,
    users
  };
  return (
    <QuestionContext.Provider value={value}>
      {" "}
      {children}{" "}
    </QuestionContext.Provider>
  );
};
export { QuestionContext, QuestionProvider };
