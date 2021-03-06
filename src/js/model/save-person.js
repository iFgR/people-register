import { NewPerson, EditPerson } from '../store/store-engine.js';

export default () => {
  const personId = document.getElementsByName('formPersonId')[0].value;
  const personName = document.getElementsByName('formPersonName')[0].value;
  const cpf = document.getElementsByName('formCpf')[0].value;
  const phone = document.getElementsByName('formPhone')[0].value;
  const email = document.getElementsByName('formEmail')[0].value;
  const birthday = document.getElementsByName('formBirthday')[0].value;
  const gender = document.getElementsByName('formGender')[0].checked ? 'male' : 'female';
  const isActive = !!document.getElementsByName('formIsActive')[0].checked;

  const personInfo = {
    personName,
    cpf,
    phone,
    email,
    birthday,
    gender,
    isActive
  }

  if (personId) {
    EditPerson(personId, personInfo)
  } else {
    NewPerson(personInfo);
  }

  return true
}