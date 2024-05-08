let person = {
  fullname: '이서연',
  age: 25,
  printThis() {
    console.log(this);
    console.log(this === person);
    console.log(this === window);
  },
};

let printThis = person.printThis;
printThis();

function printThis() {
  console.log(this);
}

printThis();

let person1 = {
  name: 'LEE',
};

let printThis1 = printThis.bind(person1);

printThis1();

console.log(' ---------- ');

setTimeout(() => {
  alert('폭발합니다!!!!!!!!!!');
}, 3000);
