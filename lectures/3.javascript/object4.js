'use strict';

const person = {
  name: '이서연',
  age: 25,
};

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

console.log('name' in person);
if ('name' in person) {
  console.log('존재합니다');
}

console.log(person.hasOwnProperty('name'));
console.log(Object.hasOwn(person, 'name'));

console.log(' ---------------- ');

const person1 = person;
const person2 = { ...person };

person1.name = '표투투';

console.log(person);
console.log(person1);
console.log(person2);
//스프레드 문법을 사용하면
