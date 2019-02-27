jest.mock('../../../src/js/core/render-people-list.js');
jest.mock('../../../src/js/core/reset-people-list.js');

import * as ListAllPeople from '../../../src/js/model/list-all-people.js';
import RenderPeopleList from '../../../src/js/core/render-people-list.js';
import ResetPeopleList from '../../../src/js/core/reset-people-list.js';
import RefreshPeopleList from '../../../src/js/core/refresh-people-list';

ListAllPeople.default = jest.fn(() => {
  return [{ personName: 'b' }, { personName: 'c' }]
})


describe('refresh-people-list', () => {
  beforeEach(() => {
  })

  it('Should call ResetPeopleList', () => {
    RefreshPeopleList();

    expect(ResetPeopleList).toBeCalledTimes(1);
    expect(ListAllPeople.default).toBeCalledTimes(1);
    expect(RenderPeopleList).toBeCalledWith([
      { personName: 'b' },
      { personName: 'c' }
    ]);
  })
})