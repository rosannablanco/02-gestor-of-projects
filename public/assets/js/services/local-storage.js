const getLS = () => {
  return JSON.parse(localStorage.getItem('dataList'));
};
const saveLS = (dataList) => {
  localStorage.setItem('dataList', JSON.stringify(dataList));
};

const isValid = () => {
  const localStorageData = localStorage.getItem('dataList');
  if (localStorageData === null) {
    return false;
  } else {
    return true;
  }
};
export default {getLS, saveLS, isValid};

//# sourceMappingURL=local-storage.js.map
