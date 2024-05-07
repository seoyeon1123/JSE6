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
