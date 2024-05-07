'use strict';

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const fruits = ['사과', '배', '포도', '딸기', '귤'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const person = {
  name: '이서연',
  age: 25,
  job: '개발자',
};

// const key = prompt('키를 입력해주세요.');
// console.log(person[key]);

//for in을 사용하기 전에는
const keys = Object.keys(person);
console.log(keys);

console.log('------------------');

for (const key in person) {
  console.log(key);
  console.log(person[key]);
}

console.log('------------------');
const fruits1 = ['사과', '배', '포도', '딸기', '귤'];

for (const key of fruits1) {
  console.log(key);
}
