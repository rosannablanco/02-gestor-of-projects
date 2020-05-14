//list events
const addColumn = (data) => {
  data.push({
    title: 'Título',
    cards: [],
  });
};
const removeColumn = (element, data) => {
  const Index = element.form.id;
  data.splice(Index, 1);
};
const moveColumn = (element, data) => {
  const actionBtn = element.dataset.action;
  const Index = element.form.id;
  const indexObjectMove = actionBtn === 'move-right' ? Index + 1 : Index - 1;
  const elementMove = data.splice(Index, 1);
  data.splice(indexObjectMove, 0, elementMove[0]);
};
export default {
  addColumn,
  removeColumn,
  moveColumn,
};
