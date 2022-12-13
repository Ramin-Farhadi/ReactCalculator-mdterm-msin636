import { useState } from 'react';
import React from 'react';

// Needs to be fixed
// Consitancy in spacing
// No spacing between if statements 9&10, 13&14, but there is 16-18
// Does the if evaluations need to continue if line 7 is true?
// I can use multiple decimals - 9.3.2 is not a real number - Unexpected number error
// Hit 05+06 getting: SyntaxError: Octal literals are not allowed in strict mode

const Calculator = () => {
  const [output, setOutPut] = useState('');
  const calculator = (e) => {
    if (output === '' && e.target.outerText === 'Del') {
      setOutPut('');
      return;
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
    <>
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
    </>
  );
};

export default Calculator;
