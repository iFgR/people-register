'use strict';

export default () => {
  const x = document.querySelector('.list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h4>---</h4>
  `;
  listItem.addEventListener('click', () => {
    console.log('a');
    window.myName();
  })
  x.appendChild(listItem);
}
