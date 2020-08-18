function checkAge(age) {
    if (age > 18) {
        return 'Доступ открыт';
    } else {
        return 'Доступ ограничен';
    }
}

module.exports = checkAge;