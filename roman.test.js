const { integerToRoman, romanToInteger } = require('./script.js');

describe('integerToRoman valid cases', () => {
  test('1 converts to I', () => {
    expect(integerToRoman(1)).toBe('I');
  });

  test('2 converts to II', () => {
    expect(integerToRoman(2)).toBe('II');
  });

  test('3 converts to III', () => {
    expect(integerToRoman(3)).toBe('III');
  });

  test('4 converts to IV', () => {
    expect(integerToRoman(4)).toBe('IV');
  });

  test('5 converts to V', () => {
    expect(integerToRoman(5)).toBe('V');
  });

  test('8 converts to VIII', () => {
    expect(integerToRoman(8)).toBe('VIII');
  });

  test('9 converts to IX', () => {
    expect(integerToRoman(9)).toBe('IX');
  });

  test('10 converts to X', () => {
    expect(integerToRoman(10)).toBe('X');
  });

  test('39 converts to XXXIX', () => {
    expect(integerToRoman(39)).toBe('XXXIX');
  });

  test('40 converts to XL', () => {
    expect(integerToRoman(40)).toBe('XL');
  });

  test('41 converts to XLI', () => {
    expect(integerToRoman(41)).toBe('XLI');
  });

  test('90 converts to XC', () => {
    expect(integerToRoman(90)).toBe('XC');
  });

  test('400 converts to CD', () => {
    expect(integerToRoman(400)).toBe('CD');
  });

  test('900 converts to CM', () => {
    expect(integerToRoman(900)).toBe('CM');
  });

  test('944 converts to CMXLIV', () => {
    expect(integerToRoman(944)).toBe('CMXLIV');
  });

  test('1994 converts to MCMXCIV', () => {
    expect(integerToRoman(1994)).toBe('MCMXCIV');
  });

  test('3999 converts to MMMCMXCIX', () => {
    expect(integerToRoman(3999)).toBe('MMMCMXCIX');
  });
});

describe('integerToRoman invalid cases', () => {
  test('0 throws range error', () => {
    expect(() => integerToRoman(0)).toThrow('The number must be between 1 and 3999.');
  });

  test('-1 throws range error', () => {
    expect(() => integerToRoman(-1)).toThrow('The number must be between 1 and 3999.');
  });

  test('4000 throws range error', () => {
    expect(() => integerToRoman(4000)).toThrow('The number must be between 1 and 3999.');
  });

  test('3.5 throws integer error', () => {
    expect(() => integerToRoman(3.5)).toThrow('Please enter a valid integer number.');
  });

  test('non-numeric string throws error', () => {
    expect(() => integerToRoman('abc')).toThrow('Please enter a valid integer number.');
  });
});

describe('romanToInteger valid cases', () => {
  test('I converts to 1', () => {
    expect(romanToInteger('I')).toBe(1);
  });

  test('III converts to 3', () => {
    expect(romanToInteger('III')).toBe(3);
  });

  test('IV converts to 4', () => {
    expect(romanToInteger('IV')).toBe(4);
  });

  test('IX converts to 9', () => {
    expect(romanToInteger('IX')).toBe(9);
  });

  test('XL converts to 40', () => {
    expect(romanToInteger('XL')).toBe(40);
  });

  test('XC converts to 90', () => {
    expect(romanToInteger('XC')).toBe(90);
  });

  test('CD converts to 400', () => {
    expect(romanToInteger('CD')).toBe(400);
  });

  test('CM converts to 900', () => {
    expect(romanToInteger('CM')).toBe(900);
  });

  test('MCMXCIV converts to 1994', () => {
    expect(romanToInteger('MCMXCIV')).toBe(1994);
  });

  test('MMMCMXCIX converts to 3999', () => {
    expect(romanToInteger('MMMCMXCIX')).toBe(3999);
  });

  test('lowercase mcmxciv converts to 1994', () => {
    expect(romanToInteger('mcmxciv')).toBe(1994);
  });
});

describe('romanToInteger invalid cases', () => {
  test('empty string throws error', () => {
    expect(() => romanToInteger('')).toThrow('Input must be a valid Roman numeral.');
  });

  test('invalid character throws error', () => {
    expect(() => romanToInteger('A')).toThrow('The Roman numeral contains invalid characters.');
  });

  test('IIII throws canonical error', () => {
    expect(() => romanToInteger('IIII')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('VV throws canonical error', () => {
    expect(() => romanToInteger('VV')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('IIV throws canonical error', () => {
    expect(() => romanToInteger('IIV')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('VX throws canonical error', () => {
    expect(() => romanToInteger('VX')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('IC throws canonical error', () => {
    expect(() => romanToInteger('IC')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('IL throws canonical error', () => {
    expect(() => romanToInteger('IL')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('XM throws canonical error', () => {
    expect(() => romanToInteger('XM')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('MCMC throws canonical error', () => {
    expect(() => romanToInteger('MCMC')).toThrow('The Roman numeral is not in canonical form.');
  });

  test('MMMM throws range error', () => {
    expect(() => romanToInteger('MMMM')).toThrow('The number must be between 1 and 3999.');
  });
});
