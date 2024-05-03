console.log('!!!');
console.log('너눈 누구야?');
// alert('너는 바보야!!!');

let str = 'Hello JavaScript';
let number = 123456789;
console.log('문자열 : ', str);
console.log('숫자열 : ', number);

function sayHello() {
  console.log('Hello!');
  console.log('Hello!2');
  console.log('Hello!3');
}

console.log(sayHello());

const obj = {
  number: 30,
  sayHello: function () {
    console.log('obj Hello!');
    console.log('obj Hello!2');
    console.log('obj Hello!3');
  },
};

console.log(obj.sayHello());
