//작성하기
//삭제하기
//전체삭제
//리스트 보여주기

//css를 사용할 때에는 class를, js를 사용할 때에는 id를

const $addBtn = document.querySelector('#add-btn');
const $inputBox = document.querySelector('#input-box');
const $todoList = document.querySelector('#to-do-list');

$inputBox.addEventListener('keyup', function (e) {
  if (e.target.value) {
    $addBtn.classList.add('active');
  } else {
    $addBtn.classList.remove('active');
  }
});

$addBtn.addEventListener('click', function () {
  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $i = document.createElement('i');

  $i.classList.add('fas', 'fa-trash');
  $span.classList.add('icon');
  $span.appendChild($i);

  $li.textContent = $inputBox.value;
  $li.appendChild($span); // 아이콘을 span 뒤에 추가합니다.
  $todoList.appendChild($li);
  $inputBox.value = '';
});
