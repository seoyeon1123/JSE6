'use strict';

const number = -1;

if (number) {
  console.log('true');
} else {
  console.log('false');
}

const score = prompt('수학 점수를 입력해주세요');
console.log('score :', score);

if (score >= 90) {
  console.log('등급은 A 입니다');
} else if (score >= 80) {
  console.log('등급은 B 입니다');
} else if (score >= 70) {
  console.log('등급은 C 입니다');
} else if (score >= 60) {
  console.log('등급은 D 입니다.');
} else {
  console.log('등급은 F 입니다');
}
