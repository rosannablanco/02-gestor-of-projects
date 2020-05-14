//list events
const addColumn = (data) => {
  data.push({
    title: 'Título',
    cards: [],
  });
};
const removeColumn = (elementId, data) => {
  const Index = elementId.form.id;
  data.splice(Index, 1);
};
const moveColumn = () => {
  console.log('moviendo columnas');
};
export default {
  addColumn,
  removeColumn,
  moveColumn,
};
