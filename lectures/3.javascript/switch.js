'use strict';

const subject = 'html';

switch (subject) {
  case 'javascript':
    console.log('나는 javascript');
    const result = 1 + 3;
    console.log(result);
    break;

  case 'css':
    console.log('나는 css');
    break;

  case 'html':
    console.log('나는 html');
    break;

  default:
    console.log('default 수행문 입니다');
}

console.log('switch문 종료');

const score = prompt('수학 점수를 입력하세요');
console.log('score :', score);

const value = Math.floor(score / 10);
console.log(value);
switch (value) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
  case 7:
    console.log('B');
    break;
  case 6:
  case 5:
    console.log('C');
    break;
  default:
    console.log('D');
}
