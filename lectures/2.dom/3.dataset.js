let h2 = document.querySelector('h2');
h2.dataset.test = 'hello Javascript!';
console.log('h2.dataset.test: ', h2.dataset.test);

let img = document.querySelector('img');
let liList = document.querySelectorAll('li');

const item = document.querySelector('.selected-item');

// liList[0].addEventListener('click', selectItem);
// liList[1].addEventListener('click', selectItem);
// liList[2].addEventListener('click', selectItem);

// function selectItem(e) {
//   img.setAttribute(e.target.dataset.img);
//   item.textContent = e.target.textContent + '를 선택하셨습니다.';
// }

liList.forEach((li) => {
  li.addEventListener('click', selectItem);
});

function selectItem(e) {
  // 클릭된 li 요소의 data-img 속성값을 사용하여 이미지의 src 속성값 설정
  img.setAttribute('src', e.target.dataset.img);
  // 선택된 항목을 표시하는 요소에 선택된 과일을 표시
  item.textContent = e.target.textContent + '를 선택하셨습니다.';
}
