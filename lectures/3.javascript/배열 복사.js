const source = ['사과', '배', '딸기', '바나나', '귤'];

//얕은 복사
const target = source;
target[1] = '표원식';

console.log('target: ', target);
console.log('source: ', source);

//깊은 복사 (1. 스프레드 활용)
const target1 = [...source];
console.log('target1 : ', target1);
target1[3] = '표원식 바나나 고츄';
console.log('target1 : ', target1);
console.log('source: ', source);

//깊은 복사 (2. Array.from()메서드 활용)
const target2 = Array.from(source);
console.log('target2 : ', target2);
target2[0] = '사과는 엉덩이';
console.log('target2 : ', target2);
console.log('source: ', source);
