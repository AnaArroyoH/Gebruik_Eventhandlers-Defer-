const body = document.querySelector('body');
const buttonClick = document.querySelector('#mybutton');
// const mybutton2 = document.querySelector('#mybutton2');
// const buttonClick = document.getElementById('mybutton');
const buttonChangeColor = document.querySelector(".Change-background");

// Opdracht 1: Een click event vastmaken aan een button
const clickAlert = () => {
    alert('Button clicked');
}
buttonClick.addEventListener('click', clickAlert);

// Opdracht 2:
// const changeBackground = () => {
//     body.classList.remove("blue-background"); // deze is niet perse nodig
//     body.classList.add("red-background");
// };
// buttonChangeColor.addEventListener('click', changeBackground);

// Opdracht 3:
const toggleBackground = () => {
    body.classList.toggle("red-background");
}
buttonChangeColor.addEventListener('click', toggleBackground);

// Ander manier van de alert schijrven
// buttonClick.addEventListener('click', function () {
//     alert('Button clicked');
// });


