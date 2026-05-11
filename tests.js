// tests.js — automated cases from Task 3 (Set 1), plus Set 2 smoke checks

const expect = chai.expect;

describe('Task 3 Set 1 — integerToRoman (valid)', function() {
  const cases = [
    ['TC1-01', 1, 'I'],
    ['TC1-02', 2, 'II'],
    ['TC1-03', 3, 'III'],
    ['TC1-04', 4, 'IV'],
    ['TC1-05', 5, 'V'],
    ['TC1-06', 8, 'VIII'],
    ['TC1-07', 9, 'IX'],
    ['TC1-08', 10, 'X'],
    ['TC1-09', 39, 'XXXIX'],
    ['TC1-10', 40, 'XL'],
    ['TC1-11', 41, 'XLI'],
    ['TC1-12', 90, 'XC'],
    ['TC1-13', 400, 'CD'],
    ['TC1-14', 900, 'CM'],
    ['TC1-15', 944, 'CMXLIV'],
    ['TC1-16', 1994, 'MCMXCIV'],
    ['TC1-17', 3999, 'MMMCMXCIX'],
  ];

  cases.forEach(function([id, input, expected]) {
    it(id + ': integerToRoman(' + input + ') === "' + expected + '"', function() {
      expect(integerToRoman(input)).to.equal(expected);
    });
  });
});

describe('Task 3 Set 1 — integerToRoman (invalid)', function() {
  it('TC1-18: 0 throws range error', function() {
    expect(() => integerToRoman(0)).to.throw('The number must be between 1 and 3999.');
  });

  it('TC1-19: -1 throws range error', function() {
    expect(() => integerToRoman(-1)).to.throw('The number must be between 1 and 3999.');
  });

  it('TC1-20: 4000 throws range error', function() {
    expect(() => integerToRoman(4000)).to.throw('The number must be between 1 and 3999.');
  });

  it('TC1-21: 3.5 throws non-integer error', function() {
    expect(() => integerToRoman(3.5)).to.throw('Please enter a valid integer number.');
  });

  it('TC1-22: non-numeric string throws', function() {
    expect(() => integerToRoman('abc')).to.throw('Please enter a valid integer number.');
  });
});

describe('Task 3 Set 1 — romanToInteger (valid)', function() {
  const cases = [
    ['TC1-23', 'I', 1],
    ['TC1-24', 'III', 3],
    ['TC1-25', 'IV', 4],
    ['TC1-26', 'IX', 9],
    ['TC1-27', 'XL', 40],
    ['TC1-28', 'XC', 90],
    ['TC1-29', 'CD', 400],
    ['TC1-30', 'CM', 900],
    ['TC1-31', 'MCMXCIV', 1994],
    ['TC1-32', 'MMMCMXCIX', 3999],
    ['TC1-33', 'mcmxciv', 1994],
  ];

  cases.forEach(function([id, input, expected]) {
    it(id + ': romanToInteger("' + input + '") === ' + expected, function() {
      expect(romanToInteger(input)).to.equal(expected);
    });
  });
});

describe('Task 3 Set 1 — romanToInteger (invalid)', function() {
  it('TC1-34: empty string', function() {
    expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.');
  });

  it('TC1-35: invalid character A', function() {
    expect(() => romanToInteger('A')).to.throw('The Roman numeral contains invalid characters.');
  });

  it('TC1-36: IIII (invalid repetition)', function() {
    expect(() => romanToInteger('IIII')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-37: VV (invalid repetition)', function() {
    expect(() => romanToInteger('VV')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-38: IIV (non-canonical)', function() {
    expect(() => romanToInteger('IIV')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-39: VX (invalid subtraction)', function() {
    expect(() => romanToInteger('VX')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-40: IC (invalid subtraction)', function() {
    expect(() => romanToInteger('IC')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-41: IL (invalid subtraction)', function() {
    expect(() => romanToInteger('IL')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-42: XM (invalid subtraction)', function() {
    expect(() => romanToInteger('XM')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-43: MCMC (non-canonical)', function() {
    expect(() => romanToInteger('MCMC')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC1-44: MMMM (out of range total; reconversion fails)', function() {
    expect(() => romanToInteger('MMMM')).to.throw('The number must be between 1 and 3999.');
  });
});

describe('Task 3 Set 2 — smoke (from app / AI suite)', function() {
  it('TC2-01: 1 → I', function() {
    expect(integerToRoman(1)).to.equal('I');
  });
  it('TC2-02: 4 → IV', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });
  it('TC2-03: 9 → IX', function() {
    expect(integerToRoman(9)).to.equal('IX');
  });
  it('TC2-04: 58 → LVIII', function() {
    expect(integerToRoman(58)).to.equal('LVIII');
  });
  it('TC2-05: 1994 → MCMXCIV', function() {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });
  it('TC2-06: 3999 → MMMCMXCIX', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });
  it('TC2-07: MCMXCIV → 1994', function() {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });
  it('TC2-08: lowercase mcmxciv → 1994', function() {
    expect(romanToInteger('mcmxciv')).to.equal(1994);
  });
});
