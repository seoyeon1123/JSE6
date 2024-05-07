'use strict';

console.log('안녕');
const message = prompt('이름과 나이를 입력해주세요');
const [name, age] = message.split(',');
console.log(name, age);
//함수 선언식 --> 화살표 함수

const sayHello = (name, age) => {
  alert(`안녕하세요. ${age}살, ${name}님`);
};

sayHello(name, age);

//함수 표현식
const print = (name, age) => {
  console.log('안녕하세요');
  console.log(`${name}, ${age}님`);
};

// print(name, age);

console.log(' ----------');

const sum = (num1, num2 = 10) => num1 + num2;

const result = sum(3, 4);
const result2 = sum(300);
console.log(result);
console.log(result2);

console.log(' ----------');
//화살표 함수
const hello = (name) => {
  console.log(`hello ~ ${name} ~!`);
};

hello('표원식');
