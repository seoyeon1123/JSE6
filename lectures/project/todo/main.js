//작성하기
//삭제하기
//전체삭제
//리스트 보여주기

const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#input');
const ul = document.querySelector('.to-do-list');

addBtn.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li); // ul에 생성한 li를 추가
  input.value = ''; // 입력 후에 input 값을 비워줌
});
