export default (personInfo) => {
  document.getElementsByName('formPersonId')[0].value = personInfo.id;
  document.getElementsByName('formPersonName')[0].value = personInfo.personName;
  document.getElementsByName('formCpf')[0].value = personInfo.cpf;
  document.getElementsByName('formPhone')[0].value = personInfo.phone;
  document.getElementsByName('formIsActive')[0].checked = personInfo.isActive;
  document.getElementsByName('formBirthday')[0].value = personInfo.birthday;
}