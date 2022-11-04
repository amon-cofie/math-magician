import calculate from '../logic/calculate';
import operate from '../logic/operate';

const samplesArr = [
  { buttonName: 'AC', obj: { total: '1', next: '2', operation: '+' } },
  { buttonName: '0', obj: { total: '1', next: '0', operation: '-' } },
  { buttonName: '1', obj: { total: '0', next: '1', operation: '+' } },
  { buttonName: '=', obj: { total: '5', next: '23', operation: '+' } },
  { buttonName: '=', obj: { total: '5', next: '23', operation: null } },
];

test('should reset calculator screen', () => {
  expect(calculate(samplesArr[0].buttonName, samplesArr[0].obj)).toEqual({
    total: 0,
    next: null,
    operation: null,
  });
});

test('should return nothing', () => {
  expect(calculate(samplesArr[1].buttonName, samplesArr[1].obj)).toEqual({});
});

test('should return 1+1', () => {
  expect(calculate(samplesArr[2].buttonName, samplesArr[2].obj)).toEqual({
    ...samplesArr[2].obj,
    next: samplesArr[2].obj.next + samplesArr[2].buttonName,
  });
});

test('should return result', () => {
  expect(calculate(samplesArr[3].buttonName, samplesArr[3].obj)).toEqual({
    total: operate(
      samplesArr[3].obj.total,
      samplesArr[3].obj.next,
      samplesArr[3].obj.operation,
    ),
    next: null,
    operation: null,
  });
});

test('should return an empty object', () => {
  expect(calculate(samplesArr[4].buttonName, samplesArr[4].obj)).toEqual({});
});
