// console.log('hello')
// function output(str) {
//     console.log(str)
// }

// output('hello')

// function sum(num1, num2) {
//     alert(num1 + num2)
// }
// let n1 = 82;
// let n2 = 65;
// sum(n1, n2);
// function concat(str1, str2) {
//     return (str1 + str2);
// }
// s1 = 'Hello ';
// s2 = 'World! ';
// let x = concat(concat(s1, s2), 'my name is Bekhzod');


// function decrement(num) {
//     if(num > 0) {
//         console.log(num)
//         num--;
//         return decrement(num)
//     }
// }
// decrement(12)

// function buttonClick() {
//     document.write('You have banned')
//     document.write('<button onclick="buttonClick()">Touch id</button>')
// }

// function buttonClick() {
//    let space = document.getElementById('space')
// //    console.log(space.innerHTML)
// space.innerHTML = '<p>Ne najimay</p>'
// }

function calculate() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result')

    let value1 = Number(num1.value)
    let value2 = Number(num2.value)
    result.innerHTML = value2 / (value1 * value1);
}
