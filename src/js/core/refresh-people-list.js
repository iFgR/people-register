import ListAllPeople from '../model/list-all-people.js';
import RenderPeopleList from './render-people-list.js';
import ResetPeopleList from './reset-people-list.js';

export default () => {
  ResetPeopleList()
  const listPeople = ListAllPeople().sort(sortByName);
  window.countPeople = listPeople.length;
  RenderPeopleList(listPeople);
}

const sortByName = ((a, b) => {
  if (a.personName < b.personName) {
    return -1;
  } else if (a.personName > b.personName) {
    return 1;
  } else {
    return 0;
  }
});