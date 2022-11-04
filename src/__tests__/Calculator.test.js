import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Unit Testing: Buttons are loaded in the Dom', () => {
  test('All buttons are successfully loaded', () => {
    render(<Calculator />);
    const allBtns = screen.getAllByRole('button');
    allBtns.forEach((btn) => {
      // eslint-disable-next-line
      expect(btn).toBeInTheDocument;
    });
  });

  test('There are 19 buttons', () => {
    render(<Calculator />);
    const allBtns = screen.getAllByRole('button');
    expect(allBtns.length).toBe(19);
  });

  test('AC button is loaded', () => {
    render(<Calculator />);
    const acBtn = screen.getByText('AC');
    // eslint-disable-next-line
    expect(acBtn).toBeInTheDocument;
  });

  test('= button is loaded', () => {
    render(<Calculator />);
    const equalBtn = screen.getByText(/=/i);
    // eslint-disable-next-line
    expect(equalBtn).toBeInTheDocument;
  });

  test('Number 8 button is loaded', () => {
    render(<Calculator />);
    const eightBtn = screen.getByText(8);
    // eslint-disable-next-line
    expect(eightBtn).toBeInTheDocument;
  });
});

describe('Integration Testing: User interactivity', () => {
  test('1 should display on screen when btn 1 is clicked', () => {
    render(<Calculator />);
    const btnOne = screen.getByRole('button', { name: 1 });
    fireEvent.click(btnOne);
    const calcScreen = screen.getByTestId('calc-screen');

    expect(calcScreen.textContent).toBe('1');
  });

  test('9 should display on screen when btn 9 is clicked', () => {
    render(<Calculator />);
    const btnNine = screen.getByRole('button', { name: 9 });
    fireEvent.click(btnNine);
    const calcScreen = screen.getByTestId('calc-screen');

    expect(calcScreen.textContent).toBe('9');
  });

  test('19 should display on screen when btn 1 and then btn 9 are clicked', () => {
    render(<Calculator />);
    const btnOne = screen.getByRole('button', { name: 1 });
    const btnNine = screen.getByRole('button', { name: 9 });
    fireEvent.click(btnOne);
    fireEvent.click(btnNine);
    const calcScreen = screen.getByTestId('calc-screen');

    expect(calcScreen.textContent).toBe('19');
  });

  test('-1 should display on screen when 2-3 is computed', () => {
    render(<Calculator />);
    const btnTwo = screen.getByRole('button', { name: 2 });
    const btnMinus = screen.getByTestId('operator-minus');

    const btnThree = screen.getByRole('button', { name: 3 });
    const btnEqual = screen.getByText(/=/i);
    fireEvent.click(btnTwo);
    fireEvent.click(btnMinus);
    fireEvent.click(btnThree);
    fireEvent.click(btnEqual);

    const calcScreen = screen.getByTestId('calc-screen');

    expect(calcScreen.textContent).toBe('-1');
  });
});
