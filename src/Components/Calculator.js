import { useState } from 'react';
import React from 'react';

const Calculator = () => {
  const [output, setOutPut] = useState('');

  const calculator = (e) => {
    // if output is empty then return
    if (output === '' && e.target.outerText === 'Del') {
      setOutPut('');
      return;
    }
    // return a number 05 -> 5
    if (output.length <= 1 && e.target.outerText === '0') {
      setOutPut('');
      return;
    }
    // 05 + 06 === 11
    if (
      (output[output.length - 1] === '+' ||
        output[output.length - 1] === '-' ||
        output[output.length - 1] === '/' ||
        output[output.length - 1] === '*') &&
      e.target.outerText === '0'
    ) {
      setOutPut(output);
      return;
    }
    // Delete function
    if (output.length > 0 && e.target.outerText === 'Del') {
      setOutPut(output.slice(0, output.length - 1));
      return;
    }
    // Eval func help to calculate
    if (e.target.outerText === '=') {
      setOutPut(eval(output));
    }
    // AC function helps to remove
    else if (e.target.outerText === 'AC') {
      setOutPut('');
    }
    // Prevent users to use two .
    else if (e.target.outerText !== 'Del') {
      if (e.target.outerText === '.' && output[output.length - 1] === '.') {
        setOutPut(output);
      }
      // Prevent user to use a number like 3.2.1 return to 3.21
      else if (e.target.outerText === '.') {
        let counter = 0;
        for (let i = 0; i < output.length; i++) {
          if (
            output[i] === '+' ||
            output[i] === '-' ||
            output[i] === '*' ||
            output[i] === '/'
          ) {
            counter = 0;
          } else if (output[i] === '.') {
            counter++;
          }
        }
        counter === 0
          ? setOutPut(output + e.target.outerText)
          : setOutPut(output);
      }
      // If user use . -> .
      else {
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
