// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

const n = 1
const x = 2
let even = true
let b

function isEven(a) {
    b = a%(x)
    if (b === n)
       even = false
    else even = true
    return even}

isEven(15)
console.log(even)


// n = n% (n+i);
// выражение 5 % 2 вернёт остаток 1.