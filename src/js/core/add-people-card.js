export default personInfo => {
  const listContainer = document.querySelector('.list');
  const listItem = document.createElement('li');
  listItem.className = 'card-list';
  listItem.innerHTML = tplPeopleCard(personInfo);
  listContainer.appendChild(listItem);
};

const tplPeopleCard = ({ id, personName, phone, isActive, cpf, birthday }) => `
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
    <button type="button" onclick="editPerson('${id}')">Editar</button>
    <button type="button" onclick="removePerson('${id}')">Remover</button>
  </div>
`;