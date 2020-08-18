const getPercents = require('./CornerCase.js');

test('no arguments should be NaN', () => {
    expect(getPercents()).toBe(NaN);
});

test('first argument is 0 should be 0', () => {
    expect(getPercents(0, 50)).toBe(0);
});

test('second argument is 0 should be Infinity', () => {
    expect(getPercents(50, 0)).toBe(Infinity);
});

// Возможно, вы не совсем правильно поняли, что такое корнер-кейс. Смысл корнер-кейсов не в том, чтобы сломать тест и он не выполнился, они нужны, чтобы проверять значения вне ожидаемого диапазона. Вводные данные не всегда бывают такими, как мы ожидаем, поэтому нужно проверять, чтобы функция адекватно реагировала на пустые значения, отсутствие аргументов, нули и т.д. Выше написала несколько примеров корнер-кейсов.