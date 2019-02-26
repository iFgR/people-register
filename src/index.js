import HandleListCommands from './js/core/handle-form-commands.js';
import RefreshPeopleList from './js/core/refresh-people-list.js';

window.countPeople = 1;
window.actualPage = 0;
window.perPage = 3;

HandleListCommands();
RefreshPeopleList();
