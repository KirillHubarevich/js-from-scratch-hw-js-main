/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = 0;
let dice2 = 0;
let isWinningDouble = true;
let numberPred = 6;

dice1 = Math.floor(Math.random() * 6);
dice2 = Math.floor(Math.random() * 6);
dice1 +=1;
dice2 +=1;

    if ((dice1 === dice2) && (dice1 && dice2 > 3) && (dice1 && dice2 <= numberPred)) {
    isWinningDouble = true;
    console.log(dice1, dice2);
    console.log(isWinningDouble,'Выигрышный дубль!')
} else
    {
        isWinningDouble = false
        console.log(dice1, dice2)
        console.log(isWinningDouble, 'Не выигрышный дубль.')



// console.log('Первый бросок: ' + dice1)
// console.log('Второй бросок: ' + dice2)
// if (isWinningDouble) {
//   console.log('Выигрышный дубль!')
// } else {
//   console.log('Не выигрышный дубль.')
}


// это будет цикл
// fffffffff