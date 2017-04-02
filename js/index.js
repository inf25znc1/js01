// var greetings = 'Hello World!';
// alert (greetings);
// document.write(greetings);
// console.log(greetings);

// var userName = prompt('Your name: ');
// var greetings = 'Hello ' + userName;
// document.write (greetings);

// var userAge = Number(prompt('Your age: '));
// var nextAge = userAge + 1;
// document.write ('Soon you will be ' + nextAge);

// function task(x,y,z) {
//     var result = x * x - 5 * x + 4
//     return result;
// }

// var x = Number(prompt('please enter the X value: '));
// var y = Number(prompt('please enter the Y value: '));
// var z = Number(prompt('please enter the Z value: '));
// var calc = task(x, y, z);
// document.write(calc);

// function tellAge(age) {
//     if (age < 18) {
//         return 'Kid';
//     } else {
//         return 'Adult';
//     }
// }

// var age = Number(prompt('Your age: '));
// document.write(tellAge(age));




var a = Number (prompt("Type in the a veriable:"));
var b = Number (prompt("Type in the b veriable:"));
var c = Number (prompt("Type in the c veriable:"));
var ac = 4 * a * c;
var numer = Math.sqrt((b * b) - ac);
var denom = 2 * a;
var sol1 = (-b + numer) / denom;
var sol2 = (-b - numer) / denom;
document.write('Solution one is: ' + sol1);
document.write(' Solution two is: ' + sol2);

