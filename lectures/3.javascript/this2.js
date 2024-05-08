let person = {
  name: '이서연',
  age: 25,
  hello() {
    setTimeout(() => {
      console.log(this);
      console.log(this.name);
      console.log(this.age);
    }, 3000);
  },
};

person.hello();

let person2 = {
  name: '이서연',
  age: 25,
  hello() {
    setTimeout(function () {
      console.log(this);
      console.log(this.name);
      console.log(this.age);
    }, 3000);
  },
};

person2.hello();

let person3 = {
  name: '짐코딩',
  printThis() {
    console.log(this);
  },
};

person3.printThis();
