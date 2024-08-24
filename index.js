import {greet} from "../modules/greet.js";
import {celsiusToFahrenheit} from "../modules/celsiusToFahrenheit.js";
import {calculateFallDistance} from "../modules/calculateFallDistance.js";
import {calculateAverage} from "../modules/calculateAverage.js";
import {concatStrings} from "../modules/concatStrings.js";

const myName=prompt("Введите ваше имя")
greet(myName)

const celsius=prompt("Введите температуру в градусах Цельсия:")
celsiusToFahrenheit(celsius)

let t = prompt("Введите время падения:")
t = Number(t)
calculateFallDistance(t)

let a = prompt("Введите первое число")
let b = prompt("Введите второе число")
let c = prompt("Введите третье число")
a = Number(a)
b = Number(b)
c = Number(c)
calculateAverage(a,b,c)

const word1 = prompt("Введите первое слово:")
const word2 = prompt("Введите второе слово:")
concatStrings(word1,word2)
