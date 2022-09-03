import './App.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputNum, inputDot,inputSymbol,reset,equal } from './redux/inputSlice'


function App() {
  const dispatch = useDispatch()

  const inputDisplay = useSelector(state => state.input.value)
  const outputDisplay = useSelector(state => state.input.result)
  useEffect(()=>{
    console.log(outputDisplay)
  },[outputDisplay])

  //input display


  //handle number click
  const numClick = (e) => {
    dispatch(inputNum(e.target.innerText))
  }
  //handle dot click
  const dotClick = () => {
    dispatch(inputDot())
  }
  //handle symbol click
  const symbolClick =(e) => {
    dispatch(inputSymbol(e.target.innerText))
  }
  //handle reset
  const resetClick = () =>{
    dispatch(reset())
  }

  return (
    <div className="App">
      <div id="display">
          <div id='input'>{inputDisplay}</div>
          <div id='output'>{outputDisplay}</div>
      </div>
      <div id='container-keys'>
        <div id="clear" onClick={resetClick} >AC</div>
        <div id="divide" onClick={symbolClick}>/</div>
        <div id="multiply" onClick={symbolClick}>X</div>
        <div id="seven" onClick={numClick}>7</div>
        <div id="eight" onClick={numClick}>8</div>
        <div id="nine" onClick={numClick}>9</div>
        <div id="subtract" onClick={symbolClick}>-</div>
        <div id="four" onClick={numClick}>4</div>
        <div id="five" onClick={numClick}>5</div>
        <div id="six" onClick={numClick}>6</div>
        <div id="add" onClick={symbolClick}>+</div>
        <div id="one" onClick={numClick}>1</div>
        <div id="two" onClick={numClick}>2</div>
        <div id="three" onClick={numClick}>3</div>
        <div id="equals" onClick={()=>dispatch(equal())}>=</div>
        <div id="zero" onClick={numClick}>0</div>
        <div id="decimal" onClick={dotClick}>.</div>
      </div>
    </div>
  );
}

export default App;

