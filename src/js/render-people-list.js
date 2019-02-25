import AddPeopleCard from './add-people-card.js';

export default peopleList => {
  for (let personInfo of peopleList) {
    AddPeopleCard(personInfo);
  }
};
