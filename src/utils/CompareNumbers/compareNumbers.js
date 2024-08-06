const compareNumbers = (number) => {
    if (number > 100 || number < 0 || typeof number !== 'number') {
        return false;
    }
    return true;
};

module.exports = compareNumbers;
