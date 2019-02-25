const listMethods = {
  editPerson: () => {
    console.log('edit');
  }
}

export default () => {
  // window.editPerson = editPerson;
  Object.assign(window, listMethods);
}