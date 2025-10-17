/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = []
const filter = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const index = array.indexOf(element);
        callback(element, index);
    } return numbers
}

const oddNumbers = filter (numbers, (element, index) => {
    return newNumbers.push (element < 10)
});
console.log(oddNumbers)





































//     if (book.price < 30) {
//         console.log(`${book.title} : ${book.price}`);
//     }
// }

// processBook(favoriteBooks, b => console.log (b.author));

// const needNumbers = numbers.filter (number => number < 5)
// console.log(needNumbers)



// // b = book
//     const printCheapBook = (book) => {
//         if (book.price < 30) {
//             console.log(`${book.title} : ${book.price}`);
//         }
//     }
// // processBook(favoriteBooks, printCheapBook);
// }














