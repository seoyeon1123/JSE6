'use strict';

let teacher = '이서연';
console.log(teacher);

teacher = '이서연부리';
console.log(teacher);

const username = '표원식';
console.log(username);

{
  let a = '변수';
  console.log('a:', a);
  {
    let c = 'c변수';
    console.log('c:', c);
    console.log('c 변수 안에 a:', a);
  }
}

const a = sum(1, 4);
console.log(a);

function sum(a, b) {
  const result = a + b;
  return result;
}
