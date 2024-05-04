const rectangle = document.querySelector('#rectangle');

const body = document.querySelector('body');

rectangle.addEventListener('mousedown', (event) => {
  console.log('clientX : ', event.clientX, 'clientY :', event.clientY);

  console.log('pageX : ', event.pageX, 'pageY :', event.pageY);
});

body.addEventListener('click', (event) => {
  console.log('pageX : ', event.pageX, 'pageY :', event.pageY);

  const div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = event.pageX - 25 + 'px';
  div.style.top = event.pageY - 25 + 'px';
  body.appendChild(div);
});

// rectangle.addEventListener('mouseup', (e) => {
//   console.log('mouseup');
// });

// rectangle.addEventListener('mouseenter', (e) => {
//   console.log('mouseenter');
// });

// rectangle.addEventListener('mouseleave', (e) => {
//   console.log('mouseleave');
// });

// rectangle.addEventListener('mousemove', (e) => {
//   console.log('mousemove');
// });

// rectangle.addEventListener('mousedown', (e) => {
//   rectangle.classList.add('rectangle-red');
// });

// rectangle.addEventListener('mouseup', (e) => {
//   rectangle.classList.remove('rectangle-red');
// });

// rectangle.addEventListener('mouseenter', () => {
//   rectangle.classList.add('rectangle-blue');
//   rectangle.classList.remove('rectangle-yellow');
// });

// rectangle.addEventListener('mouseleave', () => {
//   rectangle.classList.remove('rectangle-blue');
//   rectangle.classList.add('rectangle-yellow');
// });
