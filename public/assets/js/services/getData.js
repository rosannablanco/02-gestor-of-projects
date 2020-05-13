const getDataFromApi = () => {
  return fetch('../../../api/board.json').then((response) => response.json());
};
export default {getDataFromApi};

//# sourceMappingURL=getData.js.map
