const powNumbers = require('./powNumbers');

describe('Pow numbers cases', () => {
    test('Pow 2 by 4', () => {
        expect(powNumbers(2, 4)).toBe(16);
    });
    test('Pow 1 by 4', () => {
        expect(powNumbers(1, 4)).toBe(1);
    });
    test('Pow 123 by 0', () => {
        expect(powNumbers(123, 0)).toBe(1);
    });
    test('Pow -2 by 3', () => {
        expect(powNumbers(-2, 3)).toBe(-8);
    });
});
