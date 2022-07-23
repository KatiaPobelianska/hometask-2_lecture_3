"use strict";

// task - 1  var, let, const

// let a = "A";
// let t = "T";
// let u = "U";

// console.log("Vars: ", a, t, u);

// task - 2
// 2.1

// const myPersonalInfo = {
//   name: "Cat",
//   surname: "White",
//   age: "+18",
// };
// console.log(myPersonalInfo.name);
// console.log(myPersonalInfo.surname);
// console.log(myPersonalInfo["age"]);

// 2.2

// const name = "Cat";
// const surname = "White";
// const isHappy = true;
// console.log(name);
// console.log(surname);
// console.log(isHappy);

// task-3 Date

// var today = new Date();
// var day = today.getDate();
// var month = today.getMonth() + 1;
// var year = today.getFullYear();

// if (day < 10 && month < 10) day = "0" + day;
// month = "0" + month;

// today = day + "-" + month + "-" + year;
// console.log(today);

// let now = new Date();
// alert(now);

// task-4 URL
// console.log(document.URL);

// https://github.com/KatiaPobelianska/hometask-2_lecture_3

// const link = document.querySelector(".hero-link");
// const link = document.getElementsByTagName("a")[0];
// console.log(link["href"]);
// console.log(link.href);

// task-5 Число 5934
// Результат 5, 9, 3, 4

// Получаем число от пользователя
// var num = prompt("Введите число с 4 цифрами:");
// // Разделяем и получаем первое число
// // Также округляем, чтобы получить целое число
// var n1 = Math.floor((num / 1000) % 10);
// // Разделяем и получаем второе число
// var n2 = Math.floor((num / 100) % 10);
// // Разделяем и получаем третье число
// var n3 = Math.floor((num / 10) % 10);
// // Разделяем и получаем четвертое число
// var n4 = Math.floor(num % 10);
// // Выводим все в консоль
// console.log(n1 + ", " + n2 + ", " + n3 + ", " + n4);

// var num = prompt("num");
// var n1 = Math.floor(num % 10);

// var num = prompt("White down number with 5 sighs");
// var n1 = Math.floor((num / 10000) % 10);
// var n2 = Math.floor((num / 1000) % 10);
// var n3 = Math.floor((num / 100) % 10);
// var n4 = Math.floor((num / 10) % 10);
// var n5 = Math.floor(num % 10);

// console.log(n1 + ", " + n2 + ", " + n3 + ", " + n4 + ", " + n5 + ", ");

// task-5 n=23 => n+n*2 => 69

// var num = prompt("Whrite your number: ");
// var n1 = parseInt(num);
// var n2 = parseInt(num * 2);
// console.log(n2);

// const num = prompt("whrite number");
// function result() {
//   return num * 2;
// }
// console.log(result());

// task-6
// var num = 46;
// var string = "st6r0in8g";
// var letters = /[0-9]/;

// num *= 5;
// string.split(letters);
// console.log(num);
// console.log(string);

// var string5 = "a2b3c4d"; // инициализируем строковую переменную
// var numbers = [0 - 9]; // инициализируем переменную, содержащую регулярное выражение

// string5.split(numbers);
// console.log(string5);

// task-7 URL of website

// var website = prompt("whrite the name of your website");
// var result = website.split("."); // Разделяем слово по символу точка
// console.log("Name: " + result[0]);

// task-8 vars
// var num = 5;
// var letter = "F";
// var string = "Hello";
// var x = 90.2;

// const my_fav = 67;

// console.log(string);
