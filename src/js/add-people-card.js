export default personInfo => {
  const listContainer = document.querySelector('.list');
  const listItem = document.createElement('li');
  listItem.className = 'card-list';
  listItem.innerHTML = tplPeopleCard(personInfo);
  listContainer.appendChild(listItem);
};

const tplPeopleCard = ({ personId, personName, phone, isActive, cpf, birthday }) => `
  <div class="status">
    ${isActive}
  </div>
  <div class="identification">
    <h4>${personName}</h4>
    <h6>${cpf}</h6>
  </div>
  <div class="info">
    <h6>${birthday}</h6>
    <h6>${phone}</h6>
  </div>
  <div class="commands">
    <button onclick="editPeron(${personId})">Editar</button>
  </div>
`;
