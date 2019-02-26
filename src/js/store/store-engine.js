const storeName = 'people';

export const setStore = (payload) => window.localStorage.setItem(storeName, JSON.stringify(payload));
export const getStore = () => window.localStorage.getItem(storeName);

export const hashId = () => {
  const hash = [];
  for (let pos = 0; pos <= 12; pos++) {
    const randLetter = Math.floor(Math.random() * 25 + 97);
    const randNumber = Math.floor(Math.random() * 10 + 48);
    const letterOrNumber = Math.floor(Math.random() * 2 + 1);
    hash.push(String.fromCharCode(letterOrNumber % 2 ? randNumber : randLetter));
  };
  return hash.join('');
}

export const NewPerson = info => {
  const peopleList = ListPeople();
  const formatInfo = {
    ...info,
    id: hashId()
  }
  peopleList.push(formatInfo);
  
  setStore(peopleList);
};

export const ListPeople = () => JSON.parse(getStore() || '[]');

export const RemovePerson = (personId) => {
  const peopleList = ListPeople();
  const removedPeronList = peopleList.filter((personData) => personData.id !== personId);

  setStore(removedPeronList);
}

export const EditPerson = (personId, personInfo) => {
  const peopleList = ListPeople();
  const peopleListEdited = peopleList.map((personData) => {
    let editedInfo = {};
    if (personData.id === personId) {
      editedInfo = {
        ...personInfo,
        id: personData.id
      }
    } else {
      editedInfo = personData;
    }
    return editedInfo;
  });

  setStore(peopleListEdited);
}
