const sub = require('./Test1.js');

test('subtraction a-b', () => {
    expect(sub(8, 5)).toBe(3);
});
