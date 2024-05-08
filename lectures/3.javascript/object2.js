'use strict';

function printPerson({ name, age, hobby }) {
  console.log(
    `제 이름은 ${name}이고, 나이는 ${age}살 이며, 취미는 ${hobby}입니다.`
  );
}

const person = {
  name: '이서연',
  age: 25,
  hobby: '헬스',
};
printPerson(person);

const { name, age, hobby } = person;
console.log(name);
console.log(age);
console.log(hobby);

console.log(' ---------- ');

const fruits = ['사과', '포도', '귤', '딸기'];
const [a, b, ...others] = fruits;

console.log(a);
console.log(b);
console.log(others[0]);
console.log(others[1]);

console.log(' ---------- ');

function printPerson({ name, age, hobby }) {
  console.log(
    `제 이름은 ${name}이고, 나이는 ${age}살 이며, 취미는 ${hobby}입니다.`
  );
}

function createPerson(name, age, hobby) {
  return {
    name,
    age,
    hobby,
  };
}

const person5 = createPerson('표투식', 2, '헬스');
const person6 = createPerson('표쓰리식', 38, '뒹굴기');

printPerson(person5);
printPerson(person6);
