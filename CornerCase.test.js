const getPercents = require('./CornerCase.js');

test('get persentage', () => {
    expect(getPercents(100, 200)).toBe(60);
});
//сделал намеренную ошибку в ToBe