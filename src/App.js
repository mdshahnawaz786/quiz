import { createContext } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import { QuizData } from './Components/QuizData';


export const GlobalData = createContext();
function App() {
  return (
    <div className="App">


      <GlobalData.Provider value={QuizData}>

      <Quiz/>
        
      </GlobalData.Provider>
     
    </div>
  );
}

export default App;
