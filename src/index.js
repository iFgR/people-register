import HandleListCommands from './js/handle-list-commands.js';
import ListAllPeople from './js/list-all-people.js';
import RenderPeopleList from './js/render-people-list.js';

HandleListCommands();

// CreateNewPerson({
//   name: 'Albererto Roberto'
// });


const peopleList = ListAllPeople();
RenderPeopleList(peopleList);
