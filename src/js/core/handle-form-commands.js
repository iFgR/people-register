import SavePerson from '../model/save-person.js';
import RefreshPeopleList from '../core/refresh-people-list.js';
import GetPersonByInfoId from '../model/get-person-info-by-id.js';
import SetEditForm from './set-edit-form.js';
import { RemovePerson } from '../store/store-engine.js';
import resetModalForm from './reset-modal-form.js';

const listMethods = {
  savePerson: ($event) => {
    $event.preventDefault();
    SavePerson();
    RefreshPeopleList();
    listMethods.closeModal();
  },
  editPerson: personId => {
    const modal = document.getElementsByClassName('save-modal')[0];
    modal.classList.remove('hidden');
    const personInfo = GetPersonByInfoId(personId);
    SetEditForm(personInfo);
  },
  removePerson: personId => {
    RemovePerson(personId);
    RefreshPeopleList();
  },
  previousPage: () => { },
  nextPage: () => {
    if (window.actualPage + 1 < maxLimitPages()) {
      window.actualPage++;
      RefreshPeopleList();
    }
  },
  previousPage: () => {
    if (window.actualPage - 1 >= 0) {
      window.actualPage--;
      RefreshPeopleList();
    }
  },
  addNewPerson: () => {
    const modal = document.getElementsByClassName('save-modal')[0];
    modal.classList.remove('hidden');
  },
  closeModal: () => {
    resetModalForm()
    const modal = document.getElementsByClassName('save-modal')[0];
    modal.classList.add('hidden');
  }
};

export default () => {
  Object.assign(window, listMethods);
};

const maxLimitPages = () => {
  return Math.ceil(window.countPeople / window.perPage);
}