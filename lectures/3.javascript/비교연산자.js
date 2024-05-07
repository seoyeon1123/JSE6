// const value = prompt('너의 이름을 남겨줄래?');

// if (typeof value === 'string') {
//   alert(`너의 이름은 ${value} 이구나!`);
// }

// const x = true;
// const y = false;

// console.log(x && y); //모두 true 일떄, true 반환, 그 외 false
// console.log(x || y);

const btn = document.querySelector('#btn');
const emailEl = document.querySelector('[name = email]');
const passwordEl = document.querySelector('[name = password]');
btn.addEventListener('click', () => {
  let email = emailEl.value;
  let password = passwordEl.value;

  console.log('email : ', email);
  console.log('password : ', password);

  if (email === '' || !email.includes('@')) {
    alert('이메일을 다시 입력해주세요');
  } else if (!password) {
    alert('비밀번호를 다시 입력해주세요');
  } else if (!(password.length >= 8 && password.length <= 16)) {
    alert('비밀번호는 8~16자 사이로 입력해주세요');
  } else {
    alert('로그인 성공');
  }
});

const number = 10;

if (number % 2 === 0) {
  console.log('짝수 입니다');
} else {
  console.log('홀수 입니다');
}

const message = number % 2 === 0 ? '짝수입니다' : '홀수 입니다';
console.log(message);
