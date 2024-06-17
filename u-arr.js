"use strict"
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== "string"){return "Ошибка!"}
let a = str.split("").reverse().join('')
    return a
}

console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
 let str ="";
 if (arr.length === 0){return 'Нет доступных валют' };

 arr.forEach(function(i) {
        if (i !== missingCurr) {
            str += `${i}\n`;
        }});


return `Доступные валюты:\n${str}`

 //allCurrencies.filter(item => item !== missingCurr)

}

