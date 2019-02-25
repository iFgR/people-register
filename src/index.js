import AddPeopleCard from './js/add-people-card.js';
import HandleListCommands from './js/handle-list-commands.js';

const peopleList = [
  {
    personId: 1,
    personName: 'Alberto Roberto'
  },
  {
    personId: 2,
    personName: 'Rolando Lero'
  }
];

for (let personInfo of peopleList) {
  AddPeopleCard(personInfo);
}

HandleListCommands();
