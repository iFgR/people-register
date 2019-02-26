export default (personInfo) => {
  document.getElementsByName('formPersonId')[0].value = personInfo.id;
  document.getElementsByName('formPersonName')[0].value = personInfo.personName;
  document.getElementsByName('formCpf')[0].value = personInfo.cpf;
  document.getElementsByName('formPhone')[0].value = personInfo.phone;
  document.getElementsByName('formEmail')[0].value = personInfo.email;
  document.getElementsByName('formBirthday')[0].value = personInfo.birthday;
  document.getElementsByName('formGender')[0].checked = personInfo.gender === 'male';
  document.getElementsByName('formGender')[1].checked = personInfo.gender === 'female';
  document.getElementsByName('formIsActive')[0].checked = personInfo.isActive;
  document.getElementsByName('formIsActive')[1].checked = !personInfo.isActive;
}