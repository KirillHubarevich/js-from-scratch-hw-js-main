// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let largest

function findLargest(a,b,c) {
    if (a > b && a > c)
        largest = a
    if (b > a && b > c)
        largest = b
    if (c > a && c > b)
        largest = c
    else if (a === c && a === b)
    largest = a || b || c
    return largest }

findLargest(22,22,23)
console.log('Наибольшее число -', largest)







