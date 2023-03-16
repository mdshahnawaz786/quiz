import React, { useContext, useState } from 'react'
import { GlobalData } from '../App'
import QuizResult from './QuizResult';


const Quiz = () => {
    const context = useContext(GlobalData);
    console.log(context)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [clickedOption, setClickedOption] = useState(0)
    const [showResult, setShowResult] = useState(false)

    const upDateScore = ()=>{
      if(clickedOption === context[currentQuestion].answer){
        setScore(score + 1)
      }
    }

    const resetAll = ()=>{
      setShowResult(false)
      setCurrentQuestion(0)
      setClickedOption(0)
      setScore(0)
    }
  return (
    <div>
        <p className="heading-txt">Quiz APP</p>
        <div className="container">
          {showResult ? (
            <QuizResult score={score} totalScore={context.length} tryAgain={resetAll}/>
          ):(
            <>
          <div className="question">
            <span id='question-number'>{currentQuestion+1}.</span>
            <span id='question-txt'>{context[currentQuestion].question}</span>
          </div>
          <div className="option-container">
            {context[currentQuestion].options.map((option,i)=>{
              return(
                <button 
                // className="option-btn" 
                className={`option-btn ${clickedOption === i+1 ? "checked":null }`}
                key={i} onClick={()=>{
                  setClickedOption(i+1)
                }}>
                  {option}
                </button>
              )
            })}
          </div>
          <input type="button" value="Next" id="next-button" onClick={()=>{
            upDateScore()
            if(currentQuestion < context.length -1){
              setCurrentQuestion(currentQuestion + 1)
              setClickedOption(0)
            }else{
                setShowResult(true)
            }
            
          }}/>
          
          </>)}
        </div>
        
    </div>
  )
}

export default Quiz