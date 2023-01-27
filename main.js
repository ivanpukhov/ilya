const login = (age) => {
    if (age < 18) {
        return ('Совершенолетний')
    } else {
        return ('Несовершеннолетний')
    }
}

const gap = (number, after, end) => {
    if (number >= after && number <= end) {
        return 'да'
    } else {
        return 'нет'
    }
}

const maxOfArray = (arr) => {
    return Math.max.apply(null, arr)
}

const maxIndexOfArray = (arr) => {
    return (arr.indexOf(Math.max.apply(null, arr)))
}

