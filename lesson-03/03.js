// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let largest

function findLargest(a,b,c) {
    if (a > b && a > c )
        largest = a
    if (b > a && b > c)
        largest = b
    if (c > a && c > b)
        largest = c
    return largest
    }
findLargest(700,400,1000)
console.log('Наибольшее число -', largest)

