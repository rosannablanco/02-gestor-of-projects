//list events
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
  const actionBtn = element.dataset.action;
  const indexObjectMove = actionBtn === 'move-right' ? dataId + 1 : dataId - 1;
  const elementMove = data.splice(dataId, 1);
  data.splice(indexObjectMove, 0, elementMove[0]);
};

const submitForm = (ev) => {
  ev.preventDefault();
};

const getIdElement = (ev) => {
  const element = ev.currentTarget;
  const idElement = parseInt(element.dataset.id);
  return idElement;
};
export default {
  addColumn,
  removeColumn,
  moveColumn,
  changeTitleColumn,
  submitForm,
};
