
/* eslint no-eval:0 */

import React, {useState} from 'react' 
import './style/calc.css';
import words from 'lodash.words'

import Result from './Components/Result'
import MathOperations from './Components/MathOperations'
import FuncButtons from './Components/FuncButtons'
import Numbers from './Components/Numbers'


function App() {
  const [stack, setStack] = useState('0');
  const items = words(stack,/[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length-1] : 0;

  return (
    <main className = 'react-calculator'>
     
      <Result value={value.toString()} />
      <FuncButtons 
        onContentClear = {() => setStack('0')}
        onDelete       = {() => {
                                    if(stack.length > 0){
                                      console.log('delete');
                                      setStack(stack==='0' ?  setStack('0') : stack.slice(0,stack.length-1));
                                    }
                                }}
        onChange       = {c => console.log(c)}
      />
      <Numbers 
        onClickNumber = {number => (stack==='0' && number!=='.' ? setStack(number) : setStack(stack+number))}
      />
      
      <MathOperations 
        onClickOperation = {operation => {
                                              console.log(`Operación`);
                                              setStack(`${stack}${operation}`);
                                          }} 
        onClickEqual     = {equal => {
                                        console.log("Igual: ",equal);
                                        setStack(eval(stack).toString())
                                      }}
      />
      
    </main>
    
  );
}

export default App;
