//get 메서드

const title = document.getElementById('title');
console.log(title);

title.textContent = '3대 운동';

const items = document.getElementsByClassName('item');

console.log(items);
console.log(items[0]);
console.log('벤치 프레스 : ', items[1]);

const liList = document.getElementsByTagName('li');
console.log(liList);

//쿼리 메서드
const h2 = document.querySelector('#title');
console.log(h2);

const item = document.querySelector('.item');
console.log(item);
//querySelector에 선택된 css 속성이 여러개면 맨 첫번째 것만 가져옴

const itemAll = document.querySelectorAll('.item');
console.log(itemAll);

// h2.textContent = '헬스 3대 운동';
h2.innerHTML = '<span>3대 운동 열심히 하자</span>';

// document.querySelector('body').innerHTML = '<strong>운동</strong>';
//innerHTML, textContent은 바꾸면 이전의 태그 를 모두 삭제하기 때문에 주의

document.querySelector('input').setAttribute('placeholder', '오늘 할 운동은 ?');
// document.querySelector('input').removeAttribute('placeholder');

const helloItem = document.querySelector('.hello');
console.log('helloItem : ', helloItem);

// helloItem.style.color = 'blue';
// helloItem.style.backgroundColor = 'hotPink';

helloItem.classList.add('dark');
helloItem.classList.remove('dark');
