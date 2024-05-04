const rectangle = document.querySelector('#rectangle');

const body = document.querySelector('body');

rectangle.addEventListener('mousedown', (event) => {
  console.log('clientX : ', event.clientX, 'clientY :', event.clientY);

  console.log('pageX : ', event.pageX, 'pageY :', event.pageY);
});

body.addEventListener('click', (event) => {
  const div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = event.pageX - 25 + 'px';
  div.style.top = event.pageY - 25 + 'px';

  body.appendChild(div);
});
