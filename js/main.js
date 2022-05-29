"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

console.log(myName); //всплытие переменных (hoisting) (нелогичное поведение,
                    // undefined, до объявления переменной)
var myName = 'Ella';


{
    let result = 50;
}

// console.log(result);


let inputIn = document.querySelector(".input-in");
let myButton = document.querySelector("button");
let out = document.querySelector(".out");

myButton.onclick = function () {
    // console.log(+inputIn.value * 10);
    let inputValue = +inputIn.value
    inputIn.value = "";
    out.innerHTML = inputValue + 10;

};

let userName = document.querySelector(".name");
let myButton2 = document.querySelector(".greetings");
let surname = document.querySelector(".surname");
let out2 = document.querySelector(".out2");
surname.value = 'Tenor';


myButton2.onclick = function() {
    let nameValue = userName.value;
    let surnameValue = surname.value;


    out2.innerHTML = ('Hello' + ' ' + nameValue + ' ' + surnameValue);
    userName.value = '';
    surname.value = '';
};


let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let button3 = document.querySelector('.button3');
let out3 = document.querySelector(".out3");

button3.onclick = function() {
    out3.innerHTML = (+number1.value + +number2.value);
    number1.value = "";
    number2.value = "";
};


let y = document.querySelector(".y");
y.style.border = '2px solid red';

let input7 = document.querySelector(".input7");
let button4 = document.querySelector(".button4");

button4.onclick = function() {
    let valueInput7 = input7.value;
    valueInput7 = parseInt(valueInput7);
    console.log(valueInput7);
};