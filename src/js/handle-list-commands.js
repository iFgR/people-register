const listMethods = {
  editPerson: personId => {
    console.log('edit', personId);
  }
};

export default () => {
  Object.assign(window, listMethods);
};
