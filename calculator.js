
let numberOne = Number(prompt ('Enter the first number: '));
let numberTwo = Number(prompt ('Enter the second number:: '));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const rest = numberOne % numberTwo;


alert (`Sum result: ${sum}`);
alert (`Subtraction result: ${sub}`);
alert (`Multiplication result: ${multi}`);
alert (`Division result: ${div.toFixed(2)}`)
alert (`Remainder result: ${rest}`);
if (sum % 2 === 0) {
    alert (`The sum of the two numbers is even.`)
} else {
    alert (`The sum of the two numbers is odd.`)
}
if (numberOne === numberTwo) {
    alert ('The numbers entered are equal.')
}else {
    alert ('The numbers entered are different.')
}
