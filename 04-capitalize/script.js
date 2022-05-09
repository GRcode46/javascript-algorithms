/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    // Напишите код здесь
    const arr = str.split(' ');
    const newArr = [];
    let newStr;
    arr.forEach((item) => {
        let newWord = item.slice(0,1).toUpperCase() + item.slice(1);
        newArr.push(newWord);
    })
    return newStr = newArr.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"