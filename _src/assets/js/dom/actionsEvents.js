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
  ev.preventDefault();
  //console.log(ev.which);
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  data[dataId].title = element.value;
};
const removeColumn = (ev, data) => {
  ev.preventDefault();
  const dataId = getIdElement(ev);
  data.splice(dataId, 1);
  if (ev.clientX !== 0) {
    data.splice(dataId, 1);
  }
};
const moveColumn = (ev, data) => {
  ev.preventDefault();
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
  ev.stopPropagation();
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  const indexList = parseInt(element.parentNode.dataset.id);
  const listSelect = data[indexList];
  const cardMove = listSelect.cards.splice(dataId, 1);
  listSelect.cards.splice(dataId - 1, 0, cardMove[0]);
};
const moveDown = (ev, data) => {
  ev.stopPropagation();
  const dataId = getIdElement(ev);
  const element = ev.currentTarget;
  const indexList = parseInt(element.parentNode.dataset.id);
  const listSelect = data[indexList];
  const cardMove = listSelect.cards.splice(dataId, 1);
  listSelect.cards.splice(dataId + 1, 0, cardMove[0]);
};
//GET DATA FROM CARD
const getCard = (ev, data) => {
  const listId = parseInt(ev.currentTarget.parentNode.parentNode.dataset.id);
  const cardId = ev.currentTarget.id;
  const cardSelect = data[listId].cards[cardId];
  return cardSelect;
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
  //get data Card for modal
  getCard,
};
