'use strict';

const myName = '이서연';
console.log(myName);

function changeName(name) {
  name = '표원식';
}

changeName(myName);
console.log(myName);

console.log(' ---------- ');

const person = {
  name: '이서연',
  age: 25,
};

console.log(person);
changePersonName(person);
console.log(person);

function changePersonName(person) {
  person.name = '표원식';
  person.age = 27;
}

///객체에서 스프레드 복사 하는 방법
console.log(' ------------ ');

const person2 = {
  ...person,
  job: '예비 프로그래머',
  hobby: '헬스',
};

console.log(person2);

console.log(' -------- ');

const person4 = {
  name: '이서연',
  age: 25,
};

const person5 = person4;
console.log(person4);
console.log(person5);

person5.name = '이서연일까?';
console.log(person5);
console.log(person4);

person5.job = '예비 프로그래머';
person4 = { hobby: '헬스' };
console.log(person5);
console.log(person4);
