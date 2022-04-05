const { stringLength } = require('./task1.js');

test('Should output the character count of hello: 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('Character count is more than 1 and less than or equal to 10', () => {
  expect(stringLength('hello')).toBeLessThanOrEqual(10);
  expect(stringLength('hello')).toBeGreaterThan(1);
});

test('Should throw errors: ', () => {
  expect(() => stringLength('123456789012aa')).toThrow(
    'error: string is null or character count is more than 10'
  );

  expect(() => stringLength('')).toThrow(
    'error: string is null or character count is more than 10'
  );
});
