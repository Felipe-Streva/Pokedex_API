
let pokedex = document.querySelector("#pokeName");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let reset = document.querySelector("#reset");


one.onclick = function() {
    pokedex.value += 1;
}

two.onclick = function() {
    pokedex.value += 2;
}

three.onclick = function() {
    pokedex.value += 3;
}

four.onclick = function() {
    pokedex.value += 4;
}

five.onclick = function() {
    pokedex.value += 5;
}

six.onclick = function() {
    pokedex.value += 6;
}

seven.onclick = function() {
    pokedex.value += 7;
}

eight.onclick = function() {
    pokedex.value += 8;
}

nine.onclick = function() {
    pokedex.value += 9;
}

zero.onclick = function() {
    pokedex.value += 0;
}

reset.onclick= function() {
    pokedex.value = "";
}
