const li = document.createElement('li');
const ul = document.querySelector('.list');
const inputBox = document.querySelector('input');

const addBtn = document.querySelector('#button');

const removeBtn = document.querySelector('.remove-btn');

removeBtn.addEventListener('click', () => {
  const targetLi = document.querySelector('li#target');
  targetLi.remove();
});

//삭제 버튼 추가
addBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = inputBox.value;

  // 새로운 삭제 버튼 생성
  const button = document.createElement('button');
  button.textContent = '❌';

  // 삭제 버튼 이벤트 리스너 추가
  button.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(button);
  ul.appendChild(li);

  inputBox.value = ' ';
  inputBox.focus();
});

//앞에 추가
const addBefore = document.querySelector('#before');
const targetLi = document.querySelector('#target');
addBefore.addEventListener('click', () => {
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});
