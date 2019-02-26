export default () => {
  document.getElementsByName('formPersonId')[0].value = '';
  document.getElementsByName('formPersonName')[0].value = '';
  document.getElementsByName('formCpf')[0].value = '';
  document.getElementsByName('formPhone')[0].value = '';
  document.getElementsByName('formEmail')[0].value = '';
  document.getElementsByName('formBirthday')[0].value = '';
  document.getElementsByName('formGender')[0].checked = '';
  document.getElementsByName('formGender')[1].checked = '';
  document.getElementsByName('formIsActive')[0].checked = '';
  document.getElementsByName('formIsActive')[1].checked = '';
  
}