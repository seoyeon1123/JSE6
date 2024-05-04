let h2 = document.querySelector('h2');
h2.dataset.test = 'hello Javascript!';
console.log('h2.dataset.test: ', h2.dataset.test);

const liList = document.querySelectorAll('li');
const img = document.querySelector('img');
const text = document.querySelector('.selected-item');

// liList[0].addEventListener('click', selectItem);
// liList[1].addEventListener('click', selectItem);
// liList[2].addEventListener('click', selectItem);

liList.forEach((li) => {
  li.addEventListener('click', selectItem);
});

function selectItem(event) {
  img.setAttribute('src', event.target.dataset.img);
  text.textContent = event.target.textContent + '를 선택했습니다.';
}
