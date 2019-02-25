'use strict';

export default () => {
  const x = document.querySelector('.list');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h4>---</h4>
    <button type="button" onclick="editPerson()">click</button>
  `;
  // listItem.addEventListener('click', () => {
    // console.log('a');
    // myName();
  // })
  x.appendChild(listItem);
}

const myName = () => {
  console.log('======');
}