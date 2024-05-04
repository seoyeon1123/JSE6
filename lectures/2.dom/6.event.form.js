const inputBox = document.querySelector('#input-box');

const img = document.querySelector('img');

// inputBox.addEventListener('keypress', (e) => {
//   console.log('keypress');
// });

// inputBox.addEventListener('keydown', (e) => {
//   console.log('keydown');
// });

// inputBox.addEventListener('keyup', (e) => {
//   console.log('e.key : ' + e.key);
//   console.log('e.keyCode : ' + e.keyCode);
// });

// inputBox.addEventListener('keydown', (e) => {
//   // 키가 입력될 때마다 inputBox의 배경색을 파란색으로 변경
//   inputBox.style.backgroundColor = 'yellow';
// });

// inputBox.addEventListener('keyup', (e) => {
//   // 입력이 끝나면 inputBox의 배경색을 다시 원래대로 되돌림
//   inputBox.style.backgroundColor = '';
// });

// inputBox.addEventListener('focus', () => {
//   alert('focus 성공');
// });

// inputBox.addEventListener('blur', () => {
//   alert('blur 실행');
// });

inputBox.addEventListener('change', () => {
  console.log('입력값 변경');
});

img.addEventListener('error', (e) => {
  console.log('error!');
  img.src = '../img/apple.jpg';
});
