window.onload = function () {
  /*1. 정사각형
   *****
   *****
   *****
   *****
   *****
   */

  for (let i = 0; i < 5; i++) {
    document.write('*****');
    document.write('<br>');
  }

  /*2. 삼각형
   *
   **
   ***
   ****
   *****
   */
  document.write('<hr>');

  for (let i = 0; i <= 5; i++) {
    document.write('*'.repeat(i));
    document.write('<br>');
  }

  /*3. 삼각형 -reverse
   *****
   ****
   ***
   **
   *
   */

  document.write('<hr>');
  for (let i = 5; i >= 0; i--) {
    document.write('*'.repeat(i));
    document.write('<br>');
  }
  /*
    4] 삼각형2
        *
       **
      ***
     ****
    *****
  */
  document.write('<hr>');
  document.write('<pre>');
  for (let i = 4; i >= 0; i--) {
    let space = ' '.repeat(i);
    let stars = '*'.repeat(5 - i);
    document.write(space + stars + '<br>');
  }
  document.write('<hr>');
  document.write('</pre>');
  /*
    5] 삼각형2-reverse
    *****
     ****
      ***
       **
        *
  */
  document.write('<pre>');
  for (let i = 0; i < 5; i++) {
    let space = ' '.repeat(i);
    let stars = '*'.repeat(5 - i);
    document.write(space + stars + '<br>');
  }
  document.write('</pre>');

  /*
    5] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */

  document.write('<hr>');
  document.write('<pre>');
  for (let i = 0; i < 5; i++) {
    let space = ' '.repeat(5 - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    document.write(space + stars + '<br>');
  }
  document.write('</pre>');

  // 5] 정삼각형-reverse
  // *********
  //  *******
  //   *****
  //    ***
  //     *
  document.write('<hr>');
  document.write('<pre>');
  for (let i = 4; i >= 0; i--) {
    let space = ' '.repeat(5 - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    document.write(space + stars + '<br>');
  }
  document.write('</pre>');
};
