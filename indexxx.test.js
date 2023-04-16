const { fizzBuzz, count } = require('./indexxx');
// const jest = require('jest');
// import { fizzBuzz } from './indexxx';

describe('FizzBuzz', () => {
  test('[3] should result in "fizz"', () => {
    expect(fizzBuzz([3])).toBe('fizz');
  });

  test('[5] should result in "buzz"', () => {
    expect(fizzBuzz([5])).toBe('buzz');
  });

  test('[15] should result in "fizzbuzz"', () => {
    expect(fizzBuzz([15])).toBe('fizzbuzz');
  });

  test('[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] should result in "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz"', () => {
    expect(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toBe('1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz');
  })
});

describe('Count', () => {
  test('mockFn to have been called', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  })
})