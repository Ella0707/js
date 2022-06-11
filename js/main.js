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


const b1 = document.querySelector(".b1");
const i1 = document.querySelector(".i1");
const out4 = document.querySelector(".out4");

b1.onclick = () => {
    let i1Value = +i1.value;

    if (i1Value == 4) {
        out3.innerHTML = i1Value;
    }

    else {
        out4.innerHTML = "No";
    }
}


const b6 = document.querySelector(".b-6");
const i6 = document.querySelector(".i-6");
const out6 = document.querySelector(".out-6");

b6.onclick = () => {
    let i6Value = +i6.value;

    if (i6Value % 2 == 0) {
        out6.innerHTML = "even";
    }

    else {
        out6.innerHTML = "odd";
    }
}


const b7 = document.querySelector(".b-7");
const i71 = document.querySelector(".i-71");
const i72 = document.querySelector(".i-72");
const out7 = document.querySelector(".out-7");

b7.onclick = () => {
    let i71Value = +i71.value;
    let i72Value = +i72.value;

    out7.innerHTML = Math.pow(i71Value, i72Value);
}

// && - и

// || или

const b8 = document.querySelector(".b-8");
const s8 = document.querySelector(".s-8");
const out8 = document.querySelector(".out-8");

b8.onclick = () => {
    let s8Value = s8.value;

    switch (+s8Value) {
        case 1:
            out8.innerHTML = "one";
            break;
        case 2:
            out8.innerHTML = "two";
            break;
        case 3:
            out8.innerHTML = "three";
            break;
    }
}