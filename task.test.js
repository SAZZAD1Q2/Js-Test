import Calc, { stringLength, reverseString, capitalize } from "./task.js";

describe(' my string length', () => {
  test('should return the exact/correct length', () => {
    
    const str = 'JavaScript';
    const expectedLength = 10;

    expect(stringLength(str)).toBe(expectedLength);

  });

  test('should throw an error for invalid length', () => {
    const str = 'It is not a long string';
    expect(() => {

      stringLength(str);

    }).toThrow('String length must have the length between 1 and 10 character');
  });
});

describe('reverse string', () => {
  test('should reverse the string', () => {
    const str = 'Saif';
    const expected = 'fiaS';
    expect(reverseString(str)).toBe(expected);
  });
});


