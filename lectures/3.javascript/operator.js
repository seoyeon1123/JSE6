'use strict';

console.log('hello' + 'world');
console.log('3' + 3); //number -> string 타입으로 변환
console.log(typeof ('3' + 3)); //string
console.log('3' + 5 + 8 + 'hello');
console.log(3 + 5 + '8');
//코드는 왼쪽부터 실행하기 때문에, 3+5 실행 = 8,
//숫자 8이랑 문자 8을 더하면, number -> string 타입으로 변경

// const number = prompt('숫자를 입력해주세요.');

// if (number % 2 === 0) {
//   alert('짝수입니다');
// } else {
//   alert('홀수입니다');
// }

let x = 20;
let y = '20';

console.log(x === y);
console.log(x == y);
console.log(x !== y);
console.log(x != y);

console.log('--------');

let a = 10;
let b = 20;

// a = a + b;
a += b;

console.log(a);

console.log('--------');
//1부터 10까지 더하는 코드
let result = 0;
for (let i = 1; i <= 10; i++) {
  result += i;
  console.log(`${i}번째 result = ${result}`);
}
console.log(result); // 결과를 한 번만 출력
