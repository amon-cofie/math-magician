import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [stateObj, setStateObj] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  return (
    <div className="calculator-container">
      <div className="calculator-screen">
        <span>{stateObj.total}</span>
        <span>{stateObj.operation}</span>
        <span>{stateObj.next}</span>
      </div>
      <div className="calculator-buttons">
        <div className="row row1">
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('AC', stateObj))}
          >
            AC
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('+/-', stateObj))}
          >
            +/-
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('%', stateObj))}
          >
            %
          </button>
          <button
            className="grow1 operator-btn"
            type="button"
            onClick={() => setStateObj(calculate('÷', stateObj))}
          >
            ÷
          </button>
        </div>
        <div className="row row2">
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('7', stateObj))}
          >
            7
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('8', stateObj))}
          >
            8
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('9', stateObj))}
          >
            9
          </button>
          <button
            className="grow1 operator-btn"
            type="button"
            onClick={() => setStateObj(calculate('x', stateObj))}
          >
            x
          </button>
        </div>
        <div className="row row3">
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('4', stateObj))}
          >
            4
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('5', stateObj))}
          >
            5
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('6', stateObj))}
          >
            6
          </button>
          <button
            className="grow1 operator-btn"
            type="button"
            onClick={() => setStateObj(calculate('-', stateObj))}
          >
            -
          </button>
        </div>
        <div className="row row4">
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('1', stateObj))}
          >
            1
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('2', stateObj))}
          >
            2
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('3', stateObj))}
          >
            3
          </button>
          <button
            className="grow1 operator-btn"
            type="button"
            onClick={() => setStateObj(calculate('+', stateObj))}
          >
            +
          </button>
        </div>
        <div className="row row5">
          <button
            className="grow2"
            type="button"
            onClick={() => setStateObj(calculate('0', stateObj))}
          >
            0
          </button>
          <button
            className="grow1"
            type="button"
            onClick={() => setStateObj(calculate('.', stateObj))}
          >
            .
          </button>
          <button
            className="grow1 operator-btn"
            type="button"
            onClick={() => setStateObj(calculate('=', stateObj))}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
