export default personInfo => {
  const listContainer = document.querySelector('.list');
  const listItem = document.createElement('li');
  listItem.className = 'card-list';
  listItem.innerHTML = tplPeopleCard(personInfo);
  listContainer.appendChild(listItem);
};

const tplPeopleCard = ({ personId, personName }) => `
  <div class="status">
    <button>Ativado</button>
  </div>
  <div class="identification">
    <h4>${personName}</h4>
    <h6>056.235.478-22</h6>
  </div>
  <div class="info">
    <h6>10/08/1999</h6>
    <h6>(22) 98866-2211</h6>
  </div>
  <div class="commands">
    <button onclick="editPerson(${personId})">Editar</button>
  </div>
`;
