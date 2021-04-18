
import React from 'react' 
import './style/calc.css';

import Result from './Components/Result'
import Button from './Components/Button/Button'
import MathOperations from './Components/MathOperations'
import FuncButtons from './Components/FuncButtons'
import Numbers from './Components/Numbers'


function App() {
  // const clickHandlerFunction = (text) => {
  //   console.log("el valor de cuando se da click es:  " ,text)
  //  }
  return (
    <main className = 'react-calculator'>
     
      <Result value={undefined} />
      <FuncButtons 
        onContentClear = {clear => console.log(clear)}
        onDelete       = {d => console.log(d)}
        onChange       = {c => console.log(c)}
      />
      <Numbers 
        onClickNumber = {num => console.log('Numeros: ',num)}
      />
      
      <MathOperations 
        onClickOperation = {operation => console.log("Operación: ",operation)} 
        onClickEqual     = {equal => console.log("Igual: ",equal)}
      />
      
    </main>
    
  );
}

export default App;
