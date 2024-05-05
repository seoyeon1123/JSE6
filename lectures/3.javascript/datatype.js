'use strict';

//1)숫자
let number = 1;
const number2 = 1.2;

console.log(number);
console.log(number2);

console.log(5 / 0);
console.log(-5 / 0);

const nan = 'hello' / 0;

console.log(typeof nan);

//2)문자
const name = '이서연';
const age = '25';

console.log(`안녕? 내 이름은 ${name} 이고, 내 나이는 ${age}살 이야`);

const hello = "안녕하세요.\n저의 이름은 '예쁜이' 입니다.";

console.log(hello);

// 3) boolean
// console.log(isProgrammer);
// console.log(isDesinger);
// console.log(typeof isProgrammer);

const isProgrammer = true;
const isDesinger = false;

const result = isProgrammer ? '프로그래머 입니다' : '디자이너 입니다';

console.log(result);

//4) null, undefined
//빈 값인 것을 나타내고 싶을 때
const username = null;
console.log(username);

let username2;
console.log(username2);
