const compareNumbers = require('./compareNumbers');

describe('Cases for comparing numbers', () => {
    test('Case for 44', () => {
        expect(compareNumbers(44)).toBe(true);
    });
    test('Case for 100', () => {
        expect(compareNumbers(100)).toBe(true);
    });
    test('Case for 0', () => {
        expect(compareNumbers(100)).toBe(true);
    });
    test('Case for -2', () => {
        expect(compareNumbers(-2)).toBe(false);
    });
    test('Case for 120', () => {
        expect(compareNumbers(120)).toBe(false);
    });
    test('Case for string', () => {
        expect(compareNumbers('invalid value')).toBe(false);
    });
});
