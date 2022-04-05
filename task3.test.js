const { Calculator } = require('./task3');

const Calc = new Calculator(20, 5);

describe('addition', () => {
  test('test 1', () => {
    expect(Calc.add()).toBe(25);
  });

  test('test 2', () => {
    expect(Calc.x).toBeLessThan(25);
  });

  test('test 3', () => {
    expect(Calc.y).toBeGreaterThan(0);
  });
});

describe('subtraction', () => {
  test('test 1', () => {
    expect(Calc.subtract()).toBe(15);
  });

  test('test 2', () => {
    expect(Calc.x).toBeGreaterThanOrEqual(15);
  });

  test('test 3', () => {
    expect(Calc.y).toBeGreaterThanOrEqual(0);
  });
});

describe('multiplication', () => {
  test('test 1', () => {
    expect(Calc.multiply()).toBe(100);
  });

  test('test 2', () => {
    expect(Calc.x).toBeGreaterThanOrEqual(0);
  });

  test('test 3', () => {
    expect(Calc.y).toBeGreaterThanOrEqual(0);
  });
});

describe('division', () => {
  test('test 1', () => {
    expect(Calc.divide()).toBe(4);
  });

  test('test 2', () => {
    expect(Calc.x).toBeGreaterThanOrEqual(15);
  });

  test('test 3', () => {
    expect(Calc.y).toBeGreaterThanOrEqual(0);
  });
});
