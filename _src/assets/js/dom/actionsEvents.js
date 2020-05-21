//function for get id
const getIdElement = (ev) => {
  const element = ev.currentTarget;
  const idElement = parseInt(element.dataset.id);
  return idElement;
};

//LIST EVENTS
const addColumn = (data) => {
  data.push({
    title: 'Título',
    cards: [],
  });
};
const changeTitleColumn = (ev, data) => {
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  data[dataId].title = element.value;
};
const removeColumn = (ev, data) => {
  const dataId = getIdElement(ev);
  if (ev.clientX !== 0) {
    data.splice(dataId, 1);
  }
};
const moveColumn = (ev, data) => {
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  const actionBtn = element.dataset.action;
  const indexObjectMove = actionBtn === 'move-right' ? dataId + 1 : dataId - 1;
  const elementMove = data.splice(dataId, 1);
  data.splice(indexObjectMove, 0, elementMove[0]);
};
const addCard = (ev, data) => {
  const dataId = getIdElement(ev);
  data[dataId].cards.push({
    id: 'card-',
    title: 'Título tarjeta',
    description: 'Lorem ipsum dolor sit amet',
    tags: ['Git', 'Github'],
  });
};
const submitForm = (ev) => {
  ev.preventDefault();
};

//CARD EVENTS
const moveUp = (ev, data) => {
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  const indexList = parseInt(element.parentNode.dataset.id);
  const listSelect = data[indexList];
  const cardMove = listSelect.cards.splice(dataId, 1);
  listSelect.cards.splice(dataId - 1, 0, cardMove[0]);
};
const moveDown = (ev, data) => {
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  const indexList = parseInt(element.parentNode.dataset.id);
  const listSelect = data[indexList];
  const cardMove = listSelect.cards.splice(dataId, 1);
  listSelect.cards.splice(dataId + 1, 0, cardMove[0]);
};
export default {
  addCard,
  addColumn,
  changeTitleColumn,
  moveColumn,
  removeColumn,
  submitForm,
  moveUp,
  moveDown,
};
