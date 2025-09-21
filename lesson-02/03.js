/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// const score = 70 // тестовое значение, можно изменять
// let grade
// // your code




// if ((score <= F) && (score >= none)) {
// }
// if ((score <= D) && (score > F)) {grade = D
// }
// if ((score <= C) && (score > D)) {grade = C
// }
// if ((score <= B) && (score > C)) { grade = B
// }
// if ((score <= A) && (score > B)) {grade = A
// }

let score = 70;
let grade = 0;

if ((score <= 49) && (score >= 0)) {
        grade = 'F'
}
else if ((score <= 69) && (score >= 50)) {ёg
        grade = 'D'
}
else if ((score <= 79) && (score >= 70)) {
        grade = 'C'
}
else if ((score <= 89) && (score >= 80)) {
        grade = 'B'
    }
else if ((score <= 100) && (score >= 90)) {
        grade = 'A'
}
     console.log('Ваша оценка', grade)




