import ResetModalForm from '../../../src/js/core/reset-modal-form';

describe('reset-modal-form', () => {
  it('Should erase all fields', () => {
    const addFields = []
    document.getElementsByName = jest.fn((param) => {
      addFields.push(param)
      return [
        {
          value: '1',
          checked: '1'
        },
        {
          value: '1',
          checked: '1'
        }
      ]
    });

    ResetModalForm();

    expect(addFields).toEqual([
      'formPersonId',
      'formPersonName',
      'formCpf',
      'formPhone',
      'formEmail',
      'formBirthday',
      'formGender',
      'formGender',
      'formIsActive',
      'formIsActive']);
  })
})