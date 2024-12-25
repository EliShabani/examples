const listValues = [];

function createListItem(value) {
  const listItem = document.createElement('div');
  listItem.classList.add('test-item');

  const container = document.createElement('div');
  container.classList.add('test-container');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const valueItem = document.createElement('span');
  valueItem.textContent = value;

  const deleteLink = document.createElement('a');
  deleteLink.textContent = 'Delete';
  deleteLink.href = '#';
  deleteLink.onclick = () => {
    deleteItem(listItem);
  };
  container.appendChild(checkBox);
  container.appendChild(valueItem);
  listItem.appendChild(container);
  listItem.appendChild(deleteLink);
  return listItem;
}

function deleteItem(item) {
  const list = document.getElementById('listId');
  const index = Array.from(list.children).indexOf(item);
  listValues.splice(index, 1);
  drawList(listValues);
}

function add() {
  const input = document.getElementById('inputId');
  if (input.value) {
    listValues.push(input.value);
    drawList(listValues);
    input.value = '';
  }
}

function drawList(values) {
  clearList();
  addValuesToList(values);
}

function addValuesToList(values) {
  const list = document.getElementById('listId');
  for (const value of values) {
    const item = createListItem(value);
    list.appendChild(item);
  }
}

function clearList() {
  const list = document.getElementById('listId');
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

function search() {
  const searchInput = document.getElementById('searchId');
  const exceptInput = document.getElementById('exceptId');
  const filteredValues = listValues.filter(
    (bb) =>
      (searchInput.value ? bb.includes(searchInput.value) : true) &&
      (exceptInput.value ? !bb.includes(exceptInput.value) : true)
  );
  drawList(filteredValues);
}

function clearSearch() {
  const searchInput = document.getElementById('searchId');
  const exceptInput = document.getElementById('exceptId');
  searchInput.value = '';
  exceptInput.value = '';
  drawList(listValues);
}
