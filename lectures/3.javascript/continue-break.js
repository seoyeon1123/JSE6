'use strict';

let text = ' ';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  if (i === 7) {
    break;
  }
  text = text + i;
}

console.log(text);
