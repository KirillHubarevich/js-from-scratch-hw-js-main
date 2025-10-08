/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// const array = [1, 2, 3, 4]
// function includesElement(array, newArray) {
//     for (let i = 0; i < array.length; i++) {
//         if (array [i] === element) {
//             return true
//         }
//     }
//     return false
// }
// let x = includesElement(array, 1)
// console.log(x)


function findCommonElements(array, newArray) {
    const superArray = []
    for (let i = 0; i < array.length && newArray.length; i++) {
        let isInclude = array.includes(newArray[i])
        if (isInclude) {
            isInclude = newArray[i]
            superArray.push(isInclude)
        }
    } return superArray
}
const x = findCommonElements([1,2], [3,4])
console.log(x)




















// function findCommonElements(array, newArray) {
//     const superArray = []
//         const isInclude = array.filter (item => newArray.includes(item))
//             superArray.push(isInclude)
//     return superArray
// }
//
// const x = findCommonElements ([1,2,5,4,3,8], [5,2,3,4,7])
// console.log(x)

// function findCommonElements(array, newArray)
// const a1 = [1, 2, 3];
// const a2 = [4, 3, 5];
//
// const commonItems = a1.filter(item => a2.includes(item));
// console.log(commonItems);





