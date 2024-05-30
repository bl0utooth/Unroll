import { unroll } from './unroll';

test('unrolls a 2x2 array correctly', () => {
  const input = [
    [1, 2],
    [4, 3]
  ];
  const expectedOutput = [1, 2, 3, 4];
  expect(unroll(input)).toEqual(expectedOutput);
});

test('unrolls a 3x3 array correctly', () => {
  const input = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ];
  const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(unroll(input)).toEqual(expectedOutput);
});

test('unrolls an empty array correctly', () => {
  const input = [];
  const expectedOutput = [];
  expect(unroll(input)).toEqual(expectedOutput);
});
