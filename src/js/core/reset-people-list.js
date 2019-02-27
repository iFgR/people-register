export default () => {
  const listContainer = document.getElementsByClassName('list')[0];
  const listItem = listContainer.children;
  const listCount = listItem.length;

  for (let itemIndex = 0; itemIndex < listCount; itemIndex++) {
    listContainer.removeChild(listItem[0]);
  }
}