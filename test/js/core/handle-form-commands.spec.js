jest.mock('../../../src/js/model/save-person.js');
jest.mock('../../../src/js/core/refresh-people-list.js');
jest.mock('../../../src/js/model/get-person-info-by-id.js');
jest.mock('../../../src/js/core/reset-modal-form.js');
jest.mock('../../../src/js/core/set-edit-form.js');

import HandleFormCommands from '../../../src/js/core/handle-form-commands';
import SavePerson from '../../../src/js/model/save-person.js';
import RefreshPeopleList from '../../../src/js/core/refresh-people-list.js';
import GetPersonByInfoId from '../../../src/js/model/get-person-info-by-id.js';
import SetEditForm from '../../../src/js/core/set-edit-form.js';
import * as Store from '../../../src/js/store/store-engine.js';
import resetModalForm from '../../../src/js/core/reset-modal-form.js';

const mockWindow = {};
const add = jest.fn();
const remove = jest.fn();

describe('handle-form-commands', () => {
  beforeEach(() => {
    document.getElementsByClassName = jest.fn((param) => {
      return [
        {
          classList: {
            add,
            remove
          }
        }
      ]
    });

    document.querySelector = jest.fn((param) => ({
      appendChild
    }));
  });

  describe('fn.savePerson', () => {
    it('Should call SavePerson method', () => {
      HandleFormCommands(mockWindow);
      mockWindow.savePerson({
        preventDefault: jest.fn()
      });

      expect(SavePerson).toBeCalledTimes(1);
      expect(add).toBeCalledTimes(1);
      expect(RefreshPeopleList).toBeCalledTimes(1);
    })
  })

  describe('fn.editPerson', () => {
    it('Should call SetEditForm', () => {
      HandleFormCommands(mockWindow);
      mockWindow.editPerson({
        preventDefault: jest.fn()
      });

      expect(SetEditForm).toBeCalledTimes(1);
    })
  })

  describe('fn.removePerson', () => {
    it('Should call SetEditForm', () => {
      const spyRemovePerson = jest.spyOn(Store, 'RemovePerson')
      HandleFormCommands(mockWindow);
      const personId = 1

      mockWindow.removePerson(personId);

      expect(spyRemovePerson).toBeCalledWith(personId);
      expect(RefreshPeopleList).toBeCalled();
    })
  })

  describe('fn.nextPage', () => {
    it('Should call SetEdiyForm', () => {
      HandleFormCommands(mockWindow);
      mockWindow.nextPage();
      expect(RefreshPeopleList).toBeCalled();
    })
  })

  describe('fn.previousPage', () => {
    it('Should call SetEdiyForm', () => {
      HandleFormCommands(mockWindow);
      mockWindow.previousPage();
      expect(RefreshPeopleList).toBeCalled();
    })
  })

  describe('fn.addNewPerson', () => {
    it('Should call SetEdiyForm', () => {
      HandleFormCommands(mockWindow);
      mockWindow.addNewPerson();

      expect(remove).toBeCalledTimes(2);
    })
  })

  describe('fn.closeModal', () => {
    it('Should call SetEdiyForm', () => {
      HandleFormCommands(mockWindow);
      mockWindow.closeModal();

      expect(resetModalForm).toBeCalledTimes(2);
      expect(add).toBeCalledTimes(2);
    })
  })  
})