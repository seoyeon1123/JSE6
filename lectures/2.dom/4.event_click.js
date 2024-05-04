const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn1.onclick = function () {
  alert('Hello 프로퍼티 리스너');
};

btn2.addEventListener('click', addEvent1);

function addEvent1() {
  alert('addEventListener!');
}

btn2.removeEventListener('click', addEvent1);

btn2.addEventListener('click', () => {
  alert('안녕 나는 addEventListener 이지롱 ');
});
