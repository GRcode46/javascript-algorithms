/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    if (n <=1 ){
        return 0;
    } else if (n <= 3) {
        return 1;
    } else  {
        let fibInt1 = 1;
        let fibInt2 = 1;
        for (let i = 4; i <= n; i++) {
            let fibInt3 = fibInt1 + fibInt2;
            fibInt1 = fibInt2;
            fibInt2 = fibInt3;
        }
        return fibInt2;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));