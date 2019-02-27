import AddPeopleCard from '../../../src/js/core/add-people-card.js';

const appendChild = jest.fn();
// const className = jest.fn();
const mockPersonInfo = {
  id: 1,
  personName: 'a',
  phone: 'b',
  activeIcon: 'c',
  isActive: 'd',
  cpf: 'e',
  birthday: 'f',
  gender: 'g',
  email: 'h'
}

describe('add-people-card', () => {
  beforeEach(() => {
    document.createElement = jest.fn(() => ({
      className: null
    }));
    document.querySelector = jest.fn((param) => ({
      appendChild
    }));
  });

  it('Should define new elements', () => {
    AddPeopleCard(mockPersonInfo);

    expect(document.createElement).toBeCalledWith('li');
    expect(document.querySelector).toBeCalledWith('.list');
  })  
})