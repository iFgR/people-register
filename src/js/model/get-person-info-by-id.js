import { ListPeople } from '../store/store-engine.js';

export default (personId) => {
  const peopleList = ListPeople();
  const personInfo = peopleList.filter((personItem) => {
    return personItem.id === personId;
  });

  return personInfo.length > 0 ? personInfo[0] : null;
}