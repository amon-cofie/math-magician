import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName, obj = this.state) => {
    const result = calculate(obj, buttonName);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="calculator-screen">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="calculator-buttons">
          <div className="row row1">
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('AC')}
            >
              AC
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('+/-')}
            >
              +/-
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('%')}
            >
              %
            </button>
            <button
              className="grow1 operator-btn"
              type="button"
              onClick={() => this.handleClick('÷')}
            >
              ÷
            </button>
          </div>
          <div className="row row2">
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('7')}
            >
              7
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('8')}
            >
              8
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('9')}
            >
              9
            </button>
            <button
              className="grow1 operator-btn"
              type="button"
              onClick={() => this.handleClick('x')}
            >
              x
            </button>
          </div>
          <div className="row row3">
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('4')}
            >
              4
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('5')}
            >
              5
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('6')}
            >
              6
            </button>
            <button
              className="grow1 operator-btn"
              type="button"
              onClick={() => this.handleClick('-')}
            >
              -
            </button>
          </div>
          <div className="row row4">
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('1')}
            >
              1
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('2')}
            >
              2
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('3')}
            >
              3
            </button>
            <button
              className="grow1 operator-btn"
              type="button"
              onClick={() => this.handleClick('+')}
            >
              +
            </button>
          </div>
          <div className="row row5">
            <button
              className="grow2"
              type="button"
              onClick={() => this.handleClick('0')}
            >
              0
            </button>
            <button
              className="grow1"
              type="button"
              onClick={() => this.handleClick('.')}
            >
              .
            </button>
            <button
              className="grow1 operator-btn"
              type="button"
              onClick={() => this.handleClick('=')}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
