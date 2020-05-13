const saveLS = (dataList) => {
  localStorage.setItem('dataList', JSON.stringify(dataList));
};

const getLS = () => {
  return JSON.parse(localStorage.getItem('dataList'));
};
export default {saveLS, getLS};
