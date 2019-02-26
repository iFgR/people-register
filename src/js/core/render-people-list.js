import AddPeopleCard from './add-people-card.js';

export default peopleList => {
  const initialItem = window.actualPage * window.perPage;
  const endItem = initialItem + window.perPage;

  const paginatedList = peopleList.slice(initialItem, endItem);

  document.getElementsByName('actualPage')[0].value = window.actualPage;
  
  for (let personInfo of paginatedList) {
    AddPeopleCard(personInfo);
  }
};
