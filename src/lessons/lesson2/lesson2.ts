console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
//Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(a: number) {
    return (b: number) => {
        return a + b
    }
}

alert(sum(3)(6))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let count = 0

    return () => {
        return ++count
    }
}

let counter = makeCounter()

alert(counter())
alert(counter())
let counter2 = makeCounter()
alert(counter2())
alert(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(startCounter: number) {
    return {
        count: startCounter,
        increase() {
            return this.count + 1
        },
        decrease() {
            return this.count - 1
        },
        reset() {
            return this.count = 0
        },
        set() {
            return this.count = startCounter
        },
    }
}

// Task 04*
// Реализовать функцию superSum, которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(args: number, argsToString = '0', size = args) {
    if (args === 0) {
        return argsToString.split('' || ',').reduce((acc, el, i) => i < size ? acc + Number(el) : acc, 0)
    }
    return (...n: any) => {
        argsToString = argsToString + n + ','
        return superSum(n.length > 1 && (args - n.length) >= 0 ? args - n.length : args - 1, argsToString, size)
    }
}

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Вычислить сумму чисел до данного
function sumTo(n: number) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result = result + i
    }
    return result
}

function sumTo2(n: number): number {
    if (n === 1) {
        return 1
    } else {
        return n + sumTo2(n - 1)
    }
}

function sumTo3(n: number) {
    return n * (n + 1) / 2
}

//  Вычислить факториал
function factorial(n: number): number {
    if (n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}


// Числа Фибоначчи
function fib(n: number): number {
    if (n === 1 || n === 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

// Вывод односвязного списка
let list = {
    value: 1,
    next: {

        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

function printList(list: any): any {
    let tmp = list
    while (tmp) {
        console.log(tmp.value)
        tmp = tmp.next
    }
}

printList(list)

function printList2(list: any): any {
    console.log(list.value)
    if (list.next) {
        printList2(list.next)
    }
}

printList2(list)

// Вывод односвязного списка в обратном порядке

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const makeFlat = function (arr: Array<any>): Array<any> {
    return arr.reduce((acc, el) => {
        return acc.concat(el instanceof Array ? makeFlat(el) : el)
    }, [])
}

console.log(makeFlat([1, 2, 3, [4, 5, 6, [7, 8, [9, 10]]]]))
// just a plug
export default () => {
};