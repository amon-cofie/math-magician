import operate from '../logic/operate';

const logger = [
  { numberOne: '4', numberTwo: '5', operation: '+' },
  { numberOne: '5', numberTwo: '6', operation: '-' },
  { numberOne: '2', numberTwo: '3', operation: 'x' },
  { numberOne: '4', numberTwo: '2', operation: '÷' },
  { numberOne: '2', numberTwo: '2', operation: '%' },
  { numberOne: '4', numberTwo: '0', operation: '÷' },
];

test('test addition', () => {
  expect(
    operate(logger[0].numberOne, logger[0].numberTwo, logger[0].operation),
  ).toBe('9');
});

test('test subtraction', () => {
  expect(
    operate(logger[1].numberOne, logger[1].numberTwo, logger[1].operation),
  ).toBe('-1');
});

test('test multiplication', () => {
  expect(
    operate(logger[2].numberOne, logger[2].numberTwo, logger[2].operation),
  ).toBe('6');
});

test('test division', () => {
  expect(
    operate(logger[3].numberOne, logger[3].numberTwo, logger[3].operation),
  ).toBe('2');
});

test('test modulo', () => {
  expect(
    operate(logger[4].numberOne, logger[4].numberTwo, logger[4].operation),
  ).toBe('0');
});

test("test if it'll throw an error", () => {
  expect(
    operate(logger[5].numberOne, logger[5].numberTwo, logger[5].operation),
  ).toBe("Can't divide by 0.");
});
