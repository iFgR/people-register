import CreateNewPerson from './create-new-person.js';

const listMethods = {
  savePerson: ($event) => {
    $event.preventDefault();
    CreateNewPerson();
  },
  editPerson: personId => {
    console.log('edit', personId);
  }
};

export default () => {
  Object.assign(window, listMethods);
};
