'use strict';

//1) 변수 생성

const fruits = ['사과', '배', '딸기', '참외', '키위'];
//const fruits = new Array('사과', '배', '딸기');
console.log(fruits);

//2) 자주 사용하는 배열 API
//length
console.log('fruits.length: ', fruits.length);
console.log('마지막 값 : ', fruits[fruits.length - 1]);

//push()
fruits.push('귤원식');
console.log(fruits);

fruits.push('파인애플 원식');
console.log(fruits);

//forEach()

fruits.forEach((i, index) => {
  console.log(index + ':' + i);
});

//pop() --> 뒤에서부터 제거
const removedItem = fruits.pop();
console.log(removedItem);
console.log(fruits);

//shift() --> 앞에서부터 제거
fruits.shift();
console.log(fruits);

//unshift() --> 앞에서부터 추가
fruits.unshift('수박');
console.log(fruits);

//indexOf --> 내가 찾고 싶은 품목이 인덱스 몇번에 있는지

console.log(fruits.indexOf('귤원식'));

//splice() 특정 인덱스의 값을 제거
fruits.splice(1, 1);
console.log(fruits);
//인덱스 몇번 부터 몇개 제거할래? --> 인덱스 1번부터 2개 제거할게!

const fruitIndex = fruits.indexOf('키위');
fruits.splice(fruitIndex, 1);
console.log(fruits);
