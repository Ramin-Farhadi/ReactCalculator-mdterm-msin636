import { useState } from 'react';
import './App.css';
import './css/general.css';
function App() {
  const [output, setOutPut] = useState('');
  const calculator = (e) => {
    if (output === '' && e.target.outerText === 'Del') {
      setOutPut('');
    }
    if (output.length <= 1 && e.target.outerText === '0') {
      setOutPut('');
      return;
    }
    if (output.length > 0 && e.target.outerText === 'Del') {
      setOutPut(output.slice(0, output.length - 1));
    }

    if (e.target.outerText === '=') {
      setOutPut(eval(output));
    } else if (e.target.outerText === 'AC') {
      setOutPut('');
    } else if (e.target.outerText !== 'Del') {
      if (e.target.outerText === '.' && output[output.length - 1] === '.') {
        setOutPut(output);
      } else {
        setOutPut(output + e.target.outerText);
      }
    }
  };
  return (
    <div className="container">
      <div className="output">{output}</div>
      <div className="buttons">
        <button onClick={(e) => calculator(e)} className="ac span-two">
          AC
        </button>
        <button onClick={(e) => calculator(e)}>Del</button>
        <button onClick={(e) => calculator(e)}>/</button>
        <button onClick={(e) => calculator(e)}>7</button>
        <button onClick={(e) => calculator(e)}>8</button>
        <button onClick={(e) => calculator(e)}>9</button>
        <button onClick={(e) => calculator(e)}>*</button>
        <button onClick={(e) => calculator(e)}>4</button>
        <button onClick={(e) => calculator(e)}>5</button>
        <button onClick={(e) => calculator(e)}>6</button>
        <button onClick={(e) => calculator(e)}>-</button>
        <button onClick={(e) => calculator(e)}>1</button>
        <button onClick={(e) => calculator(e)}>2</button>
        <button onClick={(e) => calculator(e)}>3</button>
        <button onClick={(e) => calculator(e)}>+</button>
        <button onClick={(e) => calculator(e)}>0</button>
        <button onClick={(e) => calculator(e)}>.</button>
        <button onClick={(e) => calculator(e)} className="span-two">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
