'use strict';

//객체 리터럴 방식
const person = {
  name: '이서연',
  age: 25,
};

person.job = '예비 개발자';

console.log(person);

//객체 생성자 문법
const person1 = new Object();
person1.name = '표원식';
person1.age = 27;

console.log(person1);

console.log(' -------------- ');

const person3 = {
  name: ['Lee', 'Pyo'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hello!');
  },
  greeting: function () {
    alert('Hi!');
  },
  hobby: {
    name: 'programing',
    alert: function () {
      alert('programing');
    },
  },
};

//점표기법
console.log(person3.name[0]);
// person3.hello();
console.log(person3.hobby.name);
//console.log(person3.hobby.alert());

//괄호 표기법

console.log(' ------------ ');
console.log(person3['name']);
console.log(person3['name'][0]);
console.log(person3['name'][1]);
//console.log(person3['hello']());
//console.log(person3['hobby']['alert']());

person3['name'][0] = '투서연부리';
console.log(person3['name']);

console.log(' ------------ ');
delete person3.gender;
delete person3['age'];
console.log(person3);
