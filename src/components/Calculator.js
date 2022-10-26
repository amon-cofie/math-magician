import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="calculator-screen"> 0 </div>
        <div className="calculator-buttons">
          <div className="row row1">
            <button className="grow1" type="button">
              AC
            </button>
            <button className="grow1" type="button">
              +/-
            </button>
            <button className="grow1" type="button">
              %
            </button>
            <button className="grow1 operator-btn" type="button">
              ÷
            </button>
          </div>
          <div className="row row2">
            <button className="grow1" type="button">
              7
            </button>
            <button className="grow1" type="button">
              8
            </button>
            <button className="grow1" type="button">
              9
            </button>
            <button className="grow1 operator-btn" type="button">
              x
            </button>
          </div>
          <div className="row row3">
            <button className="grow1" type="button">
              4
            </button>
            <button className="grow1" type="button">
              5
            </button>
            <button className="grow1" type="button">
              6
            </button>
            <button className="grow1 operator-btn" type="button">
              -
            </button>
          </div>
          <div className="row row4">
            <button className="grow1" type="button">
              1
            </button>
            <button className="grow1" type="button">
              2
            </button>
            <button className="grow1" type="button">
              3
            </button>
            <button className="grow1 operator-btn" type="button">
              +
            </button>
          </div>
          <div className="row row5">
            <button className="grow2" type="button">
              0
            </button>
            <button className="grow1" type="button">
              .
            </button>
            <button className="grow1 operator-btn" type="button">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
