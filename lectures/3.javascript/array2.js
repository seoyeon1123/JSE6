//3) 구조 분해 할당
// const fruits = ['사과', '바나나', '딸기'];
// const apple = fruits[0];
// const banana = fruits[1];
// const strawberry = fruits[2];

const [apple, banana, strawberry, ...otherFruits] = [
  '사과',
  '바나나',
  '딸기',
  '수박',
  '귤',
  '체리',
];

console.log(apple);
console.log(banana);
console.log(strawberry);
console.log(otherFruits);

//4) 전개 구문
const fruits1 = ['사과', '바나나', '딸기'];
const fruits2 = ['수박', '파인애플!'];
const items = [...fruits1, ...fruits2];
console.log(items);

//5) Rest Parameter

function print(...valuse) {
  valuse.forEach((value, index) => {
    console.log('value :', value, 'index : ', index);
  });
}

print('사과', '바나나', '딸기', '수박', '귤', '체리');
