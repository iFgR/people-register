export default personInfo => {
  const listContainer = document.querySelector('.list');
  const listItem = document.createElement('li');
  listItem.className = 'card-list';
  const formattedPersonInfo = formatTemplateInfo(personInfo);
  console.log(formattedPersonInfo);
  listItem.innerHTML = tplPeopleCard(formattedPersonInfo);
  listContainer.appendChild(listItem);
};

const formatTemplateInfo = (personInfo) => ({
  ...personInfo,
  activeIcon: personInfo.isActive ? '<i class="fas fa-check-square fa-2x"></i>' : '<i class="far fa-check-square fa-2x"></i>'
})

const tplPeopleCard = ({ id, personName, phone, activeIcon, isActive, cpf, birthday, gender, email }) => `
  <div class="status ${isActive ? '-active' : ''}">
    ${activeIcon}
  </div>
  <div class="identification">
    <h4 title="Nome" class="personname"><i class="fas fa-user-alt fa-sm icon"></i>${personName}</h4>
    <h5 title="e-mail" class="email"><i class="fas fa-envelope fa-sm icon"></i>${email}</h6>
    <div class="more-info">
      <h5 title="CPF"><i class="fas fa-id-card fa-sm icon"></i>${cpf}</h6>
      <h5 title="Telefone"><i class="fas fa-phone icon"></i>${phone}</h6>
    </div>
  </div>
  <div class="information">
    <h4 class="birthday"><i class="far fa-calendar-alt fa-sm icon"></i>${birthday}</h5>
    <h6>${gender === 'male' ? 'Masculino' : 'Feminino'}</h5>
  </div>

  <div class="commands">
    <button class="btn -primary command" onclick="editPerson('${id}')">Editar</button>
    <button class="btn -default command" onclick="removePerson('${id}')">Remover</button>
  </div>
`;
