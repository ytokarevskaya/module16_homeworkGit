function checkAge(age) {
    if (age > 18) {
        console.log('Доступ открыт')
    } else {
        console.log('Доступ ограничен')
    }
}

module.exports = checkAge;