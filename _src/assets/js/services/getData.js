const getDataFromApi = () => {
  return fetch('')
    .then((response) => response.json())
    .then((data) => data);
};
export default getDataFromApi;
