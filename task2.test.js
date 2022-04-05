const { reverseString } = require('./task2');

test('reverse a string', () => {
  expect(reverseString('hello')).toMatch(/olleh/);
});
