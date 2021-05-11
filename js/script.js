// var a = +prompt('Первая цифра')
// var b = +prompt('Вторая цивра' )

// if (a > b){
//     alert('Цифра' + " " + a + " " + 'больше чем' + ' ' + 'цифра' + ' ' + b)
// }else if (a < b){
//     alert('Цифра' + " " + a + " " + 'меньше чем' + ' ' + 'цифра' + ' ' + b)
// }else if(a === b){
//     alert('Цифра' + " " + a + " " + 'равна' + ' ' + 'цифре' + ' ' + b)
// }else{
//     alert('Ошибка ввода!!!')
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var ask = +prompt('Введите номер своей квартиры.')

// if(ask <= 20){
//     alert('Введенная вами квартира находится в "1" подъезде дома')
// }else if(ask <= 48){
//     alert('Введенная вами квартира находится во "2" подъезде дома')
// }else if(ask <= 90){
//     alert('Введенная вами квартира находится в "3" подъезде дома')
// }else{
//     alert('Введенный вами номер квартиры не существует!!!')
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var askLogIn = prompt('Enter your "LogIn"');


var LogIn1 = 'ivan';
var LogIn2 = 'alex';
var LogIn3 = 'petr';

var password1 = 334455;
var password2 = 777;
var password3 = 'b5678';

if(askLogIn === LogIn1){
    var askPassword1 = prompt('Enter your "Password"')
}else if(askLogIn === LogIn2){
    var askPassword2 = prompt('Enter your "Password"')
}else if(askLogIn === LogIn3){
    var askPassword3 = prompt('Enter your "Password"')
}else{
    alert('error')
}

if(askPassword1 == password1 ){
    alert('Добро пожаловать "ivan"')
}else if(askPassword2 == password2 ){
    alert('Добро пожаловать "alex"')
}else if(askPassword3 == password3 ){
    alert('Добро пожаловать "petr"')
}else{
    alert('error')
}