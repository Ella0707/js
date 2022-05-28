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

}

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
}