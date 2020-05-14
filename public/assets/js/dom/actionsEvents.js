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
export default {addColumn, removeColumn};

//# sourceMappingURL=actionsEvents.js.map
