import './App.css';
import Heading from './components/Heading';
import Question from './components/Question';
import { QuestionContext } from "./context/quizContext";
import React,{useContext} from "react";
import EndQuiz from './components/EndQuiz';


function App() {
  const {end_quiz} = useContext(QuestionContext)
  return (
    <div className="App">
    <Heading/>
    <Question/>
    <EndQuiz/>
    
    

    </div>
  );
}

export default App;
